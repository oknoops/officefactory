import { Users, FileText, User } from 'lucide-react';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

const Benefits: FC = () => {
    const t = useTranslations('Benefits');
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="container text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#1D1D1B]">
                    {t('title')}
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Benefit 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <Users size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t('benefit1_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('benefit1_desc')}
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <FileText size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t('benefit2_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('benefit2_desc')}
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6">
                            <User size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{t('benefit3_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('benefit3_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
