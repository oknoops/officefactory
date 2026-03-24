import Image from 'next/image';
import { FC } from 'react';
import { useTranslations, useMessages } from 'next-intl';
import { Link } from '@/i18n/routing';
import { BLOG_POSTS, getPostSlugForLocale } from '@/lib/blog';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

const CATEGORY_KEYS: Record<string, string> = {
    guides: 'cat_guides',
    legal: 'cat_legal',
    local: 'cat_local',
    news: 'cat_news',
};

const BlogPreview: FC = () => {
    const t = useTranslations('BlogPreview');
    const locale = useLocale();
    const messages = useMessages() as Record<string, Record<string, string>>;

    const recentPosts = [...BLOG_POSTS]
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 3);

    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] mb-2">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-[#6C757D]">
                            {t('subtitle')}
                        </p>
                    </div>
                    <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline">
                        {t('view_all')} <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map((post) => {
                        const slug = getPostSlugForLocale(post, locale);
                        const ns = messages[post.translationNamespace] ?? {};
                        const postTitle = ns.post_title ?? post.id;
                        const postExcerpt = ns.post_excerpt ?? '';
                        const categoryLabel = ns.category_label ?? post.category;

                        return (
                            <Link
                                key={post.id}
                                href={{ pathname: '/blog/[slug]', params: { slug } }}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.image}
                                        alt={postTitle}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <span className="text-xs font-semibold text-[#E63946] uppercase tracking-wider mb-2">
                                        {categoryLabel}
                                    </span>
                                    <h3 className="text-lg font-bold text-[#1D1D1B] mb-2 group-hover:text-[#E63946] transition-colors leading-snug">
                                        {postTitle}
                                    </h3>
                                    <p className="text-sm text-[#6C757D] line-clamp-2 mt-auto">
                                        {postExcerpt}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline">
                        {t('view_all')} <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
