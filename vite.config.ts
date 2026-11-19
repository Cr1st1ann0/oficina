import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { company, mapsSearchUrl } from './src/data/company';
import { activeServices } from './src/data/services';

/**
 * URL pública final do site (com barra no final), usada em canonical, Open Graph,
 * sitemap.xml e robots.txt. No GitHub Actions ela é preenchida automaticamente
 * (veja .github/workflows/deploy.yml). Também pode ser definida manualmente:
 *   SITE_URL=https://www.seudominio.com.br/ npm run build
 * Sem SITE_URL, o build continua funcionando e apenas omite as tags que exigem URL absoluta.
 */
const rawSiteUrl = process.env.SITE_URL?.trim() ?? '';
const SITE_URL = rawSiteUrl ? rawSiteUrl.replace(/\/?$/, '/') : '';

function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: company.legalDescriptor,
    alternateName: company.name,
    description: company.shortDescription,
    ...(SITE_URL && { url: SITE_URL, '@id': `${SITE_URL}#oficina`, image: `${SITE_URL}og-image.jpg`, logo: `${SITE_URL}icon-192.png` }),
    telephone: company.phoneE164,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    areaServed: { '@type': 'City', name: `${company.address.city}, ${company.address.stateName}` },
    hasMap: mapsSearchUrl,
    openingHoursSpecification: company.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [company.social.instagram.url],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Especialidades',
      itemListElement: activeServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };
}

function seoPlugin(): Plugin {
  return {
    name: 'garage-seo',
    transformIndexHtml() {
      const tags: Array<{ tag: string; attrs?: Record<string, string>; children?: string; injectTo?: 'head' }> = [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(structuredData()),
          injectTo: 'head',
        },
      ];
      if (SITE_URL) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: SITE_URL }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: SITE_URL }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${SITE_URL}og-image.jpg` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE_URL}og-image.jpg` }, injectTo: 'head' },
        );
      } else {
        tags.push({ tag: 'meta', attrs: { property: 'og:image', content: 'og-image.jpg' }, injectTo: 'head' });
      }
      return tags;
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', ...(SITE_URL ? ['', `Sitemap: ${SITE_URL}sitemap.xml`] : []), ''].join('\n');
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      if (SITE_URL) {
        const today = new Date().toISOString().slice(0, 10);
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      }
    },
  };
}

export default defineConfig({
  // Caminhos relativos: o mesmo build funciona em usuario.github.io/ e em usuario.github.io/repositorio/
  base: './',
  plugins: [react(), seoPlugin()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 2048,
    cssCodeSplit: false,
  },
});
