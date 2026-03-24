import { UserCheck, Car, Clock, Package, Wifi, Users } from 'lucide-react';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const FeatureItem: FC<{ icon: any, title: string, desc: string, href?: Parameters<typeof Link>[0]['href'] }> = ({ icon: Icon, title, desc, href }) => (
    <div className="flex gap-4 items-start">
        <div className="bg-red-50 text-[#E63946] p-4 rounded-xl flex-shrink-0">
            <Icon size={32} strokeWidth={2} />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-[#1D1D1B]">
                {href ? <Link href={href} className="hover:text-[#E63946] transition-colors">{title}</Link> : title}
            </h3>
            <p className="text-[#6C757D] leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    </div>
);

const ProFeatures: FC = () => {
    const t = useTranslations('ProFeatures');
    return (
        <section className="py-24 bg-[#F8F9FA]">
            <div className="container grid lg:grid-cols-12 gap-12">
                {/* Left Text Block */}
                <div className="lg:col-span-4 pr-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D1D1B] leading-tight">
                        {t('title')}
                    </h2>
                    <Link href="/a-propos" className="btn btn-primary px-8 py-3 text-lg">
                        {t('cta')}
                    </Link>
                </div>

                {/* Right Grid */}
                <div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-16">
                    <FeatureItem
                        icon={UserCheck}
                        title={t('feat1_title')}
                        desc={t('feat1_desc')}
                    />
                    <FeatureItem
                        icon={Car}
                        title={t('feat2_title')}
                        desc={t('feat2_desc')}
                    />
                    <FeatureItem
                        icon={Clock}
                        title={t('feat3_title')}
                        desc={t('feat3_desc')}
                    />
                    <FeatureItem
                        icon={Package}
                        title={t('feat4_title')}
                        desc={t('feat4_desc')}
                    />
                    <FeatureItem
                        icon={Wifi}
                        title={t('feat5_title')}
                        desc={t('feat5_desc')}
                    />
                    <FeatureItem
                        icon={Users}
                        title={t('feat6_title')}
                        desc={t('feat6_desc')}
                        href="/services/salle-de-reunion-bruxelles"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProFeatures;
