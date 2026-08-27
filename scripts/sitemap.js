// Writes dist/sitemap.xml from the same route table the prerenderer uses.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const { SITE, ROUTES, canonicalPath } = require('./routes.js');

const DIST = path.resolve(__dirname, '..', 'dist');
const REPO = path.resolve(__dirname, '..');

// Last commit touching a route's sources, so lastmod tracks real edits
// rather than churning on every build.
function lastModified(sources) {
  const dates = (sources || [])
    .map((src) => {
      try {
        const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', src], {
          cwd: REPO,
          encoding: 'utf8',
        }).trim();
        return out || null;
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  if (!dates.length) return null;
  return dates.sort().pop().slice(0, 10);
}

const urls = ROUTES.map((route) => {
  const lastmod = lastModified(route.source);
  return [
    '  <url>',
    `    <loc>${SITE}${canonicalPath(route.path)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <priority>${route.path === '/' ? '1.0' : '0.7'}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n');
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
console.log(`Wrote dist/sitemap.xml (${ROUTES.length} urls).`);
