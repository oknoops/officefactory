import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Maximize2, Monitor, Users, Layers } from 'lucide-react';
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
        title: t('bureau_equipe_title'),
        description: t('bureau_equipe_desc'),
        keywords: t('bureau_equipe_keywords'),
    };
}

export default function TeamOfficePage() {
    const t = useTranslations('BureauEquipePage');
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
                            {t('desc_p1')}<strong className="text-[#1D1D1B]">{t('desc_b')}</strong>{t('desc_p2')}
                        </p>
                        <a href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_quote')}
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Bureau équipe Bruxelles - Office Factory"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Features Breakdown */}
            <section className="py-20">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('h2_1')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f1_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f1_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Maximize2 size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f2_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f2_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f3_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f3_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Layers size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f4_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f4_d')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Team Office Specific */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('h2_2')}
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        {t('p_tailor')}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            {t('btn_contact')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
