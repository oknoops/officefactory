import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

import { FC } from 'react';
import NewsletterForm from './NewsletterForm';

const Footer: FC = () => {
    const t = useTranslations('Footer');

    return (
        <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-gray-200">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Column 1: Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/logo.webp"
                                    alt="Office Factory Logo"
                                    fill
                                    sizes="160px"
                                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                                />
                            </div>
                        </div>
                        <p className="text-[#6C757D] mb-4">
                            {t('address_line1')}<br />
                            {t('address_line2')}
                        </p>
                    </div>

                    {/* Column 2: À propos */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">{t('aboutHead')}</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><Link href="/a-propos" className="hover:text-[#E63946]">{t('link_about')}</Link></li>
                            <li><Link href="/contact" className="hover:text-[#E63946]">{t('link_contact')}</Link></li>
                            <li><Link href="/contact" className="hover:text-[#E63946]">{t('link_domiciliate')}</Link></li>
                            <li><Link href="/blog" className="hover:text-[#E63946]">{t('link_blog')}</Link></li>
                            <li><Link href="/faq" className="hover:text-[#E63946]">{t('link_faq')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Nos Services */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">{t('servicesHead')}</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><Link href="/nos-services" className="hover:text-[#E63946]">{t('link_services_all')}</Link></li>
                            <li><Link href="/services/domiciliation-bruxelles" className="hover:text-[#E63946]">{t('link_services_domiciliation')}</Link></li>
                            <li><Link href="/services/coworking-bruxelles" className="hover:text-[#E63946]">{t('link_services_coworking')}</Link></li>
                            <li><Link href="/services/bureau-individuel-bruxelles" className="hover:text-[#E63946]">{t('link_services_bureau_individuel')}</Link></li>
                            <li><Link href="/services/bureau-equipe-bruxelles" className="hover:text-[#E63946]">{t('link_services_bureau_equipe')}</Link></li>
                            <li><Link href="/services/demarches-administratives" className="hover:text-[#E63946]">{t('link_services_demarches')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">{t('contactHead')}</h4>
                        <ul className="space-y-2 text-[#6C757D]">
                            <li><a href="mailto:hello@officefactory.be" className="hover:text-[#E63946]">hello@officefactory.be</a></li>
                            <li><a href="tel:+32471794552" className="hover:text-[#E63946]">+32 471 79 45 52</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Newsletter */}
                    <div className="col-span-1">
                        <h4 className="font-bold mb-4 text-[#1D1D1B]">{t('newsletter_title')}</h4>
                        <p className="text-[#6C757D] text-sm mb-4">
                            {t('newsletter_desc')}
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#6C757D]">
                    <p>{t('copyright')}</p>
                    <Link href="/politique-de-confidentialite" className="hover:text-[#E63946]">
                        {t('link_privacy')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
