import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Post-form thank-you pages — no SEO value, kept out of the index entirely.
        disallow: [
          '/fr/merci',
          '/en/thank-you',
          '/nl/bedankt',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
