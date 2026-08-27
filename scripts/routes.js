// Routes that get prerendered to static HTML and listed in the sitemap.
// Anything absent here stays SPA-only: reachable by URL, invisible to crawlers.
// `source` files date the sitemap's <lastmod> from their last commit.

const SITE = 'https://bendavidsteel.github.io';

const ROUTES = [
  {
    path: '/',
    title: 'Benjamin David Steel',
    description:
      "PhD candidate in computational social science at McGill's Network Dynamics Lab and researcher at the Media Ecosystem Observatory. Papers, art, and visual experiments.",
    source: ['src/views/pro/Home.vue'],
  },
  {
    path: '/about',
    title: 'About — Benjamin David Steel',
    description:
      'From the UK, living in Montreal. Former software developer, finishing a PhD in Computer Science, working at the Centre for Media Technology and Democracy.',
    source: ['src/views/pro/About.vue'],
  },
  {
    path: '/writing',
    title: 'Writing — Benjamin David Steel',
    description:
      'Essays and short fiction on social media, recommender systems, AI-generated media, and computational social science.',
    source: ['src/views/pro/Writing.vue'],
  },
  {
    path: '/visuals',
    title: 'Visuals — Benjamin David Steel',
    description:
      'Visualisations and visual experiments: datamaps of generated artificial life, particle Lenia, topic maps of social media.',
    source: ['src/views/pro/Visuals.vue', 'src/components/visuals'],
  },
  {
    path: '/films',
    title: 'Films — Benjamin David Steel',
    description: 'Short films and video projects.',
    source: ['src/views/pro/Films.vue'],
  },
  {
    path: '/articles/LeSoleil',
    title: 'Le Soleil — Benjamin David Steel',
    description: "A French translation of my short story 'The Sun'.",
    image: '/images/asahi.webp',
    source: ['src/components/articles/lesoleil'],
  },
  {
    path: '/articles/TheSun',
    title: 'The Sun — Benjamin David Steel',
    description: 'A short story about a whale and the sun.',
    image: '/images/asahi.webp',
    source: ['src/components/articles/thesun'],
  },
  {
    path: '/articles/ImplicitEvoParticleLife',
    title: 'Implicit evolution extension to particle life — Benjamin David Steel',
    description: 'Evolving interaction rules in particle life simulations.',
    image: '/images/evo_particle_life.png',
    source: ['src/components/articles/evoparticlelife'],
  },
  {
    path: '/articles/ParticleLeniaExplorer',
    title: 'Particle Lenia Explorer — Benjamin David Steel',
    description:
      'Mapping the space of extended particle Lenia using CLIP embeddings, PaCMAP, and Toponymy.',
    image: '/images/leniaexplorer.png',
    source: ['src/components/articles/particlelenia'],
  },
];

// Served URL for a route: GitHub Pages resolves a directory to its index.html,
// so every non-root path is canonically trailing-slash.
const canonicalPath = (p) => (p === '/' ? '/' : `${p}/`);

module.exports = { SITE, ROUTES, canonicalPath };
