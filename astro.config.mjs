// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Client preview mode: only Home, Contact, Thank You, and Team are ready to show.
  // Everything else redirects to /coming-soon until it's built out.
  redirects: {
    '/services': '/coming-soon',
    '/shopify': '/coming-soon',
    '/magento': '/coming-soon',
    '/php': '/coming-soon',
    '/wordpress': '/coming-soon',
    '/work': '/coming-soon',
    '/career': '/coming-soon',
    '/geo-aeo-audit': '/coming-soon',
    '/aboutus': '/coming-soon',
    '/case-study/case': '/coming-soon',
  },
});
