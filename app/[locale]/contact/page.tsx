import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import { useTranslations, useLocale } from 'next-intl';

import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/lib/seo';

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
        alternates: generateAlternates(locale, '/contact'),
    };
}

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const locale = useLocale();

    let iframeSrc = "https://brusselsofficefactory.odoo.com/nous-contacter-form";
    let marginTop = "-85px";

    if (locale === 'en') {
        iframeSrc = "https://brusselsofficefactory.odoo.com/en/nous-contacter-form";
        marginTop = "0px";
    } else if (locale === 'nl') {
        iframeSrc = "https://brusselsofficefactory.odoo.com/nl/nous-contacter-form";
        marginTop = "0px";
    }

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
                            src={iframeSrc}
                            height="1250px"
                            className="border-0 w-full"
                            style={{
                                marginTop: marginTop, // Hides the Odoo top navbar/hamburger on the default form
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
