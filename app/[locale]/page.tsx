import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import ProFeatures from '@/components/ProFeatures';
import MapSection from '@/components/MapSection';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('layout_title'),
    description: t('layout_desc'),
    alternates: generateAlternates(locale, '/'),
  };
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  console.log('Home Component rendered with locale:', locale);
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <ProFeatures />
      <BlogPreview />
      <MapSection />
      <Footer />
    </main>
  );
}
