import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Building, FileText, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

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
        title: t('spf_title'),
        description: t('spf_desc'),
        alternates: generateAlternates(locale, '/spf-economie'),
    };
}

export default function SPFEconomiePage() {
    const t = useTranslations('SPFEconomiePage');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-200">
                            <ShieldCheck size={18} className="text-green-600" />
                            <span>{t('tag')}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            {t('desc')}
                        </p>
                        <Link href="/nos-services" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_discover')}
                        </Link>
                    </div>

                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/hero-spf-economie.jpg"
                            alt="Bâtiment officiel"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Loi du 29 Mars 2018 Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-3xl font-bold mb-8 text-[#1D1D1B]">
                        {t('law_title')}
                    </h2>
                    <p className="text-lg text-[#6C757D] leading-relaxed mb-6">
                        {t('law_p1_1')}<strong className="font-semibold text-[#1D1D1B]">{t('law_p1_b1')}</strong>{t('law_p1_2')}<strong className="font-semibold text-[#1D1D1B]">{t('law_p1_b2')}</strong>{t('law_p1_3')}
                    </p>
                    <p className="text-lg text-[#6C757D] leading-relaxed">
                        {t('law_p2')}
                    </p>
                </div>
            </section>

            {/* Les Risques et Garanties */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12">
                    {/* Colonne Risques (sans agrément) */}
                    <div className="bg-white p-10 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-400"></div>
                        <h3 className="text-2xl font-bold mb-6 text-[#1D1D1B] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                                <FileText size={20} />
                            </span>
                            {t('risk_title')}
                        </h3>
                        <p className="text-[#6C757D] mb-6">
                            {t('risk_desc')}
                        </p>
                        <ul className="space-y-4 text-[#6C757D]">
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">{t('r1_t')}</strong> {t('r1_d')}</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">{t('r2_t')}</strong> {t('r2_d')}</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-500 mt-1 shrink-0">—</span>
                                <div><strong className="text-[#1D1D1B]">{t('r3_t')}</strong> {t('r3_d')}</div>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne Garanties (Office Factory) */}
                    <div className="bg-white p-10 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                        <h3 className="text-2xl font-bold mb-6 text-[#1D1D1B] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                <Building size={20} />
                            </span>
                            {t('guarantee_title')}
                        </h3>
                        <p className="text-[#6C757D] mb-6">
                            {t('guarantee_desc')}
                        </p>
                        <ul className="space-y-4 text-[#6C757D]">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">{t('g1_t')}</strong> {t('g1_d')}</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">{t('g2_t')}</strong> {t('g2_d')}</div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                                <div><strong className="text-[#1D1D1B]">{t('g3_t')}</strong> {t('g3_d')}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#1D1D1B] text-white text-center">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-3xl font-bold mb-6">{t('cta_title')}</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('cta_desc')}
                    </p>
                    <Link href="/services/domiciliation-bruxelles" className="btn bg-white text-[#1D1D1B] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg">
                        {t('cta_btn')}
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
