import type { Metadata } from 'next';

export const SITE_URL = 'https://www.officefactory.be';
export const LOCALES = ['fr', 'en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * All page paths (without locale prefix).
 * Used for sitemap generation and alternate links.
 */
export const ALL_PATHS = [
  '',
  '/a-propos',
  '/contact',
  '/nos-services',
  '/services/domiciliation-bruxelles',
  '/services/coworking-bruxelles',
  '/services/bureau-individuel-bruxelles',
  '/services/bureau-equipe-bruxelles',
  '/services/demarches-administratives',
  '/services/domiciliation-srl-bv',
  '/services/domiciliation-asbl-vzw',
  '/services/domiciliation-independants',
  '/services/domiciliation-startups',
  '/belgian-workspace-association',
  '/spf-economie',
  '/blog',
];

/**
 * Generate hreflang alternates and canonical URL for a page.
 */
export function generateAlternates(locale: string, path: string): Metadata['alternates'] {
  const canonicalPath = `/${locale}${path}`;
  const languages: Record<string, string> = {};

  for (const loc of LOCALES) {
    languages[loc] = `${SITE_URL}/${loc}${path}`;
  }
  // x-default points to the default locale (fr)
  languages['x-default'] = `${SITE_URL}/fr${path}`;

  return {
    canonical: `${SITE_URL}${canonicalPath}`,
    languages,
  };
}
