import Image from 'next/image';
import { Link, getPathname } from '@/i18n/routing';
import { notFound, redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { SITE_URL } from '@/lib/seo';
import { BLOG_POSTS, getPostBySlug, getPostSlugForLocale } from '@/lib/blog';
import type { BlogSection } from '@/lib/blog';
import {
  getAllPostSlugs,
  getPostBySlug as getSanityPostBySlug,
  findPostSlugAcrossLocales,
  urlForImage,
  type Locale,
} from '@/lib/sanity';
import { BreadcrumbJsonLd } from '@/components/StructuredData';
import TableOfContents from './TableOfContents';
import ShareButtons from './ShareButtons';
import SanityPostContent from './SanityPostContent';
import PillarHubLink from '@/components/PillarHubLink';
import RelatedPosts from '@/components/RelatedPosts';

export const revalidate = 300;

const HOME_LABEL: Record<string, string> = {
  fr: 'Accueil',
  nl: 'Home',
  en: 'Home',
};

const LOCALE_TAG: Record<string, string> = {
  fr: 'fr-BE',
  nl: 'nl-BE',
  en: 'en-GB',
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const post of BLOG_POSTS) {
    for (const locale of ['fr', 'en', 'nl']) {
      params.push({ locale, slug: post.slugs[locale as keyof typeof post.slugs] });
    }
  }
  const sanityRows = await getAllPostSlugs();
  for (const row of sanityRows) {
    params.push({ locale: row.locale, slug: row.slug });
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
  if (post) {
    const correctSlug = post.slugs[locale as keyof typeof post.slugs];
    if (slug !== correctSlug) return {};

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

  const sanityPost = await getSanityPostBySlug(locale as Locale, slug);
  if (!sanityPost) return {};

  const cover = sanityPost.coverImage;
  const image = cover
    ? urlForImage(cover).width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  const languages: Record<string, string> = {};
  for (const loc of ['fr', 'nl', 'en'] as const) {
    const s = sanityPost.slugByLocale[loc];
    if (s) languages[loc] = `${SITE_URL}/${loc}/blog/${s}`;
  }
  if (sanityPost.slugByLocale.fr) {
    languages['x-default'] = `${SITE_URL}/fr/blog/${sanityPost.slugByLocale.fr}`;
  }

  const canonicalUrl = `${SITE_URL}/${locale}/blog/${sanityPost.slug}`;

  return {
    title: sanityPost.seoTitle ?? sanityPost.title,
    description: sanityPost.seoDescription ?? sanityPost.excerpt,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: sanityPost.title,
      description: sanityPost.seoDescription ?? sanityPost.excerpt,
      url: canonicalUrl,
      siteName: 'Office Factory',
      ...(image
        ? { images: [{ url: image, width: 1200, height: 630, alt: cover?.alt ?? sanityPost.title }] }
        : {}),
      type: 'article',
      locale: LOCALE_TAG[locale] ?? 'fr-BE',
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (post) {
    const correctSlug = post.slugs[locale as keyof typeof post.slugs];
    if (slug !== correctSlug) {
      redirect(`/${locale}/blog/${correctSlug}`);
    }
    return <BlogPostContent locale={locale} post={post} />;
  }

  const sanityPost = await getSanityPostBySlug(locale as Locale, slug);
  if (!sanityPost) {
    // Cross-locale slug match: if this slug exists for another locale, redirect
    // to that locale's URL rather than 404. Fixes /fr/blog/<nl-slug> chains
    // surfaced by Ahrefs from legacy locale-less inbound links.
    const crossLocale = await findPostSlugAcrossLocales(slug);
    if (crossLocale) {
      const localeSlug = crossLocale[locale as Locale];
      if (localeSlug) {
        redirect(`/${locale}/blog/${localeSlug}`);
      }
      for (const loc of ['fr', 'nl', 'en'] as const) {
        if (crossLocale[loc] === slug) {
          redirect(`/${loc}/blog/${slug}`);
        }
      }
    }
    notFound();
  }

  const canonicalPath = getPathname({
    locale: locale as Locale,
    href: { pathname: '/blog/[slug]', params: { slug } },
  });
  const blogPath = getPathname({ locale: locale as Locale, href: '/blog' });
  const homePath = getPathname({ locale: locale as Locale, href: '/' });

  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const blogUrl = `${SITE_URL}${blogPath}`;
  const homeUrl = `${SITE_URL}${homePath}`;

  const cover = sanityPost.coverImage;
  const image = cover
    ? urlForImage(cover).width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: sanityPost.title,
    description: sanityPost.seoDescription ?? sanityPost.excerpt,
    ...(image ? { image: [image] } : {}),
    datePublished: sanityPost.publishedAt,
    dateModified: sanityPost._updatedAt ?? sanityPost.publishedAt,
    inLanguage: locale,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Office Factory',
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  const breadcrumbItems = [
    { name: HOME_LABEL[locale] ?? 'Home', url: homeUrl },
    { name: 'Blog', url: blogUrl },
    { name: sanityPost.title, url: canonicalUrl },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <SanityPostContent post={sanityPost} locale={locale} />
    </>
  );
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
    { year: 'numeric', month: 'long', day: 'numeric' },
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

  // Hardcoded posts always have all three locale slugs.
  const blogSlugByLocale = {
    fr: post.slugs.fr,
    en: post.slugs.en,
    nl: post.slugs.nl,
  } as const;

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
      <Navbar blogSlugByLocale={blogSlugByLocale} />

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

      <div className="bg-[#F8F9FA] pb-20">
        <div className="container max-w-2xl mx-auto">
          <div className="relative aspect-[2/1] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={t('post_title')}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="container mt-10 pb-12">
        <div className="flex gap-12 justify-center">
          <TableOfContents items={tocItems} />

          <article className="max-w-3xl w-full pt-8">
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

            <h1 className="text-3xl md:text-4xl font-bold text-[#1D1D1B] mb-8 leading-tight">
              {t('post_title')}
            </h1>

            <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none mb-12">
              <p>{t('intro')}</p>
            </div>

            {post.sections.map((section) => (
              <SectionRenderer key={section.id} section={section} t={t} />
            ))}

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

            <div className="border-t border-b border-gray-200 py-6 my-12">
              <ShareButtons url={postUrl} title={t('post_title')} />
            </div>
          </article>
        </div>
      </div>

      <RelatedPosts currentPostId={post.id} category={post.category} locale={locale} />

      <PillarHubLink locale={locale} variant="banner" />

      <section className="py-20 bg-[#1D1D1B]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">{tBlog('cta_title')}</h2>
          <p className="text-lg text-gray-300 mb-8">{tBlog('cta_text')}</p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 rounded-full font-semibold inline-block"
          >
            {tBlog('cta_btn')}
          </Link>
        </div>
      </section>

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
        <h2 id={section.id} className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28">
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
        <h2 id={section.id} className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28">
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
        <h2 id={section.id} className="text-2xl font-bold text-[#1D1D1B] mb-4 scroll-mt-28">
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
