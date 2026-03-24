import Image from 'next/image';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const Pricing: FC = () => {
    const t = useTranslations('Pricing');
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D1D1B]">{t('section_title')}</h2>
                <p className="text-[#6C757D] mb-12 text-lg">
                    {t('section_subtitle')}
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="relative h-64 w-full">
                            <Image
                                src="/letterbox.jpg"
                                alt={t('card1_title')}
                                fill
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="p-8 pt-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{t('card1_title')}</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">{t('from')}</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                79,00 € <span className="text-base font-normal text-[#6C757D]">{t('per_month')}</span>
                            </div>
                            <ul className="mt-6 space-y-2 flex-grow">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card1_feature1')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card1_feature2')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card1_feature3')}
                                </li>
                            </ul>
                            <Link href="/services/domiciliation-bruxelles" className="mt-6 text-sm font-semibold text-[#E63946] hover:underline">
                                {t('card1_link')}
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="relative h-64 w-full">
                            <Image
                                src="/office.jpg"
                                alt={t('card2_title')}
                                fill
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="p-8 pt-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{t('card2_title')}</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">{t('from')}</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                149,00 € <span className="text-base font-normal text-[#6C757D]">{t('per_month')}</span>
                            </div>
                            <ul className="mt-6 space-y-2 flex-grow">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card2_feature1')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card2_feature2')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card2_feature3')}
                                </li>
                            </ul>
                            <Link href="/services/coworking-bruxelles" className="mt-6 text-sm font-semibold text-[#E63946] hover:underline">
                                {t('card2_link')}
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                        <div className="relative h-64 w-full">
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1723823035067-adef00deb8ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByaXZhdGUlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                                alt={t('card3_title')}
                                fill
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="p-8 pt-6 flex-grow flex flex-col">
                            <h3 className="text-2xl font-bold mb-2">{t('card3_title')}</h3>
                            <div className="text-sm font-medium text-[#6C757D] mb-1">{t('from')}</div>
                            <div className="text-4xl font-bold text-[#1D1D1B]">
                                249,00 € <span className="text-base font-normal text-[#6C757D]">{t('per_month')}</span>
                            </div>
                            <ul className="mt-6 space-y-2 flex-grow">
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card3_feature1')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card3_feature2')}
                                </li>
                                <li className="flex items-start gap-2 text-[#6C757D] text-sm font-medium">
                                    <svg className="w-5 h-5 text-[#E63946] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    {t('card3_feature3')}
                                </li>
                            </ul>
                            <Link href="/services/bureau-individuel-bruxelles" className="mt-6 text-sm font-semibold text-[#E63946] hover:underline">
                                {t('card3_link')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
