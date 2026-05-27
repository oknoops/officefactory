import { FC } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getPostSlugForLocale, type BlogCategory, type BlogPost } from '@/lib/blog';

/**
 * "Read also" block rendered at the bottom of each blog post. Surfaces 3
 * other posts in the same category (or any category, if there aren't enough
 * in the same one) and links to the pillar guide.
 *
 * SEO purpose: distribute internal link weight to blog posts that were stuck
 * at "Discovered – currently not indexed" in GSC. Each post now has 3 sibling
 * inbound links from every other indexed post in its category.
 */
interface RelatedPostsProps {
    /** ID of the current post (excluded from the list) */
    currentPostId: string;
    /** Category to prefer (will fall back to other categories if needed) */
    category: BlogCategory;
    locale: string;
}

const CATEGORY_COLORS: Record<BlogCategory, string> = {
    guides: 'bg-blue-100 text-blue-700',
    legal: 'bg-amber-100 text-amber-700',
    local: 'bg-green-100 text-green-700',
    news: 'bg-purple-100 text-purple-700',
};

const RelatedPosts: FC<RelatedPostsProps> = ({ currentPostId, category, locale }) => {
    const t = useTranslations('RelatedPosts');
    const tBlog = useTranslations('BlogPage');
    const tMeta = useTranslations('Metadata');

    const sameCategory = BLOG_POSTS.filter(
        (p) => p.id !== currentPostId && p.category === category,
    );
    const otherCategory = BLOG_POSTS.filter(
        (p) => p.id !== currentPostId && p.category !== category,
    );
    const picks: BlogPost[] = [...sameCategory, ...otherCategory].slice(0, 3);

    if (picks.length === 0) return null;

    return (
        <section className="bg-[#F8F9FA] py-16 border-t border-gray-100">
            <div className="container max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1B] mb-2">
                    {t('title')}
                </h2>
                <p className="text-[#6C757D] mb-10">{t('subtitle')}</p>

                <div className="grid md:grid-cols-3 gap-6">
                    {picks.map((p) => (
                        <Link
                            key={p.id}
                            href={{ pathname: '/blog/[slug]', params: { slug: getPostSlugForLocale(p, locale) } }}
                            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-[#E63946]/40 transition-all"
                        >
                            <span
                                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${CATEGORY_COLORS[p.category]}`}
                            >
                                {tBlog(`cat_${p.category}`)}
                            </span>
                            <h3 className="text-lg font-bold text-[#1D1D1B] mb-3 group-hover:text-[#E63946] transition-colors leading-snug">
                                {tMeta(`${p.metadataKey}_title` as Parameters<typeof tMeta>[0])}
                            </h3>
                            <span className="text-[#E63946] font-semibold text-sm inline-flex items-center gap-1">
                                {tBlog('read_more')} <ArrowRight size={14} />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedPosts;
