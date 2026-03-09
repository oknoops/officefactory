import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';
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
        title: t('about_title'),
        description: t('about_desc'),
        alternates: generateAlternates(locale, '/a-propos'),
    };
}

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero / Intro Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                            {t('subtitle')}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            {t('title')}
                        </h1>
                        <div className="prose prose-lg text-[#6C757D] leading-relaxed">
                            <p className="mb-6">
                                {t('p1_part1')}<strong className="text-[#1D1D1B]">{t('p1_bold1')}</strong>{t('p1_part2')}<strong className="text-[#1D1D1B]">{t('p1_bold2')}</strong>{t('p1_part3')}
                            </p>
                            <p className="mb-6">
                                {t('p2_part1')}<strong className="text-[#1D1D1B]">{t('p2_bold1')}</strong>{t('p2_part2')}
                            </p>
                            <p className="mb-6">
                                {t('p3_part1')}<strong className="text-[#1D1D1B]">{t('p3_bold1')}</strong>{t('p3_part2')}
                            </p>
                            <p>
                                {t('p4_part1')}<a href="/belgian-workspace-association" className="text-[#E63946] font-semibold hover:underline">{t('p4_link')}</a>{t('p4_part2')}
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/modernofficebuilding.webp"
                            alt="Office Factory Building in Uccle"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B]">
                        {t('mission_title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-[#6C757D] font-light leading-relaxed italic">
                        {t('mission_quote')}
                    </p>
                </div>
            </section>

            {/* Stats / Features (Optional/Standard Layout Filler if needed, but keeping it simple as per request) */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-5xl flex flex-col gap-8">
                    {/* SPF Economy Banner */}
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex justify-center items-center text-green-600 shrink-0">
                            <ShieldCheck size={40} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('law_title')}</h3>
                            <p className="text-[#6C757D] mb-4">
                                {t('law_part1')}<strong className="text-[#1D1D1B]">{t('law_bold')}</strong>{t('law_part2')}
                            </p>
                            <a href="/spf-economie" className="text-[#E63946] font-semibold hover:underline flex items-center gap-2">
                                {t('law_link')}
                            </a>
                        </div>
                    </div>

                    {/* BWA Banner */}
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 bg-gray-50 rounded-full flex justify-center items-center shrink-0 border border-gray-200 overflow-hidden">
                            <Image src="/logo-BWA.webp" alt="BWA Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('bwa_banner_title')}</h3>
                            <p className="text-[#6C757D] mb-4">
                                {t('bwa_banner_part1')}<strong className="text-[#1D1D1B]">{t('bwa_banner_bold')}</strong>{t('bwa_banner_part2')}
                            </p>
                            <a href="/belgian-workspace-association" className="text-[#E63946] font-semibold hover:underline flex items-center gap-2">
                                {t('bwa_banner_link')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('cta_title')}
                    </h2>
                    <div className="flex gap-4 justify-center">
                        <a href="/nos-services" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                            {t('cta_btn1')}
                        </a>
                        <a href="/contact" className="btn btn-dark px-8 py-3 rounded-full font-semibold">
                            {t('cta_btn2')}
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
