import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('contact_title'),
        description: t('contact_desc'),
    };
}

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1B] text-center">
                        {t('title')}
                    </h1>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-full max-w-4xl mx-auto">
                        <iframe
                            src="https://brusselsofficefactory.odoo.com/nous-contacter?v=1"
                            height="1250px"
                            className="border-0 w-full"
                            style={{
                                marginTop: '-85px', // Hides the Odoo top navbar/hamburger
                            }}
                            scrolling="no"
                            title="Formulaire de contact Office Factory"
                        />
                    </div>
                </div>
            </section>

            <MapSection />
            <Footer />
        </main>
    );
}
