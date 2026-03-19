import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/lib/seo';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('merci_title'),
        description: t('merci_desc'),
        alternates: generateAlternates(locale, '/merci'),
        robots: { index: false, follow: false },
    };
}

export default function ThankYouPage() {
    const t = useTranslations('ThankYouPage');

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="flex-1 flex items-center justify-center py-32 bg-[#F8F9FA]">
                <div className="container max-w-2xl text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                        <CheckCircle
                            size={80}
                            className="text-[#E63946]"
                            strokeWidth={1.5}
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B]">
                        {t('title')}
                    </h1>

                    {/* Message */}
                    <p className="text-xl text-[#6C757D] mb-12 leading-relaxed">
                        {t('message')}
                    </p>

                    {/* Primary CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="btn btn-primary px-8 py-3 rounded-full font-semibold text-base"
                        >
                            {t('cta_home')}
                        </Link>
                        <Link
                            href="/nos-services"
                            className="btn btn-dark px-8 py-3 rounded-full font-semibold text-base"
                        >
                            {t('cta_services')}
                        </Link>
                        <Link
                            href="/blog"
                            className="text-[#E63946] font-semibold hover:underline text-base"
                        >
                            {t('cta_blog')} →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
