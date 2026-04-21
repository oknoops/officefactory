import type { BlogCategory, BlogPost } from '@/lib/blog';
import { getPostSlugForLocale } from '@/lib/blog';
import { getSanityPostsForLocale, urlForImage, type SanityBlogPostCard } from '@/lib/sanity';
import type { getTranslations } from 'next-intl/server';

export type BlogCardItem =
  | { kind: 'code'; id: string; post: BlogPost; slug: string; date: string; category: BlogCategory }
  | {
      kind: 'sanity';
      id: string;
      slug: string;
      title: string;
      excerpt: string;
      image: string;
      imageAlt: string;
      date: string;
      category: BlogCategory;
    };

export async function buildBlogCards(
  codePosts: BlogPost[],
  locale: string,
  getT: typeof getTranslations,
): Promise<BlogCardItem[]> {
  void getT; // reserved for future localized titles of code posts if needed

  const codeItems: BlogCardItem[] = codePosts.map((post) => ({
    kind: 'code',
    id: post.id,
    post,
    slug: getPostSlugForLocale(post, locale),
    date: post.date,
    category: post.category,
  }));

  const sanityPosts: SanityBlogPostCard[] = await getSanityPostsForLocale(locale);
  const sanityItems: BlogCardItem[] = sanityPosts.map((p) => ({
    kind: 'sanity',
    id: p._id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    image: urlForImage(p.coverImage).width(800).height(450).fit('crop').auto('format').url(),
    imageAlt: p.coverImage.alt || p.title,
    date: p.publishedAt,
    category: p.category,
  }));

  return [...codeItems, ...sanityItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
