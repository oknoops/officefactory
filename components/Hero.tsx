import Image from 'next/image';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

const Hero: FC = () => {
    const t = useTranslations('HomePage');

    return (
        <section className="pt-32 pb-20 bg-[#F8F9FA]">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="max-w-xl">
                    <a href="/belgian-workspace-association" className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/50 bg-white shadow-sm text-sm font-medium text-[#6C757D] hover:bg-gray-50 transition-colors">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full overflow-hidden shrink-0">
                            <Image src="/logo-BWA.webp" alt="BWA Logo" width={18} height={18} style={{ objectFit: 'contain' }} />
                        </span>
                        {t('bwa_badge')}
                    </a>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-[#6C757D] mb-8 leading-relaxed">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="/nos-services" className="btn btn-primary text-base px-6 py-3 font-semibold">
                            {t('cta2')}
                        </a>
                        <a href="/contact" className="btn btn-primary text-base px-6 py-3 font-semibold">
                            {t('cta1')}
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* Placeholder for real hero image - user to replace */}
                    <div className="relative h-full w-full">
                        <Image
                            src="/relaxed-coworking.jpg"
                            alt="Office Factory Coworking"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
