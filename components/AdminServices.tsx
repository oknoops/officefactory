import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const AdminServices: FC = () => {
    const t = useTranslations('AdminServices');
    return (
        <section className="py-24 bg-white">
            <div className="container max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1D1D1B]">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('serv1_title')}</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('serv1_desc')}
                        </p>
                        <Link href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            {t('serv1_link')}
                        </Link>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('serv2_title')}</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('serv2_desc')}
                        </p>
                        <Link href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            {t('serv2_link')}
                        </Link>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('serv3_title')}</h3>
                        <p className="text-[#6C757D] mb-6 leading-relaxed">
                            {t('serv3_desc')}
                        </p>
                        <Link href="/contact" className="text-[#E63946] font-semibold hover:underline">
                            {t('serv3_link')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServices;
