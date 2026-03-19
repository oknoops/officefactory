import type { Metadata } from 'next';
import { getPathname, type Pathnames } from '@/i18n/routing';

export const SITE_URL = 'https://www.officefactory.be';
export const LOCALES = ['fr', 'en', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];

/** Static pathnames (no dynamic segments like [slug]) */
export type StaticPathname = Exclude<Pathnames, `${string}[${string}]${string}`>;

/**
 * All page paths (internal, without locale prefix).
 * Used for sitemap generation and alternate links.
 */
export const ALL_PATHS: StaticPathname[] = [
  '/',
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
  '/merci',
];

/**
 * Get the localized path for a given internal path and locale.
 */
export function getLocalizedPath(path: StaticPathname, locale: Locale): string {
  if (path === '/') return '';
  return getPathname({ locale, href: path });
}

/**
 * Generate hreflang alternates and canonical URL for a page.
 */
export function generateAlternates(locale: string, path: StaticPathname): Metadata['alternates'] {
  const localizedPath = getLocalizedPath(path, locale as Locale);
  const canonicalPath = `/${locale}${localizedPath}`;
  const languages: Record<string, string> = {};

  for (const loc of LOCALES) {
    const locPath = getLocalizedPath(path, loc);
    languages[loc] = `${SITE_URL}/${loc}${locPath}`;
  }
  // x-default points to the default locale (fr)
  const frPath = getLocalizedPath(path, 'fr');
  languages['x-default'] = `${SITE_URL}/fr${frPath}`;

  return {
    canonical: `${SITE_URL}${canonicalPath}`,
    languages,
  };
}
