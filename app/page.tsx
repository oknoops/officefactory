import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import ProFeatures from '@/components/ProFeatures';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <Pricing />
      <ProFeatures />
      <Footer />
    </main>
  );
}
