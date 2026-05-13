import Image from 'next/image';
import Script from 'next/script';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  BookOpenCheck,
  Calendar,
  Clock,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generateAlternates, SITE_URL } from '@/lib/seo';
import { BLOG_POSTS, getPostSlugForLocale, type BlogCategory } from '@/lib/blog';
import TableOfContents from '@/app/[locale]/blog/[slug]/TableOfContents';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('pillar_title'),
    description: t('pillar_desc'),
    keywords: t('pillar_keywords'),
    alternates: generateAlternates(locale, '/guide-domiciliation-bruxelles'),
  };
}

const SECTIONS = [
  { id: 'definition', titleKey: 's_definition_title', bodyKey: 's_definition_body', tocKey: 'toc_definition' },
  { id: 'why-brussels', titleKey: 's_why_brussels_title', bodyKey: 's_why_brussels_body', tocKey: 'toc_why_brussels' },
  { id: 'legal-framework', titleKey: 's_legal_title', bodyKey: 's_legal_body', tocKey: 'toc_legal' },
  { id: 'alternatives', titleKey: 's_alternatives_title', bodyKey: 's_alternatives_body', tocKey: 'toc_alternatives' },
  { id: 'who-for', titleKey: 's_who_title', bodyKey: 's_who_body', tocKey: 'toc_who' },
  { id: 'costs', titleKey: 's_costs_title', bodyKey: 's_costs_body', tocKey: 'toc_costs' },
  { id: 'steps', titleKey: 's_steps_title', bodyKey: 's_steps_body', tocKey: 'toc_steps' },
  { id: 'documents', titleKey: 's_documents_title', bodyKey: 's_documents_body', tocKey: 'toc_documents' },
  { id: 'uccle', titleKey: 's_uccle_title', bodyKey: 's_uccle_body', tocKey: 'toc_uccle' },
  { id: 'office-factory', titleKey: 's_office_factory_title', bodyKey: 's_office_factory_body', tocKey: 'toc_office_factory' },
] as const;

const FAQ_KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

const SECTION_RELATED_BLOG_IDS: Record<string, string[]> = {
  definition: ['qu-est-ce-que-domiciliation', 'domiciliation-guide-complet'],
  'why-brussels': ['top-5-raisons-domiciliation-bruxelles', 'uccle-emplacement-ideal-domiciliation'],
  'legal-framework': ['domiciliation-virtuelle-legale', 'documents-domiciliation-belgique'],
  alternatives: ['domiciliation-vs-bureau-virtuel', 'siege-social-vs-siege-exploitation'],
  'who-for': ['srl-sa-asbl-domiciliation', 'expat-domiciliation-brussels'],
  costs: ['cout-domiciliation-bruxelles'],
  steps: ['domiciliation-guide-complet', 'changer-siege-social'],
  documents: ['documents-domiciliation-belgique'],
  uccle: ['uccle-emplacement-ideal-domiciliation'],
  'office-factory': ['certificat-aml-bwa-melanie', '5-erreurs-siege-social', 'creer-entreprise-belgique-guide', 'adresse-domicile-vs-professionnelle'],
};

const PATH_BY_LOCALE: Record<string, string> = {
  fr: '/fr/guide-domiciliation-bruxelles',
  en: '/en/guide-domiciliation-brussels',
  nl: '/nl/gids-domiciliering-brussel',
};

