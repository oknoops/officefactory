import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Calendar, UserCheck, Coffee, Check, ChevronDown } from 'lucide-react';
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
        title: t('meetingroom_title'),
        description: t('meetingroom_desc'),
        keywords: t('meetingroom_keywords'),
        alternates: generateAlternates(locale, '/services/salle-de-reunion-bruxelles'),
    };
}

export default function MeetingRoomPage() {
    const t = useTranslations('MeetingRoomPage');
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
                            {t('desc_1')}<strong className="text-[#1D1D1B]">{t('desc_b1')}</strong>{t('desc_2')}<strong className="text-[#1D1D1B]">{t('desc_b2')}</strong>{t('desc_3')}
                        </p>
                        <Link href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_visit')}
                        </Link>
                    </div>
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=900&auto=format&fit=crop&q=60"
                            alt="Salle de réunion Office Factory Bruxelles"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Why Rent a Meeting Room */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1D1D1B] text-center">
                        {t('what_title')}
                    </h2>
                    <div className="prose prose-lg text-[#6C757D] leading-relaxed max-w-none">
                        <p className="mb-6">{t('what_p1')}</p>
                        <p className="mb-6">{t('what_p2')}</p>
                        <p>{t('what_p3')}</p>
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
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f1_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f1_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Calendar size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f2_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f2_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <UserCheck size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f3_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f3_d')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all">
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] mx-auto mb-4">
                                <Coffee size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{t('f4_t')}</h3>
                            <p className="text-sm text-[#6C757D]">{t('f4_d')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Our Meeting Rooms */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/office-factory-building.webp"
                            alt="Office Factory Building"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-[#1D1D1B]">
                            {t('why_title')}
                        </h2>
                        <ul className="space-y-4">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-[#E63946] mt-1 shrink-0"><Check size={20} /></span>
                                    <span className="text-[#1D1D1B]">{t(`why_${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* How to Book */}
            <section className="py-20">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold mb-12 text-[#1D1D1B] text-center">
                        {t('steps_title')}
                    </h2>
                    <div className="space-y-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#E63946] text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{i}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1D1D1B] mb-2">{t(`step${i}_t`)}</h3>
                                    <p className="text-[#6C757D]">{t(`step${i}_d`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6 text-[#1D1D1B]">
                        {t('cta_title')}
                    </h2>
                    <p className="text-xl text-[#6C757D] mb-8">
                        {t('cta_desc')}
                    </p>
                    <Link href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold">
                        {t('cta_btn')}
                    </Link>
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

            <Footer />
        </main>
    );
}
