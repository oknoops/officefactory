import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import ProFeatures from '@/components/ProFeatures';
import MapSection from '@/components/MapSection';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

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
