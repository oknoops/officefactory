import type { MetadataRoute } from 'next';
import { SITE_URL, LOCALES, ALL_PATHS, getLocalizedPath } from '@/lib/seo';
import { BLOG_POSTS, getPostSlugForLocale } from '@/lib/blog';
import { getAllSanitySlugParams, sanityClient } from '@/lib/sanity';

/**
 * Stable lastModified dates per static path.
 * Using a real content-change date (not `new Date()`) matters:
 * Google penalises sitemaps that claim every URL was updated today.
 */
const STATIC_LAST_MODIFIED: Partial<Record<string, string>> = {
  '/': '2026-04-21',
  '/a-propos': '2026-03-15',
  '/contact': '2026-04-21',
  '/nos-services': '2026-03-15',
  '/services/domiciliation-bruxelles': '2026-03-20',
  '/services/coworking-bruxelles': '2026-03-20',
  '/services/bureau-individuel-bruxelles': '2026-03-20',
  '/services/bureau-equipe-bruxelles': '2026-03-20',
  '/services/demarches-administratives': '2026-03-20',
  '/services/domiciliation-srl-bv': '2026-03-20',
  '/services/domiciliation-asbl-vzw': '2026-03-20',
  '/services/domiciliation-independants': '2026-03-20',
  '/services/domiciliation-startups': '2026-03-20',
  '/services/salle-de-reunion-bruxelles': '2026-03-20',
  '/services/siege-social-bruxelles': '2026-03-20',
  '/services/domiciliation-virtuelle': '2026-03-30',
  '/belgian-workspace-association': '2026-03-09',
  '/spf-economie': '2026-03-09',
  '/blog': '2026-04-21',
  '/faq': '2026-03-15',
  '/politique-de-confidentialite': '2026-03-01',
};

const PRIORITY_OVERRIDES: Partial<Record<string, number>> = {
  '/': 1,
  '/politique-de-confidentialite': 0.3,
  '/belgian-workspace-association': 0.5,
  '/spf-economie': 0.5,
  '/faq': 0.6,
};

function priorityFor(path: string): number {
  const override = PRIORITY_OVERRIDES[path];
  if (override !== undefined) return override;
  if (path.startsWith('/services/')) return 0.9;
  return 0.8;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        lastModified: STATIC_LAST_MODIFIED[path] ?? '2026-03-01',
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority: priorityFor(path),
        alternates: { languages },
      });
    }
  }

  for (const post of BLOG_POSTS) {
    for (const locale of LOCALES) {
      const slug = getPostSlugForLocale(post, locale);
      const languages: Record<string, string> = {};
      for (const loc of LOCALES) {
        languages[loc] = `${SITE_URL}/${loc}/blog/${getPostSlugForLocale(post, loc)}`;
      }

      entries.push({
        url: `${SITE_URL}/${locale}/blog/${slug}`,
        lastModified: post.date,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  // Sanity-authored posts (external contributors)
  try {
    const sanityParams = await getAllSanitySlugParams();
    if (sanityParams.length > 0) {
      const sanityDates = await sanityClient.fetch<{ slug: string; language: string; publishedAt: string }[]>(
        `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current, language, publishedAt}`,
        {},
        { next: { revalidate: 60 } },
      );
      const dateBySlug = new Map<string, string>();
      for (const d of sanityDates) dateBySlug.set(`${d.language}:${d.slug}`, d.publishedAt);

      for (const { locale, slug } of sanityParams) {
        entries.push({
          url: `${SITE_URL}/${locale}/blog/${slug}`,
          lastModified: dateBySlug.get(`${locale}:${slug}`) ?? '2026-04-21',
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  } catch {
    // If Sanity is unreachable, don't break the sitemap.
  }

  return entries;
}
