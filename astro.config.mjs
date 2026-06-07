// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://poolsafetysunshinecoast.com.au',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({
      customPages: [
  "https://poolsafetysunshinecoast.com.au/",
  "https://poolsafetysunshinecoast.com.au/about/",
  "https://poolsafetysunshinecoast.com.au/buderim/",
  "https://poolsafetysunshinecoast.com.au/caloundra/",
  "https://poolsafetysunshinecoast.com.au/cpr-sign-sunshine-coast/",
  "https://poolsafetysunshinecoast.com.au/gate-compliance-sunshine-coast/",
  "https://poolsafetysunshinecoast.com.au/local-trades/",
  "https://poolsafetysunshinecoast.com.au/maroochydore/",
  "https://poolsafetysunshinecoast.com.au/mooloolaba/",
  "https://poolsafetysunshinecoast.com.au/noosa-heads/",
  "https://poolsafetysunshinecoast.com.au/pool-register-sunshine-coast/",
  "https://poolsafetysunshinecoast.com.au/privacy/",
  "https://poolsafetysunshinecoast.com.au/qbcc-certificate-sunshine-coast/",
  "https://poolsafetysunshinecoast.com.au/quote/",
  "https://poolsafetysunshinecoast.com.au/services/form-23-certificate/",
  "https://poolsafetysunshinecoast.com.au/services/holiday-let-inspection/",
  "https://poolsafetysunshinecoast.com.au/services/new-tenancy-inspection/",
  "https://poolsafetysunshinecoast.com.au/services/non-compliance-rectification/",
  "https://poolsafetysunshinecoast.com.au/services/pre-sale-inspection/",
  "https://poolsafetysunshinecoast.com.au/sunshine-coast-region/",
  "https://poolsafetysunshinecoast.com.au/pricing/"
],
      filter: (page) => !page.includes('/thanks/') && !page.includes('/404'),
    })],
});
