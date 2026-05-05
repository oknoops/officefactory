import { Link, getPathname } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTranslations } from 'next-intl/server';
import { generateAlternates, SITE_URL } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import { buildBlogCards } from '@/lib/blogCards';
import { getPosts, urlForImage, type Locale } from '@/lib/sanity';
import { BreadcrumbJsonLd } from '@/components/StructuredData';
import BlogList from './BlogList';

export const revalidate = 300;

const HOME_LABEL: Record<string, string> = {
  fr: 'Accueil',
  nl: 'Home',
  en: 'Home',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('blog_title'),
    description: t('blog_desc'),
    keywords: t('blog_keywords'),
    alternates: generateAlternates(locale, '/blog'),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPage' });
  const tMeta = await getTranslations({ locale, namespace: 'Metadata' });

  const items = await buildBlogCards(BLOG_POSTS, locale, getTranslations);
  const sanityPosts = await getPosts(locale as Locale);
  const sanityById = new Map(sanityPosts.map((p) => [p._id, p]));

  const blogPath = getPathname({ locale: locale as Locale, href: '/blog' });
  const homePath = getPathname({ locale: locale as Locale, href: '/' });
  const blogUrl = `${SITE_URL}${blogPath}`;
  const homeUrl = `${SITE_URL}${homePath}`;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${blogUrl}#blog`,
    url: blogUrl,
    name: tMeta('blog_title'),
    description: tMeta('blog_desc'),
    inLanguage: locale,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: items.map((item) => {
      const url = `${SITE_URL}/${locale}/blog/${item.slug}`;
      if (item.kind === 'sanity') {
        const sanity = sanityById.get(item.id);
        const cover = sanity?.coverImage ?? null;
        const image = cover
          ? urlForImage(cover).width(1200).height(630).fit('crop').auto('format').url()
          : undefined;
        return {
          '@type': 'BlogPosting',
          headline: item.title,
          description: item.excerpt,
          datePublished: item.date,
          url,
          ...(image ? { image } : {}),
        };
      }
      return {
        '@type': 'BlogPosting',
        headline: item.post.id,
        datePublished: item.date,
        url,
        image: `${SITE_URL}${item.post.image}`,
      };
    }),
  };

  const breadcrumbItems = [
    { name: HOME_LABEL[locale] ?? 'Home', url: homeUrl },
    { name: 'Blog', url: blogUrl },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <Navbar />

      <section className="pt-32 pb-16 bg-[#F8F9FA]">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-[#6C757D] leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <BlogList items={items} locale={locale} />
        </div>
      </section>

      <section className="py-20 bg-[#1D1D1B]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">{t('cta_title')}</h2>
          <p className="text-lg text-gray-300 mb-8">{t('cta_text')}</p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-3 rounded-full font-semibold inline-block"
          >
            {t('cta_btn')}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
