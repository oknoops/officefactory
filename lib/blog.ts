export type BlogCategory = 'guides' | 'legal' | 'local' | 'news';

export type BlogSection =
  | { type: 'text'; id: string; tocKey: string; titleKey: string; contentKey: string }
  | { type: 'steps'; id: string; tocKey: string; titleKey: string; introKey: string; count: number; linkKey?: string; linkHref?: string }
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
  conclusionLinkHref: string;
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
    image: '/modernofficebuilding.webp',
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
    image: '/certificat_bwa.jpg',
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
    image: '/office.jpg',
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
    image: '/spf-economy-building.jpg',
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
    image: '/relaxed-coworking.webp',
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
    image: '/letterbox.jpg',
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
