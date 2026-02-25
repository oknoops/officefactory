import { FC } from 'react';
import { FileEdit, Briefcase, FileSignature } from 'lucide-react';
import { useTranslations } from 'next-intl';

const HowItWorks: FC = () => {
    const t = useTranslations('HowItWorks');
    return (
        <section className="py-24 bg-[#F8F9FA] relative z-10 -mt-8 rounded-t-[3rem]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#1D1D1B]">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-[#6C757D] max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-0.5 bg-gray-200 z-0"></div>

                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileEdit size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">{t('step_prefix')} 1</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('step1_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('step1_desc')}
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <Briefcase size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">{t('step_prefix')} 2</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('step2_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('step2_desc')}
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-20 h-20 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            <FileSignature size={32} />
                        </div>
                        <span className="text-sm font-bold text-[#E63946] uppercase tracking-wider mb-2">{t('step_prefix')} 3</span>
                        <h3 className="text-2xl font-bold mb-4 text-[#1D1D1B]">{t('step3_title')}</h3>
                        <p className="text-[#6C757D] leading-relaxed max-w-sm">
                            {t('step3_desc')}
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4">
                    <p className="text-sm font-medium text-[#1D1D1B] bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm">
                        ✓ {t('digital_note')}
                    </p>
                    <p className="text-xs text-[#6C757D]">
                        {t('legal_note')}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <a href="/contact" className="btn btn-primary px-8 py-3 rounded-full text-lg font-semibold">
                        {t('cta')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
