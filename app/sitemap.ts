import type { MetadataRoute } from 'next';
import { SITE_URL, LOCALES, ALL_PATHS, getLocalizedPath } from '@/lib/seo';
import { BLOG_POSTS, getPostSlugForLocale } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of ALL_PATHS) {
    for (const locale of LOCALES) {
      const localizedPath = getLocalizedPath(path, locale);
      const languages: Record<string, string> = {};
      for (const loc of LOCALES) {
        languages[loc] = `${SITE_URL}/${loc}${getLocalizedPath(path, loc)}`;
      }

      entries.push({
        url: `${SITE_URL}/${locale}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1 : path.startsWith('/services/') ? 0.9 : 0.8,
        alternates: { languages },
      });
    }
  }

  // Blog post entries with localized slugs
  for (const post of BLOG_POSTS) {
    for (const locale of LOCALES) {
      const slug = getPostSlugForLocale(post, locale);
      const languages: Record<string, string> = {};
      for (const loc of LOCALES) {
        languages[loc] = `${SITE_URL}/${loc}/blog/${getPostSlugForLocale(post, loc)}`;
      }

      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
