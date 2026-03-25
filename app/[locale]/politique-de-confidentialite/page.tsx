import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        title: t('privacy_title'),
        description: t('privacy_desc'),
        alternates: generateAlternates(locale, '/politique-de-confidentialite'),
    };
}

export default function PrivacyPolicyPage() {
    const t = useTranslations('PrivacyPage');

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1B] text-center">
                        {t('title')}
                    </h1>
                    <p className="text-[#6C757D] text-center mb-12">
                        {t('last_updated')}
                    </p>

                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10 text-[#1D1D1B] leading-relaxed">

                        {/* 1. Introduction */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s1_title')}</h2>
                            <p className="text-[#6C757D]">{t('s1_p1')}</p>
                        </div>

                        {/* 2. Data Controller */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s2_title')}</h2>
                            <p className="text-[#6C757D] whitespace-pre-line">{t('s2_p1')}</p>
                        </div>

                        {/* 3. Data We Collect */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s3_title')}</h2>
                            <p className="text-[#6C757D] mb-4">{t('s3_intro')}</p>
                            <h3 className="text-lg font-semibold mb-2">{t('s3_sub1_title')}</h3>
                            <p className="text-[#6C757D] mb-4">{t('s3_sub1_p')}</p>
                            <h3 className="text-lg font-semibold mb-2">{t('s3_sub2_title')}</h3>
                            <p className="text-[#6C757D] mb-4">{t('s3_sub2_p')}</p>
                            <h3 className="text-lg font-semibold mb-2">{t('s3_sub3_title')}</h3>
                            <p className="text-[#6C757D]">{t('s3_sub3_p')}</p>
                        </div>

                        {/* 4. Purpose & Legal Basis */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s4_title')}</h2>
                            <ul className="list-disc pl-6 text-[#6C757D] space-y-2">
                                <li>{t('s4_li1')}</li>
                                <li>{t('s4_li2')}</li>
                                <li>{t('s4_li3')}</li>
                                <li>{t('s4_li4')}</li>
                                <li>{t('s4_li5')}</li>
                            </ul>
                        </div>

                        {/* 5. Third-Party Services */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s5_title')}</h2>
                            <p className="text-[#6C757D] mb-4">{t('s5_intro')}</p>
                            <ul className="list-disc pl-6 text-[#6C757D] space-y-2">
                                <li>{t('s5_li1')}</li>
                                <li>{t('s5_li2')}</li>
                                <li>{t('s5_li3')}</li>
                                <li>{t('s5_li4')}</li>
                            </ul>
                        </div>

                        {/* 6. Cookies */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s6_title')}</h2>
                            <p className="text-[#6C757D] mb-4">{t('s6_p1')}</p>
                            <ul className="list-disc pl-6 text-[#6C757D] space-y-2">
                                <li>{t('s6_li1')}</li>
                                <li>{t('s6_li2')}</li>
                                <li>{t('s6_li3')}</li>
                            </ul>
                            <p className="text-[#6C757D] mt-4">{t('s6_p2')}</p>
                        </div>

                        {/* 7. Data Retention */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s7_title')}</h2>
                            <p className="text-[#6C757D]">{t('s7_p1')}</p>
                        </div>

                        {/* 8. Your Rights */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s8_title')}</h2>
                            <p className="text-[#6C757D] mb-4">{t('s8_intro')}</p>
                            <ul className="list-disc pl-6 text-[#6C757D] space-y-2">
                                <li>{t('s8_li1')}</li>
                                <li>{t('s8_li2')}</li>
                                <li>{t('s8_li3')}</li>
                                <li>{t('s8_li4')}</li>
                                <li>{t('s8_li5')}</li>
                                <li>{t('s8_li6')}</li>
                            </ul>
                            <p className="text-[#6C757D] mt-4">{t('s8_contact')}</p>
                        </div>

                        {/* 9. Data Security */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s9_title')}</h2>
                            <p className="text-[#6C757D]">{t('s9_p1')}</p>
                        </div>

                        {/* 10. Changes */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s10_title')}</h2>
                            <p className="text-[#6C757D]">{t('s10_p1')}</p>
                        </div>

                        {/* 11. Contact & Complaints */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{t('s11_title')}</h2>
                            <p className="text-[#6C757D] whitespace-pre-line">{t('s11_p1')}</p>
                            <p className="text-[#6C757D] mt-4">{t('s11_authority')}</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
