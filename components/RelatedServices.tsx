import { FC } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import {
    Briefcase,
    Building2,
    Globe2,
    HeartHandshake,
    Rocket,
    UserCircle,
} from 'lucide-react';

type ServiceKey =
    | 'domiciliation-srl-bv'
    | 'domiciliation-asbl-vzw'
    | 'domiciliation-independants'
    | 'domiciliation-startups'
    | 'domiciliation-virtuelle'
    | 'siege-social-bruxelles';

/**
 * Internal-linking grid for the niche service pages. Their canonical URLs were
 * stuck at "Discovered – currently not indexed" in GSC because the only internal
 * link pointing at them was the /nos-services listing. Surfacing them prominently
 * from the homepage and from the main domiciliation page passes link-weight from
 * already-indexed pages and tells Google these aren't orphan variants.
 *
 * Pass `exclude` to drop a card when rendering on a service page that already
 * IS that service (e.g. /services/domiciliation-bruxelles shouldn't link to
 * itself, but it should link to all the others).
 */
const ALL_SERVICES: Array<{
    key: ServiceKey;
    href: Parameters<typeof Link>[0]['href'];
    icon: typeof Briefcase;
}> = [
    { key: 'domiciliation-srl-bv', href: '/services/domiciliation-srl-bv', icon: Building2 },
    { key: 'domiciliation-asbl-vzw', href: '/services/domiciliation-asbl-vzw', icon: HeartHandshake },
    { key: 'domiciliation-independants', href: '/services/domiciliation-independants', icon: UserCircle },
    { key: 'domiciliation-startups', href: '/services/domiciliation-startups', icon: Rocket },
    { key: 'domiciliation-virtuelle', href: '/services/domiciliation-virtuelle', icon: Globe2 },
    { key: 'siege-social-bruxelles', href: '/services/siege-social-bruxelles', icon: Briefcase },
];

interface RelatedServicesProps {
    exclude?: ServiceKey;
    background?: 'white' | 'gray';
}

const RelatedServices: FC<RelatedServicesProps> = ({ exclude, background = 'gray' }) => {
    const t = useTranslations('RelatedServices');
    const services = ALL_SERVICES.filter((s) => s.key !== exclude);

    return (
        <section className={`py-20 ${background === 'gray' ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1B]">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-[#6C757D]">{t('subtitle')}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ key, href, icon: Icon }) => (
                        <Link
                            key={key}
                            href={href}
                            className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#E63946]/40 transition-all"
                        >
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-[#E63946] mb-4">
                                <Icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#1D1D1B] mb-2 group-hover:text-[#E63946] transition-colors">
                                {t(`${key}_title`)}
                            </h3>
                            <p className="text-sm text-[#6C757D] leading-relaxed">
                                {t(`${key}_desc`)}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedServices;
