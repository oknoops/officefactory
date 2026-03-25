import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFoundPage');

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <section className="flex-1 flex items-center justify-center py-32 bg-[#F8F9FA]">
                <div className="container max-w-2xl text-center">
                    <p className="text-8xl md:text-9xl font-bold text-[#E63946] mb-6">
                        404
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1B]">
                        {t('title')}
                    </h1>

                    <p className="text-lg text-[#6C757D] mb-12 leading-relaxed max-w-lg mx-auto">
                        {t('message')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="btn btn-primary px-8 py-3 rounded-full font-semibold text-base"
                        >
                            {t('cta_home')}
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-dark px-8 py-3 rounded-full font-semibold text-base"
                        >
                            {t('cta_contact')}
                        </Link>
                        <Link
                            href="/nos-services"
                            className="text-[#E63946] font-semibold hover:underline text-base"
                        >
                            {t('cta_services')} →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
