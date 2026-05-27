import type { PortableTextBlock } from '@portabletext/types';
import { sanityClient } from './client';

export type Locale = 'fr' | 'nl' | 'en';

const localeFilter = `defined(title[$locale]) && defined(slug[$locale].current)`;

const postListProjection = `
  _id,
  "title": title[$locale],
  "slug": slug[$locale].current,
  "excerpt": excerpt[$locale],
  category,
  publishedAt,
  readingTimeMinutes,
  "coverImage": select(defined(coverImage.asset) => coverImage{ asset, "alt": alt[$locale] }, null)
`;

export type SanityImageRef = {
  _type?: 'image';
  asset: { _ref: string; _type: 'reference' };
};

export type PostCoverImage = SanityImageRef & { alt: string | null };

export type PostCategory = 'guides' | 'legal' | 'local' | 'news';

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: PostCategory;
  publishedAt: string;
  readingTimeMinutes: number | null;
  coverImage: PostCoverImage | null;
};

export type PostFull = PostListItem & {
  _updatedAt: string;
  body: PortableTextBlock[] | null;
  bodyText: string;
  seoTitle: string | null;
  seoDescription: string | null;
  slugByLocale: { fr: string | null; nl: string | null; en: string | null };
};

export type PostSlugRow = {
  locale: Locale;
  slug: string;
  publishedAt: string;
  _updatedAt: string;
};

export async function getPosts(locale: Locale, limit?: number): Promise<PostListItem[]> {
  const slice = typeof limit === 'number' ? `[0...$limit]` : '';
  const query = `*[_type == "post" && ${localeFilter}] | order(publishedAt desc) ${slice} { ${postListProjection} }`;
  const params: Record<string, string | number> = { locale };
  if (typeof limit === 'number') params.limit = limit;
  try {
    return await sanityClient.fetch<PostListItem[]>(query, params, {
      next: { revalidate: 300 },
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(locale: Locale, slug: string): Promise<PostFull | null> {
  const query = `*[_type == "post" && slug[$locale].current == $slug][0] {
    ${postListProjection},
    _updatedAt,
    "body": body[$locale],
    "bodyText": pt::text(body[$locale]),
    "seoTitle": seoTitle[$locale],
    "seoDescription": seoDescription[$locale],
    "slugByLocale": {
      "fr": slug.fr.current,
      "nl": slug.nl.current,
      "en": slug.en.current
    }
  }`;
  try {
    const result = await sanityClient.fetch<PostFull | null>(
      query,
      { locale, slug },
      { next: { revalidate: 300 } },
    );
    return result ?? null;
  } catch {
    return null;
  }
}

/**
 * Look up which locale-prefixed URL a slug actually belongs to.
 * Used to 301 cross-locale slug requests (e.g. /fr/blog/<en-slug> → /en/blog/<en-slug>)
 * instead of 404ing, which kept appearing in Ahrefs crawl reports.
 */
export async function findPostSlugAcrossLocales(
  slug: string,
): Promise<{ fr: string | null; nl: string | null; en: string | null } | null> {
  const query = `*[_type == "post" && (slug.fr.current == $slug || slug.nl.current == $slug || slug.en.current == $slug)][0] {
    "fr": slug.fr.current,
    "nl": slug.nl.current,
    "en": slug.en.current
  }`;
  try {
    const result = await sanityClient.fetch<{ fr: string | null; nl: string | null; en: string | null } | null>(
      query,
      { slug },
      { next: { revalidate: 300 } },
    );
    return result ?? null;
  } catch {
    return null;
  }
}

type AllSlugsRow = {
  _updatedAt: string;
  publishedAt: string;
  slugs: { locale: Locale; slug: string | null }[];
};

export async function getAllPostSlugs(): Promise<PostSlugRow[]> {
  const query = `*[_type == "post" && defined(publishedAt)] {
    _updatedAt,
    publishedAt,
    "slugs": [
      {"locale": "fr", "slug": slug.fr.current},
      {"locale": "nl", "slug": slug.nl.current},
      {"locale": "en", "slug": slug.en.current}
    ]
  }`;
  try {
    const rows = await sanityClient.fetch<AllSlugsRow[]>(query, {}, {
      next: { revalidate: 300 },
    });
    return rows.flatMap((r) =>
      r.slugs
        .filter((s): s is { locale: Locale; slug: string } =>
          typeof s.slug === 'string' && s.slug.length > 0,
        )
        .map((s) => ({
          locale: s.locale,
          slug: s.slug,
          publishedAt: r.publishedAt,
          _updatedAt: r._updatedAt,
        })),
    );
  } catch {
    return [];
  }
}
