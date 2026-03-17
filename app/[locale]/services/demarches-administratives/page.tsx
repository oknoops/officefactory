import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Edit, XCircle, Check } from 'lucide-react';
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
        title: t('demarches_title'),
        description: t('demarches_desc'),
        keywords: t('demarches_keywords'),
        alternates: generateAlternates(locale, '/services/demarches-administratives'),
    };
}

export default function DemarchesAdministrativesPage() {
    const t = useTranslations('DemarchesPage');
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
                        <Link href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_contact')}
                        </Link>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60"
                            alt="Documents administratifs et bureau"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Services Detailed Sections */}

            {/* 1. Création */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Créer une entreprise" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <FileText size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">{t('s1_t')}</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s1_d')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s1_l1')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s1_l2')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s1_l3')}</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Modification */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <Edit size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">{t('s2_t')}</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s2_d')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s2_l1')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s2_l2')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s2_l3')}</span></li>
                        </ul>
                    </div>
                    <div className="relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Modifier une entreprise" />
                    </div>
                </div>
            </section>

            {/* 3. Fermeture */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60" fill className="object-cover" alt="Fermer une entreprise" />
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <XCircle size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">{t('s3_t')}</h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s3_d')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s3_l1')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s3_l2')}</span></li>
                            <li className="flex items-start gap-3"><span className="text-[#E63946] mt-1"><Check size={20} /></span><span className="text-[#1D1D1B]">{t('s3_l3')}</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#E63946] text-white text-center">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta_title')}</h2>
                    <p className="text-xl opacity-90 mb-8">
                        {t('cta_desc')}
                    </p>
                    <Link href="/contact" className="btn bg-white text-[#E63946] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full text-lg">
                        {t('cta_btn')}
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
