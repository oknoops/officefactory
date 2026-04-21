import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

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

    let iframeSrc = "https://brusselsofficefactory.odoo.com/fr/nous-contacter-form";
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

            <section className="pt-32 pb-12 bg-[#F8F9FA]">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] text-center">
                        {t('title')}
                    </h1>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#1D1D1B]">
                            {t('intro_title')}
                        </h2>
                        <p className="text-lg text-[#6C757D] leading-relaxed mb-4">
                            {t('intro_p1')}
                        </p>
                        <p className="text-lg text-[#6C757D] leading-relaxed">
                            {t('intro_p2')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('details_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-4">
                                <Phone size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#1D1D1B]">{t('details_phone_label')}</h3>
                            <a href="tel:+3223333311" className="text-[#6C757D] hover:text-[#E63946] transition-colors">
                                {t('details_phone')}
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-4">
                                <Mail size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#1D1D1B]">{t('details_email_label')}</h3>
                            <a href="mailto:info@officefactory.be" className="text-[#6C757D] hover:text-[#E63946] transition-colors break-all">
                                {t('details_email')}
                            </a>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-4">
                                <MapPin size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#1D1D1B]">{t('details_address_label')}</h3>
                            <p className="text-[#6C757D]">{t('details_address')}</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-4">
                                <Clock size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-[#1D1D1B]">{t('details_hours_label')}</h3>
                            <p className="text-[#6C757D] text-sm leading-relaxed">{t('details_hours')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F8F9FA] border-t border-gray-100">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('why_title')}
                        </h2>
                        <p className="text-lg text-[#6C757D] leading-relaxed mb-4">
                            {t('why_p1')}
                        </p>
                        <p className="text-lg text-[#6C757D] leading-relaxed">
                            {t('why_p2')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1B]">
                            {t('form_title')}
                        </h2>
                        <p className="text-lg text-[#6C757D] leading-relaxed">
                            {t('form_intro')}
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden w-full max-w-4xl mx-auto border border-gray-100">
                        <iframe
                            src={iframeSrc}
                            height="1250px"
                            className="border-0 w-full"
                            style={{
                                marginTop: marginTop,
                            }}
                            scrolling="no"
                            loading="lazy"
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
