import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { SITE_URL } from '@/lib/seo';
import { BLOG_POSTS, getPostBySlug, getPostSlugForLocale } from '@/lib/blog';
import type { BlogSection } from '@/lib/blog';
import TableOfContents from './TableOfContents';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const post of BLOG_POSTS) {
    params.push({ slug: post.slugs.fr });
    params.push({ slug: post.slugs.en });
    params.push({ slug: post.slugs.nl });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const alternates = {
    canonical: `${SITE_URL}/${locale}/blog/${post.slugs[locale as keyof typeof post.slugs]}`,
    languages: {
      fr: `${SITE_URL}/fr/blog/${post.slugs.fr}`,
      en: `${SITE_URL}/en/blog/${post.slugs.en}`,
      nl: `${SITE_URL}/nl/blog/${post.slugs.nl}`,
      'x-default': `${SITE_URL}/fr/blog/${post.slugs.fr}`,
    },
  };

  return {
    title: t(`${post.metadataKey}_title`),
    description: t(`${post.metadataKey}_desc`),
    keywords: t(`${post.metadataKey}_keywords`),
    alternates,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostContent locale={locale} post={post} />;
}

function BlogPostContent({
  locale,
  post,
}: {
  locale: string;
  post: NonNullable<ReturnType<typeof getPostBySlug>>;
}) {
  const t = useTranslations(post.translationNamespace);
  const tBlog = useTranslations('BlogPage');

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const postUrl = `${SITE_URL}/${locale}/blog/${getPostSlugForLocale(post, locale)}`;

  const CATEGORY_COLORS: Record<string, string> = {
    guides: 'bg-blue-100 text-blue-700',
    legal: 'bg-amber-100 text-amber-700',
    local: 'bg-green-100 text-green-700',
    news: 'bg-purple-100 text-purple-700',
  };

  const tocItems = [
    ...post.sections.map((s) => ({ id: s.id, label: t(s.tocKey as Parameters<typeof t>[0]) })),
    { id: 'conclusion', label: t('toc_conclusion') },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('post_title'),
    author: { '@type': 'Organization', name: 'Office Factory' },
    datePublished: post.date,
    image: `${SITE_URL}${post.image}`,
    publisher: { '@type': 'Organization', name: 'Office Factory' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: t('legal_faq_q'),
        acceptedAnswer: { '@type': 'Answer', text: t('legal_faq_a') },
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="pt-28 pb-4 bg-[#F8F9FA]">
        <div className="container">
          <nav className="flex items-center text-sm text-[#6C757D]">
            <Link href="/" className="hover:text-[#E63946] transition-colors">
              {tBlog('breadcrumb_home')}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href="/blog" className="hover:text-[#E63946] transition-colors">
              {tBlog('breadcrumb_blog')}
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#1D1D1B] font-medium truncate max-w-[200px] md:max-w-none">
              {t('post_title')}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="bg-[#F8F9FA] pb-12">
        <div className="container max-w-3xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={t('post_title')}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Article Layout */}
      <div className="container py-12">
        <div className="flex gap-12 justify-center">
          {/* Table of Contents - Desktop Sidebar */}
          <TableOfContents items={tocItems} />

          {/* Article Content */}
          <article className="max-w-3xl w-full">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category]}`}
              >
                {tBlog(`cat_${post.category}`)}
              </span>
              <span className="text-sm text-[#6C757D]">{formattedDate}</span>
              <span className="text-sm text-[#6C757D]">·</span>
              <span className="text-sm text-[#6C757D]">Office Factory</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] mb-8 leading-tight">
              {t('post_title')}
            </h1>

            {/* Intro */}
            <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none mb-12">
              <p>{t('intro')}</p>
            </div>

            {/* Dynamic Sections */}
            {post.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} t={t} />
            ))}

            {/* Conclusion */}
            <section className="mb-12">
              <h2
                id="conclusion"
                className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28"
              >
                {t('conclusion_title')}
              </h2>
              <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none">
                <p>{t('conclusion_content')}</p>
              </div>
              <Link
                href={post.conclusionLinkHref}
                className="inline-flex items-center gap-1 text-[#E63946] font-semibold mt-4 hover:underline"
              >
                {t('conclusion_cta')} →
              </Link>
            </section>

            {/* Share Buttons */}
            <div className="border-t border-b border-gray-200 py-6 my-12">
              <ShareButtons url={postUrl} title={t('post_title')} />
            </div>

            {/* Related Articles */}
            {/* TODO: Add related articles section when more posts are available */}
          </article>
        </div>
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-[#1D1D1B]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {tBlog('cta_title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {tBlog('cta_text')}
          </p>
          <a
            href="/contact"
            className="btn btn-primary px-8 py-3 rounded-full font-semibold inline-block"
          >
            {tBlog('cta_btn')}
          </a>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}

function SectionRenderer({
  section,
  t,
}: {
  section: BlogSection;
  t: ReturnType<typeof useTranslations>;
}) {
  if (section.type === 'text') {
    return (
      <section className="mb-12">
        <h2
          id={section.id}
          className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28"
        >
          {t(section.titleKey as Parameters<typeof t>[0])}
        </h2>
        <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none">
          <p>{t(section.contentKey as Parameters<typeof t>[0])}</p>
        </div>
      </section>
    );
  }

  if (section.type === 'steps') {
    return (
      <section className="mb-12">
        <h2
          id={section.id}
          className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28"
        >
          {t(section.titleKey as Parameters<typeof t>[0])}
        </h2>
        <p className="text-[#6C757D] leading-relaxed mb-6">
          {t(section.introKey as Parameters<typeof t>[0])}
        </p>
        <ol className="space-y-6">
          {Array.from({ length: section.count }, (_, i) => i + 1).map((i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="w-8 h-8 bg-[#E63946] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {i}
              </span>
              <div>
                <h3 className="font-bold text-[#1D1D1B] mb-1">
                  {t(`step${i}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-[#6C757D] leading-relaxed">
                  {t(`step${i}_content` as Parameters<typeof t>[0])}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {section.linkKey && section.linkHref && (
          <Link
            href={section.linkHref}
            className="inline-flex items-center gap-1 text-[#E63946] font-semibold mt-6 hover:underline"
          >
            {t(section.linkKey as Parameters<typeof t>[0])} →
          </Link>
        )}
      </section>
    );
  }

  if (section.type === 'obligations') {
    return (
      <section className="mb-12">
        <h2
          id={section.id}
          className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28"
        >
          {t(section.titleKey as Parameters<typeof t>[0])}
        </h2>
        <p className="text-[#6C757D] leading-relaxed mb-6">
          {t(section.introKey as Parameters<typeof t>[0])}
        </p>
        <ol className="space-y-6">
          {Array.from({ length: section.count }, (_, i) => i + 1).map((i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="w-8 h-8 bg-[#E63946] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                {i}
              </span>
              <div>
                <h3 className="font-bold text-[#1D1D1B] mb-1">
                  {t(`obligation${i}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-[#6C757D] leading-relaxed">
                  {t(`obligation${i}_content` as Parameters<typeof t>[0])}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return null;
}
