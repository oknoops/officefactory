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
import RelatedServices from '@/components/RelatedServices';
import PillarHubLink from '@/components/PillarHubLink';
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Office Factory',
    image: 'https://www.officefactory.be/logo.webp',
    '@id': 'https://www.officefactory.be',
    url: 'https://www.officefactory.be',
    telephone: '+32-471-79-45-52',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '842 Chaussée d\'Alsemberg',
      addressLocality: 'Uccle',
      postalCode: '1180',
      addressRegion: 'Brussels',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.7935,
      longitude: 4.3440,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <ProFeatures />
      <RelatedServices background="gray" />
      <PillarHubLink locale={locale} variant="banner" />
      <BlogPreview />
      <MapSection />
      <Footer />
    </main>
  );
}
