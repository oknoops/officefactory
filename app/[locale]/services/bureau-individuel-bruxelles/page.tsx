import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Key, Layout, CreditCard, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
        title: t('bureau_individuel_title'),
        description: t('bureau_individuel_desc'),
        keywords: t('bureau_individuel_keywords'),
        alternates: generateAlternates(locale, '/services/bureau-individuel-bruxelles'),
    };
}

export default function PrivateOfficePage() {
    const t = useTranslations('BureauIndividuelPage');
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
                            {t('btn_avail')}
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1723823035067-adef00deb8ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                            alt="Bureau Individuel Bruxelles - Office Factory"
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
                                <Key size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f1_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f1_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Layout size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f2_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f2_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <CreditCard size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f3_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f3_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f4_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f4_d')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Private Office Specific */}
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
                            {t('btn_visit')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
