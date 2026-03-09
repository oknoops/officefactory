import type { MetadataRoute } from 'next';
import { SITE_URL, LOCALES, ALL_PATHS } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of ALL_PATHS) {
    for (const locale of LOCALES) {
      const languages: Record<string, string> = {};
      for (const loc of LOCALES) {
        languages[loc] = `${SITE_URL}/${loc}${path}`;
      }

      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path.startsWith('/services/') ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
