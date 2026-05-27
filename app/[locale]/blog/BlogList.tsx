'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import type { BlogCategory } from '@/lib/blog';
import type { BlogCardItem } from '@/lib/blogCards';

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  guides: 'bg-blue-100 text-blue-700',
  legal: 'bg-amber-100 text-amber-700',
  local: 'bg-green-100 text-green-700',
  news: 'bg-purple-100 text-purple-700',
};

interface BlogListProps {
  items: BlogCardItem[];
  locale: string;
}

export default function BlogList({ items, locale }: BlogListProps) {
  const t = useTranslations('BlogPage');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>('all');

  const categoryKeys = [
    { key: 'all' as const, label: t('cat_all') },
    { key: 'guides' as const, label: t('cat_guides') },
    { key: 'legal' as const, label: t('cat_legal') },
    { key: 'local' as const, label: t('cat_local') },
    { key: 'news' as const, label: t('cat_news') },
  ];

  const filtered =
    activeCategory === 'all' ? items : items.filter((p) => p.category === activeCategory);

  return (
    <>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item) =>
          item.kind === 'code' ? (
            <CodeCard key={item.id} item={item} locale={locale} />
          ) : (
            <SanityCard key={item.id} item={item} locale={locale} />
          ),
        )}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#6C757D] py-12">{t('no_posts')}</p>
      )}
    </>
  );
}

function CodeCard({
  item,
  locale,
}: {
  item: Extract<BlogCardItem, { kind: 'code' }>;
  locale: string;
}) {
  const t = useTranslations(item.post.translationNamespace);
  const tBlog = useTranslations('BlogPage');

  const formattedDate = formatDate(item.date, locale);

  return (
    <Card
      href={`/${locale}/blog/${item.slug}`}
      image={item.post.image}
      imageAlt={t('post_title')}
      category={item.category}
      categoryLabel={tBlog(`cat_${item.category}`)}
      date={formattedDate}
      title={t('post_title')}
      excerpt={t('post_excerpt')}
      readMore={tBlog('read_more')}
    />
  );
}

function SanityCard({
  item,
  locale,
}: {
  item: Extract<BlogCardItem, { kind: 'sanity' }>;
  locale: string;
}) {
  const tBlog = useTranslations('BlogPage');
  const formattedDate = formatDate(item.date, locale);
  return (
    <Card
      href={`/${locale}/blog/${item.slug}`}
      image={item.image}
      imageAlt={item.imageAlt}
      category={item.category}
      categoryLabel={tBlog(`cat_${item.category}`)}
      date={formattedDate}
      title={item.title}
      excerpt={item.excerpt}
      readMore={tBlog('read_more')}
    />
  );
}

function Card({
  href,
  image,
  imageAlt,
  category,
  categoryLabel,
  date,
  title,
  excerpt,
  readMore,
}: {
  href: string;
  image: string;
  imageAlt: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  title: string;
  excerpt: string;
  readMore: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[category]}`}>
            {categoryLabel}
          </span>
          <span className="text-xs text-[#6C757D]">{date}</span>
        </div>
        <h3 className="text-lg font-bold text-[#1D1D1B] mb-2 group-hover:text-[#E63946] transition-colors">
          {title}
        </h3>
        <p className="text-[#6C757D] text-sm line-clamp-2 mb-4">{excerpt}</p>
        <span className="text-[#E63946] font-semibold text-sm inline-flex items-center gap-1">
          {readMore} <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

function formatDate(iso: string, locale: string) {
  return new Date(iso).toLocaleDateString(
    locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' },
  );
}