export default function PillarPage() {
  const locale = useLocale();
  const t = useTranslations('PillarDomiciliation');
  const tMeta = useTranslations('Metadata');

  const tocItems = [
    ...SECTIONS.map((s) => ({ id: s.id, label: t(s.tocKey) })),
    { id: 'articles', label: t('toc_articles') },
    { id: 'faq', label: t('toc_faq') },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_KEYS.map((n) => ({
      '@type': 'Question',
      name: t(`faq_q${n}`),
      acceptedAnswer: { '@type': 'Answer', text: t(`faq_a${n}`) },
    })),
  };

  const pageUrl = `${SITE_URL}${PATH_BY_LOCALE[locale] ?? PATH_BY_LOCALE.fr}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('title'),
    description: tMeta('pillar_desc'),
    inLanguage: locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-GB',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    author: { '@type': 'Organization', name: 'Office Factory' },
    publisher: {
      '@type': 'Organization',
      name: 'Office Factory',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    image: `${SITE_URL}/office-factory-building.webp`,
  };

  const homeLabel = locale === 'fr' ? 'Accueil' : locale === 'nl' ? 'Home' : 'Home';
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeLabel, item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: t('title'), item: pageUrl },
    ],
  };

  const postsByCategory: Record<BlogCategory, typeof BLOG_POSTS> = {
    guides: [],
    legal: [],
    local: [],
    news: [],
  };
  for (const post of BLOG_POSTS) {
    postsByCategory[post.category].push(post);
  }
  const orderedCategories: BlogCategory[] = ['guides', 'legal', 'local', 'news'];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Script
        id="pillar-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="pillar-article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="pillar-breadcrumb-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Navbar />

      <section className="pt-32 pb-12 bg-[#F8F9FA]">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-3 mb-4 text-sm text-[#6C757D]">
            <Link href="/" className="hover:text-[#E63946]">{homeLabel}</Link>
            <span>/</span>
            <span className="text-[#1D1D1B]">{t('title')}</span>
          </div>
          <span className="inline-flex items-center gap-2 text-[#E63946] font-semibold tracking-wider uppercase text-sm mb-4">
            <BookOpenCheck size={18} />
            {t('subtitle')}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1D1D1B] leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-[#6C757D] leading-relaxed mb-4 max-w-3xl">
            {t('lead')}
          </p>
          <p className="text-base text-[#6C757D] leading-relaxed mb-6 max-w-3xl">
            {t('lead2')}
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#6C757D]">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {t('updated_label')} {t('updated_date')}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} />
              {t('reading_time')}
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-600" />
              SPF Économie · BWA · AML
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] pb-16">
        <div className="container max-w-5xl">
          <div className="relative h-[320px] md:h-[440px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/office-factory-building.webp"
              alt="Office Factory Business Center — Uccle, Bruxelles"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-6xl flex gap-12">
          <TableOfContents items={tocItems} label={t('toc_label')} />

          <div className="flex-1 min-w-0 max-w-3xl">
            {SECTIONS.map((section) => {
              const relatedIds = SECTION_RELATED_BLOG_IDS[section.id] ?? [];
              const relatedPosts = relatedIds
                .map((id) => BLOG_POSTS.find((p) => p.id === id))
                .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));

              return (
                <article key={section.id} id={section.id} className="mb-14 scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1B] mb-6 leading-tight">
                    {t(section.titleKey)}
                  </h2>
                  <div
                    className="prose prose-lg max-w-none text-[#4A4A4A] leading-relaxed [&_p]:mb-4 [&_strong]:text-[#1D1D1B]"
                    dangerouslySetInnerHTML={{ __html: t.raw(section.bodyKey) as string }}
                  />
                  {relatedPosts.length > 0 && (
                    <div className="mt-6 p-5 rounded-2xl bg-[#FEF2F3] border border-[#E63946]/15">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#E63946] mb-3">
                        {t('toc_articles')}
                      </p>
                      <ul className="space-y-2">
                        {relatedPosts.map((post) => (
                          <li key={post.id}>
                            <Link
                              href={{
                                pathname: '/blog/[slug]',
                                params: { slug: getPostSlugForLocale(post, locale) },
                              }}
                              className="text-[#1D1D1B] hover:text-[#E63946] font-medium inline-flex items-center gap-2"
                            >
                              <ArrowRight size={14} />
                              {tMeta(`${post.metadataKey}_title`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}

            <article id="articles" className="mb-14 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1B] mb-4 leading-tight">
                {t('articles_title')}
              </h2>
              <p className="text-[#6C757D] mb-8 leading-relaxed">{t('articles_intro')}</p>
              <div className="space-y-8">
                {orderedCategories.map((cat) => {
                  const posts = postsByCategory[cat];
                  if (posts.length === 0) return null;
                  return (
                    <div key={cat}>
                      <h3 className="text-lg font-bold text-[#1D1D1B] mb-3">
                        {t(`articles_cat_${cat}`)}
                      </h3>
                      <ul className="space-y-2 border-l-2 border-gray-200 pl-5">
                        {posts.map((post) => (
                          <li key={post.id}>
                            <Link
                              href={{
                                pathname: '/blog/[slug]',
                                params: { slug: getPostSlugForLocale(post, locale) },
                              }}
                              className="text-[#1D1D1B] hover:text-[#E63946] inline-flex items-center gap-2"
                            >
                              <ArrowRight size={14} className="text-[#E63946]" />
                              {tMeta(`${post.metadataKey}_title`)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </article>

            <article id="faq" className="mb-4 scroll-mt-28">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1B] mb-4 leading-tight">
                {t('faq_title')}
              </h2>
              <p className="text-[#6C757D] mb-8 leading-relaxed">{t('faq_intro')}</p>
              <div className="space-y-3">
                {FAQ_KEYS.map((n) => (
                  <details key={n} className="bg-white border border-gray-200 rounded-xl group shadow-sm">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#1D1D1B] hover:text-[#E63946] transition-colors">
                      {t(`faq_q${n}`)}
                      <ChevronDown size={20} className="shrink-0 ml-4 text-[#6C757D] group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-[#6C757D] leading-relaxed">
                      {t(`faq_a${n}`)}
                    </div>
                  </details>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F8F9FA]">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-16 h-16 rounded-2xl bg-[#E63946] text-white flex items-center justify-center shrink-0">
              <MapPin size={32} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#E63946] mb-1">Office Factory</p>
              <p className="text-xl font-bold text-[#1D1D1B] mb-1">842 Chaussée d&apos;Alsemberg, 1180 Uccle</p>
              <p className="text-[#6C757D]">Bruxelles · Belgique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1B]">
            {t('cta_title')}
          </h2>
          <p className="text-lg text-[#6C757D] mb-8 leading-relaxed">{t('cta_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center gap-2"
            >
              {t('cta_btn_primary')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/nos-services"
              className="btn btn-dark px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center"
            >
              {t('cta_btn_secondary')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
