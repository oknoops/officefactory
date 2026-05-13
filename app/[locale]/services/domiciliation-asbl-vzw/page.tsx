import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PillarHubLink from '@/components/PillarHubLink';
import { Check, Heart, ShieldCheck, FileText, ChevronDown } from 'lucide-react';
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
        title: t('domiciliation_asbl_title'),
        description: t('domiciliation_asbl_desc'),
        keywords: t('domiciliation_asbl_keywords'),
        alternates: generateAlternates(locale, '/services/domiciliation-asbl-vzw'),
    };
}

const domiciliationASBLServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Domiciliation ASBL/VZW à Bruxelles',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Office Factory',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '842 Chaussée d\'Alsemberg',
            addressLocality: 'Uccle',
            postalCode: '1180',
            addressRegion: 'Brussels',
            addressCountry: 'BE',
        },
    },
    areaServed: {
        '@type': 'City',
        name: 'Brussels',
    },
    description: 'Domiciliation du siège social de votre ASBL/VZW à Bruxelles (Uccle). Adresse professionnelle enregistrée, gestion du courrier, conformité légale pour associations sans but lucratif.',
    serviceType: 'Non-Profit Domiciliation',
};

export default function DomiciliationASBLPage() {
    const t = useTranslations('DomiciliationASBLPage');
    const locale = useLocale();
    const tCommon = useTranslations('Common');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(domiciliationASBLServiceSchema) }}
            />
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
                        <p className="text-xl text-[#6C757D] mb-6 leading-relaxed">
                            {t('description')}
                        </p>
                        <div className="inline-flex items-baseline gap-2 bg-white border border-gray-200 px-5 py-3 rounded-full shadow-sm mb-6">
                            <span className="text-sm text-[#6C757D]">{tCommon('from_price')}</span>
                            <span className="text-2xl font-bold text-[#E63946]">{t('price_amount')}</span>
                            <span className="text-sm text-[#6C757D]">{tCommon('excl_vat')}</span>
                        </div>
                        <div>
                            <Link href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                                {t('btn_quote')}
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/hero-domiciliation.jpg"
                            alt="Domiciliation ASBL VZW - Office Factory Bruxelles"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* What is ASBL/VZW */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B] text-center">
                        {t('what_title')}
                    </h2>
                    <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none">
                        <p className="mb-6">{t('what_p1')}</p>
                        <p>{t('what_p2')}</p>
                    </div>
                </div>
            </section>

            {/* Requirements for ASBL/VZW Domiciliation */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('req_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Heart, key: 'req1' },
                            { icon: ShieldCheck, key: 'req2' },
                            { icon: FileText, key: 'req3' },
                            { icon: Check, key: 'req4' },
                        ].map(({ icon: Icon, key }) => (
                            <div key={key} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-6">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#1D1D1B]">{t(`${key}_t`)}</h3>
                                <p className="text-[#6C757D]">{t(`${key}_d`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included Checklist */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('inc_title')}
                    </h2>
                    <ul className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1 shrink-0"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t(`inc_${i}`)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('price_title')}
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        {t('price_p1')}<strong className="text-[#E63946] text-2xl">{t('price_amount')}</strong>{t('price_p2')}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            {t('btn_sub')}
                        </Link>
                        <Link href="/nos-services" className="btn btn-light px-8 py-3 rounded-full font-semibold">
                            {t('btn_other')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('faq_title')}
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <details key={i} className="bg-white border border-gray-200 rounded-xl group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#1D1D1B] hover:text-[#E63946] transition-colors">
                                    {t(`faq${i}_q`)}
                                    <ChevronDown size={20} className="shrink-0 ml-4 text-[#6C757D] group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="px-6 pb-6 text-[#6C757D] leading-relaxed">
                                    {t(`faq${i}_a`)}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <PillarHubLink locale={locale} variant="banner" />

            <Footer />
        </main>
    );
}
