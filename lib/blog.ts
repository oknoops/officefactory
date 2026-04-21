import type { StaticPathname } from '@/lib/seo';

export type BlogCategory = 'guides' | 'legal' | 'local' | 'news';

export type BlogSection =
  | { type: 'text'; id: string; tocKey: string; titleKey: string; contentKey: string }
  | { type: 'steps'; id: string; tocKey: string; titleKey: string; introKey: string; count: number; linkKey?: string; linkHref?: StaticPathname }
  | { type: 'obligations'; id: string; tocKey: string; titleKey: string; introKey: string; count: number };

export interface BlogPost {
  id: string;
  slugs: { fr: string; en: string; nl: string };
  category: BlogCategory;
  date: string; // ISO date
  image: string;
  translationNamespace: string;
  metadataKey: string; // e.g. 'blog_post1' → reads blog_post1_title, blog_post1_desc, blog_post1_keywords
  sections: BlogSection[];
  conclusionLinkHref: StaticPathname;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'domiciliation-guide-complet',
    slugs: {
      fr: 'comment-domicilier-entreprise-bruxelles-guide-complet',
      en: 'how-to-domicile-company-brussels-complete-guide',
      nl: 'bedrijf-domicilieren-brussel-complete-gids',
    },
    category: 'guides',
    date: '2026-03-10',
    image: '/office-factory-building.webp',
    translationNamespace: 'BlogPost1',
    metadataKey: 'blog_post1',
    conclusionLinkHref: '/contact',
    sections: [
      { type: 'text', id: 'what-is-domiciliation', tocKey: 'toc_what', titleKey: 'what_title', contentKey: 'what_content' },
      { type: 'text', id: 'why-domiciliation', tocKey: 'toc_why', titleKey: 'why_title', contentKey: 'why_content' },
      { type: 'text', id: 'what-is-included', tocKey: 'toc_included', titleKey: 'included_title', contentKey: 'included_content' },
      { type: 'steps', id: 'steps', tocKey: 'toc_steps', titleKey: 'steps_title', introKey: 'steps_intro', count: 5, linkKey: 'steps_link', linkHref: '/services/demarches-administratives' },
      { type: 'text', id: 'cost', tocKey: 'toc_cost', titleKey: 'cost_title', contentKey: 'cost_content' },
      { type: 'text', id: 'legal', tocKey: 'toc_legal', titleKey: 'legal_title', contentKey: 'legal_content' },
    ],
  },
  {
    id: 'certificat-aml-bwa-melanie',
    slugs: {
      fr: 'office-factory-certifie-aml-belgian-workspace-association',
      en: 'office-factory-aml-certified-belgian-workspace-association',
      nl: 'office-factory-aml-gecertificeerd-belgian-workspace-association',
    },
    category: 'news',
    date: '2026-03-09',
    image: '/certificat-bwa.jpg',
    translationNamespace: 'BlogPost2',
    metadataKey: 'blog_post2',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'what-is-bwa', tocKey: 'toc_what', titleKey: 'what_title', contentKey: 'what_content' },
      { type: 'text', id: 'aml-certification', tocKey: 'toc_aml', titleKey: 'aml_title', contentKey: 'aml_content' },
      { type: 'text', id: 'why-it-matters', tocKey: 'toc_why', titleKey: 'why_title', contentKey: 'why_content' },
      { type: 'text', id: 'melanie', tocKey: 'toc_melanie', titleKey: 'melanie_title', contentKey: 'melanie_content' },
      { type: 'obligations', id: 'obligations', tocKey: 'toc_obligations', titleKey: 'obligations_title', introKey: 'obligations_intro', count: 5 },
    ],
  },
  {
    id: '5-erreurs-siege-social',
    slugs: {
      fr: '5-erreurs-entrepreneurs-choix-siege-social',
      en: '5-mistakes-entrepreneurs-choosing-registered-office',
      nl: '5-fouten-ondernemers-keuze-maatschappelijke-zetel',
    },
    category: 'guides',
    date: '2026-03-16',
    image: '/blog-5-erreurs.jpg',
    translationNamespace: 'BlogPost3',
    metadataKey: 'blog_post3',
    conclusionLinkHref: '/contact',
    sections: [
      { type: 'steps', id: 'mistakes', tocKey: 'toc_mistakes', titleKey: 'mistakes_title', introKey: 'mistakes_intro', count: 5 },
      { type: 'text', id: 'how-to-avoid', tocKey: 'toc_avoid', titleKey: 'avoid_title', contentKey: 'avoid_content' },
    ],
  },
  {
    id: 'srl-sa-asbl-domiciliation',
    slugs: {
      fr: 'srl-sa-asbl-quel-type-societe-quelle-domiciliation',
      en: 'srl-sa-asbl-which-company-type-needs-what-domiciliation',
      nl: 'bv-nv-vzw-welk-type-vennootschap-welke-domiciliering',
    },
    category: 'legal',
    date: '2026-03-16',
    image: '/hero-spf-economie.jpg',
    translationNamespace: 'BlogPost4',
    metadataKey: 'blog_post4',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'intro-types', tocKey: 'toc_intro', titleKey: 'intro_title', contentKey: 'intro_content' },
      { type: 'text', id: 'srl-bv', tocKey: 'toc_srl', titleKey: 'srl_title', contentKey: 'srl_content' },
      { type: 'text', id: 'sa-nv', tocKey: 'toc_sa', titleKey: 'sa_title', contentKey: 'sa_content' },
      { type: 'text', id: 'asbl-vzw', tocKey: 'toc_asbl', titleKey: 'asbl_title', contentKey: 'asbl_content' },
      { type: 'text', id: 'comparison', tocKey: 'toc_comparison', titleKey: 'comparison_title', contentKey: 'comparison_content' },
    ],
  },
  {
    id: 'expat-domiciliation-brussels',
    slugs: {
      fr: 'creer-entreprise-bruxelles-expatrie-guide-domiciliation',
      en: 'starting-business-brussels-expat-address-domiciliation-guide',
      nl: 'bedrijf-starten-brussel-expat-gids-domiciliering',
    },
    category: 'guides',
    date: '2026-03-23',
    image: '/hero-siege-social.jpg',
    translationNamespace: 'BlogPost5',
    metadataKey: 'blog_post5',
    conclusionLinkHref: '/contact',
    sections: [
      { type: 'text', id: 'why-brussels', tocKey: 'toc_why_brussels', titleKey: 'why_brussels_title', contentKey: 'why_brussels_content' },
      { type: 'text', id: 'what-is-domiciliation', tocKey: 'toc_what', titleKey: 'what_title', contentKey: 'what_content' },
      { type: 'steps', id: 'steps', tocKey: 'toc_steps', titleKey: 'steps_title', introKey: 'steps_intro', count: 5 },
      { type: 'text', id: 'costs', tocKey: 'toc_costs', titleKey: 'costs_title', contentKey: 'costs_content' },
      { type: 'text', id: 'legal', tocKey: 'toc_legal', titleKey: 'legal_title', contentKey: 'legal_content' },
    ],
  },
  {
    id: 'adresse-domicile-vs-professionnelle',
    slugs: {
      fr: 'adresse-domicile-vs-adresse-professionnelle-entreprise',
      en: 'home-address-vs-business-address-why-it-matters',
      nl: 'thuisadres-vs-zakelijk-adres-waarom-het-belangrijk-is',
    },
    category: 'guides',
    date: '2026-03-23',
    image: '/hero-domiciliation.jpg',
    translationNamespace: 'BlogPost6',
    metadataKey: 'blog_post6',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'privacy', tocKey: 'toc_privacy', titleKey: 'privacy_title', contentKey: 'privacy_content' },
      { type: 'text', id: 'credibility', tocKey: 'toc_credibility', titleKey: 'credibility_title', contentKey: 'credibility_content' },
      { type: 'text', id: 'legal-implications', tocKey: 'toc_legal', titleKey: 'legal_title', contentKey: 'legal_content' },
      { type: 'text', id: 'cost-comparison', tocKey: 'toc_cost', titleKey: 'cost_title', contentKey: 'cost_content' },
      { type: 'text', id: 'when-to-switch', tocKey: 'toc_switch', titleKey: 'switch_title', contentKey: 'switch_content' },
    ],
  },
  {
    id: 'qu-est-ce-que-domiciliation',
    slugs: {
      fr: 'qu-est-ce-que-la-domiciliation-entreprise-belgique',
      en: 'what-is-company-domiciliation-belgium',
      nl: 'wat-is-bedrijfsdomiciliering-belgie',
    },
    category: 'guides',
    date: '2026-03-23',
    image: '/blog-domiciliation-guide.jpg',
    translationNamespace: 'BlogPost7',
    metadataKey: 'blog_post7',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'definition', tocKey: 'toc_definition', titleKey: 'definition_title', contentKey: 'definition_content' },
      { type: 'text', id: 'legal-framework', tocKey: 'toc_legal', titleKey: 'legal_framework_title', contentKey: 'legal_framework_content' },
      { type: 'text', id: 'who-uses-it', tocKey: 'toc_who', titleKey: 'who_uses_it_title', contentKey: 'who_uses_it_content' },
      { type: 'text', id: 'advantages', tocKey: 'toc_advantages', titleKey: 'advantages_title', contentKey: 'advantages_content' },
      { type: 'text', id: 'vs-alternatives', tocKey: 'toc_vs', titleKey: 'vs_alternatives_title', contentKey: 'vs_alternatives_content' },
    ],
  },
  {
    id: 'cout-domiciliation-bruxelles',
    slugs: {
      fr: 'combien-coute-domiciliation-entreprise-bruxelles',
      en: 'how-much-does-company-domiciliation-cost-brussels',
      nl: 'hoeveel-kost-bedrijfsdomiciliering-brussel',
    },
    category: 'guides',
    date: '2026-03-23',
    image: '/hero-coworking.jpg',
    translationNamespace: 'BlogPost8',
    metadataKey: 'blog_post8',
    conclusionLinkHref: '/contact',
    sections: [
      { type: 'text', id: 'range', tocKey: 'toc_range', titleKey: 'range_title', contentKey: 'range_content' },
      { type: 'text', id: 'factors', tocKey: 'toc_factors', titleKey: 'factors_title', contentKey: 'factors_content' },
      { type: 'text', id: 'included', tocKey: 'toc_included', titleKey: 'included_title', contentKey: 'included_content' },
      { type: 'text', id: 'hidden', tocKey: 'toc_hidden', titleKey: 'hidden_title', contentKey: 'hidden_content' },
      { type: 'text', id: 'of', tocKey: 'toc_of', titleKey: 'of_title', contentKey: 'of_content' },
    ],
  },
  {
    id: 'siege-social-vs-siege-exploitation',
    slugs: {
      fr: 'difference-siege-social-siege-exploitation-belgique',
      en: 'registered-office-vs-operating-office-belgium',
      nl: 'maatschappelijke-zetel-vs-exploitatiezetel-belgie',
    },
    category: 'legal',
    date: '2026-03-24',
    image: '/blog-siege-social.jpg',
    translationNamespace: 'BlogPost10',
    metadataKey: 'blog_post10',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'definition-siege-social', tocKey: 'toc_social', titleKey: 'social_title', contentKey: 'social_content' },
      { type: 'text', id: 'definition-siege-exploitation', tocKey: 'toc_exploitation', titleKey: 'exploitation_title', contentKey: 'exploitation_content' },
      { type: 'text', id: 'differences', tocKey: 'toc_differences', titleKey: 'differences_title', contentKey: 'differences_content' },
      { type: 'text', id: 'can-they-differ', tocKey: 'toc_differ', titleKey: 'differ_title', contentKey: 'differ_content' },
      { type: 'text', id: 'domiciliation', tocKey: 'toc_domiciliation', titleKey: 'domiciliation_title', contentKey: 'domiciliation_content' },
    ],
  },
  {
    id: 'documents-domiciliation-belgique',
    slugs: {
      fr: 'documents-pour-domicilier-entreprise-belgique',
      en: 'documents-needed-to-domicile-company-belgium',
      nl: 'documenten-bedrijfsdomiciliering-belgie',
    },
    category: 'legal',
    date: '2026-03-23',
    image: '/hero-spf-economie.jpg',
    translationNamespace: 'BlogPost9',
    metadataKey: 'blog_post9',
    conclusionLinkHref: '/services/demarches-administratives',
    sections: [
      { type: 'text', id: 'why', tocKey: 'toc_why', titleKey: 'why_title', contentKey: 'why_content' },
      { type: 'steps', id: 'documents-list', tocKey: 'toc_docs', titleKey: 'docs_title', introKey: 'docs_intro', count: 5 },
      { type: 'text', id: 'new-company', tocKey: 'toc_new', titleKey: 'new_title', contentKey: 'new_content' },
      { type: 'text', id: 'transfer', tocKey: 'toc_transfer', titleKey: 'transfer_title', contentKey: 'transfer_content' },
      { type: 'text', id: 'timeline', tocKey: 'toc_timeline', titleKey: 'timeline_title', contentKey: 'timeline_content' },
    ],
  },
  {
    id: 'domiciliation-virtuelle-legale',
    slugs: {
      fr: 'domiciliation-virtuelle-belgique-est-ce-legal',
      en: 'virtual-domiciliation-belgium-is-it-legal',
      nl: 'virtuele-domiciliering-belgie-is-het-legaal',
    },
    category: 'legal',
    date: '2026-03-30',
    image: '/blog-domiciliation-virtuelle.jpg',
    translationNamespace: 'BlogPost11',
    metadataKey: 'blog_post11',
    conclusionLinkHref: '/services/domiciliation-virtuelle',
    sections: [
      { type: 'text', id: 'what-is-virtual', tocKey: 'toc_what', titleKey: 'what_title', contentKey: 'what_content' },
      { type: 'text', id: 'belgian-law', tocKey: 'toc_law', titleKey: 'law_title', contentKey: 'law_content' },
      { type: 'text', id: 'why-physical', tocKey: 'toc_why', titleKey: 'why_title', contentKey: 'why_content' },
      { type: 'text', id: 'compliant-solution', tocKey: 'toc_solution', titleKey: 'solution_title', contentKey: 'solution_content' },
      { type: 'text', id: 'what-to-check', tocKey: 'toc_check', titleKey: 'check_title', contentKey: 'check_content' },
    ],
  },
  {
    id: 'changer-siege-social',
    slugs: {
      fr: 'comment-changer-siege-social-entreprise-belgique',
      en: 'how-to-change-company-registered-office-belgium',
      nl: 'hoe-wijzig-ik-maatschappelijke-zetel-belgie',
    },
    category: 'guides',
    date: '2026-03-31',
    image: '/blog-changer-siege-social.jpg',
    translationNamespace: 'BlogPost12',
    metadataKey: 'blog_post12',
    conclusionLinkHref: '/services/demarches-administratives',
    sections: [
      { type: 'text', id: 'why-change', tocKey: 'toc_why', titleKey: 'why_title', contentKey: 'why_content' },
      { type: 'steps', id: 'steps', tocKey: 'toc_steps', titleKey: 'steps_title', introKey: 'steps_intro', count: 5 },
      { type: 'text', id: 'costs', tocKey: 'toc_costs', titleKey: 'costs_title', contentKey: 'costs_content' },
      { type: 'text', id: 'domiciliation-solution', tocKey: 'toc_domiciliation', titleKey: 'domiciliation_title', contentKey: 'domiciliation_content' },
      { type: 'text', id: 'mistakes-to-avoid', tocKey: 'toc_mistakes', titleKey: 'mistakes_title', contentKey: 'mistakes_content' },
    ],
  },
  {
    id: 'top-5-raisons-domiciliation-bruxelles',
    slugs: {
      fr: 'top-5-raisons-choisir-adresse-domiciliation-bruxelles',
      en: '5-reasons-to-choose-domiciliation-address-brussels',
      nl: 'top-5-redenen-domiciliatieadres-brussel',
    },
    category: 'guides',
    date: '2026-03-31',
    image: '/blog-5-raisons.jpg',
    translationNamespace: 'BlogPost13',
    metadataKey: 'blog_post13',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'intro-context', tocKey: 'toc_intro', titleKey: 'intro_title', contentKey: 'intro_content' },
      { type: 'steps', id: 'reasons', tocKey: 'toc_reasons', titleKey: 'reasons_title', introKey: 'reasons_intro', count: 5 },
      { type: 'text', id: 'who-is-it-for', tocKey: 'toc_who', titleKey: 'who_title', contentKey: 'who_content' },
      { type: 'text', id: 'how-to-start', tocKey: 'toc_how', titleKey: 'how_title', contentKey: 'how_content' },
    ],
  },
  {
    id: 'uccle-emplacement-ideal-domiciliation',
    slugs: {
      fr: 'pourquoi-uccle-emplacement-ideal-domiciliation',
      en: 'why-uccle-ideal-location-domiciliation',
      nl: 'waarom-ukkel-ideale-locatie-domiciliering',
    },
    category: 'local',
    date: '2026-04-21',
    image: '/office-factory-building.webp',
    translationNamespace: 'BlogPost14',
    metadataKey: 'blog_post14',
    conclusionLinkHref: '/services/domiciliation-bruxelles',
    sections: [
      { type: 'text', id: 'intro-context', tocKey: 'toc_intro', titleKey: 'intro_title', contentKey: 'intro_content' },
      { type: 'steps', id: 'reasons', tocKey: 'toc_reasons', titleKey: 'reasons_title', introKey: 'reasons_intro', count: 5 },
      { type: 'text', id: 'who-is-it-for', tocKey: 'toc_who', titleKey: 'who_title', contentKey: 'who_content' },
      { type: 'text', id: 'how-to-start', tocKey: 'toc_how', titleKey: 'how_title', contentKey: 'how_content' },
    ],
  },
];

export const CATEGORIES: BlogCategory[] = ['guides', 'legal', 'local', 'news'];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(
    (p) => p.slugs.fr === slug || p.slugs.en === slug || p.slugs.nl === slug
  );
}

export function getPostSlugForLocale(post: BlogPost, locale: string): string {
  return post.slugs[locale as keyof typeof post.slugs] || post.slugs.fr;
}

export function getPostsByCategory(category: BlogCategory | 'all'): BlogPost[] {
  if (category === 'all') return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}
