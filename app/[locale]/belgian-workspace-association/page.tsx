import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Target, Users, BookOpen, ShieldCheck, Award, ArrowRight } from 'lucide-react';
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
        title: t('bwa_title'),
        description: t('bwa_desc'),
        alternates: generateAlternates(locale, '/belgian-workspace-association'),
    };
}

export default function BWAPage() {
    const t = useTranslations('BWAPage');
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
                            {t('desc')}
                        </p>
                        <a href="https://belgianworkspaceassociation.be/" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_visit')}
                        </a>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center border border-gray-100 p-12">
                        <div className="relative w-full h-full max-w-sm mx-auto">
                            <Image
                                src="/logo-BWA.webp"
                                alt="Belgian Workspace Association Logo"
                                fill
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Qu'est-ce que la BWA */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B]">
                        {t('h2_1')}
                    </h2>
                    <p className="text-lg text-[#6C757D] leading-relaxed mb-6">
                        {t('p1_1')}
                    </p>
                    <p className="text-lg text-[#6C757D] leading-relaxed">
                        {t('p1_2')}
                    </p>
                </div>
            </section>

            {/* Missions de la BWA */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-[#1D1D1B]">{t('h2_2')}</h2>
                        <p className="text-[#6C757D] max-w-2xl mx-auto text-lg">
                            {t('p_missions')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">{t('m1_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('m1_d')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">{t('m2_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('m2_d')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">{t('m3_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('m3_d')}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-[#1D1D1B]">{t('m4_t')}</h3>
                            <p className="text-[#6C757D]">
                                {t('m4_d')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AML Certification */}
            <section className="py-20 bg-white">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/certificat_bwa.jpg"
                            alt={t('aml_img_alt')}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-red-50 text-[#E63946] rounded-full flex items-center justify-center">
                                <Award size={24} />
                            </div>
                            <span className="text-[#E63946] font-semibold tracking-wider uppercase text-sm">{t('aml_tag')}</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                            {t('aml_title')}
                        </h2>
                        <p className="text-lg text-[#6C757D] leading-relaxed mb-4">
                            {t('aml_p1')}
                        </p>
                        <p className="text-[#6C757D] leading-relaxed mb-8">
                            {t('aml_p2')}
                        </p>
                        <Link
                            href={{ pathname: '/blog/[slug]', params: { slug: 'office-factory-certifie-aml-belgian-workspace-association' } }}
                            className="inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
                        >
                            {t('aml_link')} <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#F8F9FA] text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('cta_title')}
                    </h2>
                    <p className="text-[#6C757D] mb-8 text-lg">
                        {t('cta_desc')}
                    </p>
                    <Link href="/nos-services" className="btn btn-primary px-8 py-3 rounded-full text-lg font-semibold inline-block">
                        {t('cta_btn')}
                    </Link>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
