import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/blog';
import BlogList from './BlogList';

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

  return <BlogPageContent locale={locale} />;
}

function BlogPageContent({ locale }: { locale: string }) {
  const t = useTranslations('BlogPage');

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#F8F9FA]">
        <div className="container text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl text-[#6C757D] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16">
        <div className="container">
          <BlogList posts={[...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())} locale={locale} />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#1D1D1B]">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {t('cta_title')}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            {t('cta_text')}
          </p>
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
