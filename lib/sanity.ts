import { createClient, type QueryParams } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/types';
import type { BlogCategory } from '@/lib/blog';

export const SANITY_PROJECT_ID = '8vhogdv7';
export const SANITY_DATASET = 'production';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-10-01',
  useCdn: true,
  perspective: 'published',
});

const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImage | { asset: { _ref: string } }) {
  return imageBuilder.image(source);
}

export type SanityImage = {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  alt?: string;
};

export type SanityBlogPostCard = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: BlogCategory;
  coverImage: SanityImage;
  language: string;
};

export type SanityBlogPostFull = SanityBlogPostCard & {
  body: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
  };
  author?: {
    name: string;
    picture?: SanityImage;
  };
};

const CARD_FIELDS = /* groq */ `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  "category": category->value,
  coverImage,
  language
`;

const FULL_FIELDS = /* groq */ `
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  "category": category->value,
  coverImage,
  language,
  body,
  seo,
  author->{name, picture}
`;

async function groq<T>(query: string, params: QueryParams = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: { revalidate: 60 },
  });
}

export async function getSanityPostsForLocale(locale: string): Promise<SanityBlogPostCard[]> {
  const query = `*[_type == "blogPost" && language == $locale && defined(slug.current)] | order(publishedAt desc) {${CARD_FIELDS}}`;
  try {
    return await groq<SanityBlogPostCard[]>(query, { locale });
  } catch {
    // If the dataset is empty or credentials are wrong, return [] instead of crashing the page.
    return [];
  }
}

export async function getSanityPostBySlug(
  slug: string,
  locale: string,
): Promise<SanityBlogPostFull | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug && language == $locale][0]{${FULL_FIELDS}}`;
  try {
    return (await groq<SanityBlogPostFull | null>(query, { slug, locale })) ?? null;
  } catch {
    return null;
  }
}

export async function getAllSanitySlugParams(): Promise<
  { locale: string; slug: string }[]
> {
  const query = `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current, language}`;
  try {
    const rows = await groq<{ slug: string; language: string }[]>(query);
    return rows
      .filter((r) => ['fr', 'en', 'nl'].includes(r.language))
      .map((r) => ({ locale: r.language, slug: r.slug }));
  } catch {
    return [];
  }
}
