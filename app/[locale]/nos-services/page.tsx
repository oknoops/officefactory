import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
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
        title: t('services_title'),
        description: t('services_desc'),
        alternates: generateAlternates(locale, '/nos-services'),
    };
}

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                            {t('desc')}
                        </p>
                        <Link href="/contact" className="btn btn-primary text-base px-8 py-3 font-semibold rounded-full">
                            {t('btn_contact')}
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1765366417077-dc1a6fbd5e34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                            alt="Office Factory Building"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Service 1: Domiciliation */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="/hero-domiciliation.jpg"
                            alt="Boîtes aux lettres domiciliation"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('s1_title')}
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s1_desc_p1')}<Link href="/services/siege-social-bruxelles" className="font-semibold text-[#1D1D1B] hover:text-[#E63946] transition-colors">{t('s1_desc_b1')}</Link>{t('s1_desc_p2')}<strong className="font-semibold text-[#1D1D1B]">{t('s1_desc_b2')}</strong>{t('s1_desc_p3')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s1_f1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s1_f2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s1_f3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s1_f4')}</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            {t('s1_price')}
                        </div>
                        <div className="mt-4">
                            <Link href="/services/domiciliation-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                {t('s1_link')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: Coworking */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Content (Left) */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('s2_title')}
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s2_desc_p1')}<strong className="font-semibold text-[#1D1D1B]">{t('s2_desc_b1')}</strong>{t('s2_desc_p2')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s2_f1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s2_f2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s2_f3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s2_f4')}</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            {t('s2_price')}
                        </div>
                        <div className="mt-4">
                            <Link href="/services/coworking-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                {t('s2_link')}
                            </Link>
                        </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="/hero-coworking.jpg"
                            alt="Espace Coworking"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Service 3: Private Office */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="https://plus.unsplash.com/premium_photo-1723823035067-adef00deb8ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                            alt="Bureau individuel"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('s3_title')}
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s3_desc_p1')}<strong className="font-semibold text-[#1D1D1B]">{t('s3_desc_b1')}</strong>{t('s3_desc_p2')}<strong className="font-semibold text-[#1D1D1B]">{t('s3_desc_b2')}</strong>{t('s3_desc_p3')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s3_f1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s3_f2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s3_f3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s3_f4')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s3_f5')}</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            {t('s3_price')}
                        </div>
                        <div className="mt-4">
                            <Link href="/services/bureau-individuel-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                {t('s3_link')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 4: Team Office */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Content (Left) */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('s4_title')}
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s4_desc_p1')}<strong className="font-semibold text-[#1D1D1B]">{t('s4_desc_b1')}</strong>{t('s4_desc_p2')}<strong className="font-semibold text-[#1D1D1B]">{t('s4_desc_b2')}</strong>{t('s4_desc_p3')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s4_f1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <Link href="/services/salle-de-reunion-bruxelles" className="text-[#1D1D1B] hover:text-[#E63946] transition-colors">{t('s4_f2')}</Link>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s4_f3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s4_f4')}</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            {t('s4_price')}
                        </div>
                        <div className="mt-4">
                            <Link href="/services/bureau-equipe-bruxelles" className="text-[#E63946] font-semibold hover:underline">
                                {t('s4_link')}
                            </Link>
                        </div>
                    </div>

                    {/* Image (Right) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww"
                            alt="Bureau d'équipe"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Service 5: Démarches Administratives */}
            <section className="py-20">
                <div className="container grid md:grid-cols-2 gap-16 items-center">
                    {/* Image (Left) */}
                    <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=60"
                            alt="Démarches administratives"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Content (Right) */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1D1D1B]">
                            {t('s5_title')}
                        </h2>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('s5_desc_p1')}<strong className="font-semibold text-[#1D1D1B]">{t('s5_desc_b1')}</strong>{t('s5_desc_p2')}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s5_f1')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s5_f2')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s5_f3')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#E63946] mt-1"><Check size={20} /></span>
                                <span className="text-[#1D1D1B]">{t('s5_f4')}</span>
                            </li>
                        </ul>
                        <div className="font-bold text-xl text-[#1D1D1B]">
                            {t('s5_price')}
                        </div>
                        <div className="mt-4">
                            <Link href="/services/demarches-administratives" className="text-[#E63946] font-semibold hover:underline">
                                {t('s5_link')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute right-0 top-0 w-full md:w-2/3 h-full bg-[#E63946] transform md:-skew-x-12 md:translate-x-20"></div>
                </div>

                <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center text-white">
                    <div className="md:col-start-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('banner_title')}
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            {t('banner_desc')}
                        </p>
                        <Link href="/contact" className="inline-block bg-white text-[#E63946] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                            {t('banner_btn')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1D1D1B]">
                        {t('news_title')}
                    </h2>
                    <p className="text-[#6C757D] mb-8">
                        {t('news_desc')}
                    </p>
                    <div className="max-w-lg mx-auto">
                        <NewsletterForm />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
