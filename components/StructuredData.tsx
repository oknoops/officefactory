import { SITE_URL } from '@/lib/seo';

const ORG_ID = `${SITE_URL}/#organization`;

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Office Factory',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@officefactory.be',
      telephone: '+32471794552',
      areaServed: 'BE',
      availableLanguage: ['fr', 'nl', 'en'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: "842 Chaussée d'Alsemberg",
      addressLocality: 'Uccle',
      postalCode: '1180',
      addressRegion: 'Brussels',
      addressCountry: 'BE',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type BreadcrumbItem = { name: string; url: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
