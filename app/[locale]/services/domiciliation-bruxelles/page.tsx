import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
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
        title: t('domiciliation_title'),
        description: t('domiciliation_desc'),
        keywords: t('domiciliation_keywords'),
    };
}

export default function DomiciliationPage() {
    const t = useTranslations('DomiciliationPage');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            {t('tag')}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            {t('desc_1')}<strong className="text-[#1D1D1B]">{t('desc_b')}</strong>{t('desc_2')}
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_quote')}
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Immeuble Office Factory Uccle - Domiciliation"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('h2_1')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">{t('f1_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('f1_d1')}<strong className="text-[#1D1D1B]">{t('f1_b')}</strong>{t('f1_d2')}
                            </p>
                        </div>
                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">{t('f2_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('f2_d1')}<strong className="text-[#1D1D1B]">{t('f2_b')}</strong>{t('f2_d2')}
                            </p>
                        </div>
                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mb-6">
                                <Check size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">{t('f3_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('f3_d')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('h2_2')}
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        {t('p_price_1')}<strong className="text-[#E63946] text-2xl">{t('p_price_b')}</strong>{t('p_price_2')}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            {t('btn_sub')}
                        </a>
                        <a href="/nos-services" className="btn btn-light px-8 py-3 rounded-full font-semibold">
                            {t('btn_other')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
