// Renders each route in routes.js to static HTML in dist/, so crawlers that
// don't run JavaScript see real content instead of an empty #app div.
// Run after `vue-cli-service build`.

const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer-core');

const { ROUTES, canonicalPath } = require('./routes.js');
const { SITE } = require('./routes.js');

const DIST = path.resolve(__dirname, '..', 'dist');
const RENDER_TIMEOUT = 30000;
const MIN_CONTENT_CHARS = 50;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/snap/bin/chromium',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff': 'font/woff',
  '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.wasm': 'application/wasm', '.map': 'application/json', '.md': 'text/markdown',
  '.txt': 'text/plain', '.xml': 'application/xml',
};

// A previous run leaves dist/index.html prerendered. Reduce it back to an empty
// shell, or a stale render satisfies the content check before the real route mounts.
function toShell(html) {
  return html.replace(/<body([^>]*)>[\s\S]*<\/body>/i, '<body$1><div id="app"></div></body>');
}

function findChrome() {
  const found = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(
      'No Chrome/Chromium found for prerendering. Install Google Chrome or set CHROME_PATH.\n' +
        `Looked in:\n  ${CHROME_CANDIDATES.join('\n  ')}`
    );
  }
  return found;
}

// Serves dist/ with an SPA fallback to the pristine shell, held in memory so
// that writing prerendered pages mid-run can't poison later renders.
function startServer(shell) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(DIST, urlPath);
    if (filePath.startsWith(DIST) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(shell);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function injectMeta(html, route) {
  const url = SITE + canonicalPath(route.path);
  const tags = [
    `<meta name="description" content="${esc(route.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="${route.path.startsWith('/articles/') ? 'article' : 'website'}">`,
    `<meta property="og:title" content="${esc(route.title)}">`,
    `<meta property="og:description" content="${esc(route.description)}">`,
    `<meta property="og:url" content="${url}">`,
    route.image ? `<meta property="og:image" content="${SITE}${route.image}">` : null,
    `<meta name="twitter:card" content="${route.image ? 'summary_large_image' : 'summary'}">`,
  ].filter(Boolean).join('');

  let out = html.replace(/<title>.*?<\/title>/is, `<title>${esc(route.title)}</title>`);
  if (!/<title>/i.test(out)) out = out.replace(/<head([^>]*)>/i, `<head$1><title>${esc(route.title)}</title>`);
  // Drop any meta the shell already carries, so re-runs don't stack duplicates.
  out = out.replace(/<meta (?:name|property)="(?:description|og:[a-z:]+|twitter:[a-z]+)"[^>]*>/gi, '');
  out = out.replace(/<link rel="canonical"[^>]*>/gi, '');
  // The shell's no-JS warning is false on a prerendered page, and it would be
  // the first text a crawler reads.
  out = out.replace(/<noscript>[\s\S]*?<\/noscript>/i, '');
  return out.replace(/<\/head>/i, `${tags}</head>`);
}

const outputPath = (routePath) =>
  routePath === '/' ? path.join(DIST, 'index.html') : path.join(DIST, routePath, 'index.html');

async function main() {
  const shellPath = path.join(DIST, 'index.html');
  if (!fs.existsSync(shellPath)) throw new Error('dist/index.html missing — run the build first.');
  const shell = toShell(fs.readFileSync(shellPath, 'utf8'));

  const executablePath = findChrome();
  const { server, port } = await startServer(shell);
  const browser = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--enable-unsafe-swiftshader'],
  });

  const rendered = [];
  const failures = [];

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 1600 });
      await page.setRequestInterception(true);
      page.on('request', (r) => {
        // Never let a prerender count as a real visit.
        if (/gc\.zgo\.at|goatcounter\.com/.test(r.url())) return r.abort();
        r.continue();
      });

      try {
        await page.goto(`http://127.0.0.1:${port}${route.path}`, {
          waitUntil: 'domcontentloaded',
          timeout: RENDER_TIMEOUT,
        });
        await page.waitForFunction(
          (min) => {
            const app = document.getElementById('app');
            return app && app.innerText.trim().length > min;
          },
          { timeout: RENDER_TIMEOUT },
          MIN_CONTENT_CHARS
        );
        // Best-effort settle; a requestAnimationFrame loop must not block us.
        await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }).catch(() => {});

        const html = await page.content();
        const text = await page.evaluate(() => document.getElementById('app').innerText.trim().length);
        rendered.push({ route, html: injectMeta(html, route), chars: text });
      } catch (err) {
        failures.push({ route, message: err.message.split('\n')[0] });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  // Written only after the browser is down, so the shell served above stays pristine.
  for (const { route, html, chars } of rendered) {
    const out = outputPath(route.path);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log(`  ${route.path.padEnd(38)} ${String(chars).padStart(6)} chars -> ${path.relative(DIST, out)}`);
  }

  if (failures.length) {
    console.error('\nPrerender failed for:');
    failures.forEach((f) => console.error(`  ${f.route.path}: ${f.message}`));
    process.exit(1);
  }
  console.log(`\nPrerendered ${rendered.length} routes.`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
