'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import type { BlogPost, BlogCategory } from '@/lib/blog';
import { getPostSlugForLocale } from '@/lib/blog';

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  guides: 'bg-blue-100 text-blue-700',
  legal: 'bg-amber-100 text-amber-700',
  local: 'bg-green-100 text-green-700',
  news: 'bg-purple-100 text-purple-700',
};

interface BlogListProps {
  posts: BlogPost[];
  locale: string;
}

export default function BlogList({ posts, locale }: BlogListProps) {
  const t = useTranslations('BlogPage');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const categoryKeys = [
    { key: 'all' as const, label: t('cat_all') },
    { key: 'guides' as const, label: t('cat_guides') },
    { key: 'legal' as const, label: t('cat_legal') },
    { key: 'local' as const, label: t('cat_local') },
    { key: 'news' as const, label: t('cat_news') },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter Bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categoryKeys.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
              activeCategory === key
                ? 'bg-[#E63946] text-white'
                : 'bg-white text-[#6C757D] border border-gray-200 hover:border-[#E63946] hover:text-[#E63946]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Blog Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} locale={locale} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-[#6C757D] py-12">{t('no_posts')}</p>
      )}

      {/* Pagination placeholder */}
      {/* TODO: Add pagination when more posts are available */}
    </>
  );
}

function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
  const t = useTranslations(post.translationNamespace);
  const tBlog = useTranslations('BlogPage');

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const slug = getPostSlugForLocale(post, locale);

  return (
    <Link
      href={`/blog/${slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={post.image}
          alt={t('post_title')}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}
          >
            {tBlog(`cat_${post.category}`)}
          </span>
          <span className="text-xs text-[#6C757D]">{formattedDate}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1D1D1B] mb-2 group-hover:text-[#E63946] transition-colors">
          {t('post_title')}
        </h3>
        <p className="text-[#6C757D] text-sm line-clamp-2 mb-4">
          {t('post_excerpt')}
        </p>
        <span className="text-[#E63946] font-semibold text-sm inline-flex items-center gap-1">
          {tBlog('read_more')} <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
