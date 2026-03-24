import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['fr', 'en', 'nl'],
    defaultLocale: 'fr',
    localePrefix: 'always',
    pathnames: {
        '/': '/',
        '/a-propos': {
            fr: '/a-propos',
            en: '/about-us',
            nl: '/over-ons',
        },
        '/nos-services': {
            fr: '/nos-services',
            en: '/our-services',
            nl: '/onze-diensten',
        },
        '/contact': '/contact',
        '/blog': '/blog',
        '/blog/[slug]': '/blog/[slug]',
        '/belgian-workspace-association': '/belgian-workspace-association',
        '/spf-economie': {
            fr: '/spf-economie',
            en: '/spf-economy',
            nl: '/fod-economie',
        },
        '/services/domiciliation-bruxelles': {
            fr: '/services/domiciliation-bruxelles',
            en: '/services/domiciliation-brussels',
            nl: '/diensten/domiciliering-brussel',
        },
        '/services/coworking-bruxelles': {
            fr: '/services/coworking-bruxelles',
            en: '/services/coworking-brussels',
            nl: '/diensten/coworking-brussel',
        },
        '/services/bureau-individuel-bruxelles': {
            fr: '/services/bureau-individuel-bruxelles',
            en: '/services/private-office-brussels',
            nl: '/diensten/individueel-kantoor-brussel',
        },
        '/services/bureau-equipe-bruxelles': {
            fr: '/services/bureau-equipe-bruxelles',
            en: '/services/team-office-brussels',
            nl: '/diensten/teamkantoor-brussel',
        },
        '/services/demarches-administratives': {
            fr: '/services/demarches-administratives',
            en: '/services/administrative-services',
            nl: '/diensten/administratieve-diensten',
        },
        '/services/domiciliation-srl-bv': {
            fr: '/services/domiciliation-srl-bv',
            en: '/services/domiciliation-srl-bv',
            nl: '/diensten/domiciliering-bv',
        },
        '/services/domiciliation-asbl-vzw': {
            fr: '/services/domiciliation-asbl-vzw',
            en: '/services/domiciliation-npo',
            nl: '/diensten/domiciliering-vzw',
        },
        '/services/domiciliation-independants': {
            fr: '/services/domiciliation-independants',
            en: '/services/domiciliation-freelancers',
            nl: '/diensten/domiciliering-zelfstandigen',
        },
        '/services/domiciliation-startups': {
            fr: '/services/domiciliation-startups',
            en: '/services/domiciliation-startups',
            nl: '/diensten/domiciliering-startups',
        },
        '/merci': {
            fr: '/merci',
            en: '/thank-you',
            nl: '/bedankt',
        },
        '/faq': '/faq',
        '/services/salle-de-reunion-bruxelles': {
            fr: '/services/salle-de-reunion-bruxelles',
            en: '/services/meeting-room-brussels',
            nl: '/diensten/vergaderzaal-brussel',
        },
        '/services/siege-social-bruxelles': {
            fr: '/services/siege-social-bruxelles',
            en: '/services/registered-office-brussels',
            nl: '/diensten/maatschappelijke-zetel-brussel',
        },
        '/services/domiciliation-virtuelle': {
            fr: '/services/domiciliation-virtuelle',
            en: '/services/virtual-domiciliation',
            nl: '/diensten/virtuele-domiciliering',
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type AppPathname = Pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
