import React from 'react';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, Building2, FileText, MapPin, Package, Wifi, CreditCard, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { generateAlternates } from '@/lib/seo';

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: t('faq_title'),
        description: t('faq_desc'),
        keywords: t('faq_keywords'),
        alternates: generateAlternates(locale, '/faq'),
    };
}

// All 24 questions — FAQPage schema (French, default locale)
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        // Domiciliation Générale
        {
            '@type': 'Question',
            name: "Qu'est-ce que la domiciliation d'entreprise ?",
            acceptedAnswer: { '@type': 'Answer', text: "La domiciliation consiste à établir le siège social de votre entreprise à une adresse professionnelle tierce. Chez Office Factory, vous utilisez notre adresse au 842 Chaussée d'Alsemberg, 1180 Uccle (Bruxelles) comme siège social officiel, sans y être physiquement présent." },
        },
        {
            '@type': 'Question',
            name: 'Combien coûte la domiciliation chez Office Factory ?',
            acceptedAnswer: { '@type': 'Answer', text: "Notre formule de domiciliation est disponible à partir de 79 €/mois HTVA. Ce tarif inclut l'adresse de siège social, la réception et la gestion de votre courrier, et votre enregistrement dans un centre certifié SPF Économie. Contactez-nous pour un devis personnalisé." },
        },
        {
            '@type': 'Question',
            name: 'Quels types de sociétés peuvent être domiciliées ?',
            acceptedAnswer: { '@type': 'Answer', text: "Toutes les formes juridiques belges sont acceptées : SRL (BV), SA (NV), ASBL (VZW), SNC, SCS, SC, ainsi que les indépendants en personne physique. Nous accueillons également les sociétés étrangères souhaitant établir une présence en Belgique." },
        },
        {
            '@type': 'Question',
            name: 'Combien de temps faut-il pour démarrer ?',
            acceptedAnswer: { '@type': 'Answer', text: "La mise en place est très rapide. Dès réception de votre contrat signé et des documents requis, votre domiciliation est active en 24 à 48 heures. Tout le processus peut se faire entièrement en ligne." },
        },
        // Documents & Légalité
        {
            '@type': 'Question',
            name: 'La domiciliation est-elle légale en Belgique ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui, elle est parfaitement légale. Depuis la loi du 29 mars 2018, les centres d'affaires proposant ce service doivent être enregistrés auprès du SPF Économie. Office Factory possède cet enregistrement officiel, garantissant la conformité totale de votre domiciliation." },
        },
        {
            '@type': 'Question',
            name: 'Quels documents sont nécessaires pour domicilier mon entreprise ?',
            acceptedAnswer: { '@type': 'Answer', text: "Nous avons besoin d'une copie de votre pièce d'identité (des administrateurs ou du gérant), des statuts de la société ou de l'acte de constitution, et d'un extrait BCE si la société existe déjà. Pour les nouvelles sociétés, nous vous fournissons la convention de domiciliation à remettre au notaire lors de la constitution." },
        },
        {
            '@type': 'Question',
            name: 'Que se passe-t-il si je choisis un centre non enregistré ?',
            acceptedAnswer: { '@type': 'Answer', text: "Domicilier votre société dans un centre non enregistré auprès du SPF Économie vous expose à des risques graves : radiation de votre numéro d'entreprise à la BCE, refus de numéro de TVA par l'administration fiscale, et obligation de trouver un nouveau siège social dans l'urgence." },
        },
        {
            '@type': 'Question',
            name: 'Office Factory est-il bien enregistré auprès du SPF Économie ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui. Office Factory est un centre d'affaires officiellement enregistré auprès du SPF Économie, conformément à la loi du 29 mars 2018. Vous pouvez vérifier notre enregistrement directement sur le site du SPF Économie. Cet enregistrement garantit que votre domiciliation est reconnue par toutes les administrations belges." },
        },
        // Adresse & Siège Social
        {
            '@type': 'Question',
            name: 'Puis-je utiliser cette adresse sur mes factures et documents officiels ?',
            acceptedAnswer: { '@type': 'Answer', text: "Absolument. L'adresse d'Office Factory devient votre siège social officiel. Vous pouvez l'utiliser sur vos factures, contrats, site internet, cartes de visite, et auprès de toutes les administrations belges (BCE, TVA, greffe du tribunal de commerce)." },
        },
        {
            '@type': 'Question',
            name: "Comment se passe l'inscription à la BCE avec une adresse de domiciliation ?",
            acceptedAnswer: { '@type': 'Answer', text: "Une fois votre contrat signé, nous vous remettons une convention officielle que vous ou votre notaire transmettez à la BCE (Banque-Carrefour des Entreprises). L'adresse d'Office Factory est alors enregistrée comme siège social de votre entreprise dans les registres officiels." },
        },
        {
            '@type': 'Question',
            name: 'Comment puis-je changer ou transférer ma domiciliation ?',
            acceptedAnswer: { '@type': 'Answer', text: "Si vous souhaitez transférer votre siège social depuis un autre prestataire vers Office Factory, nous vous accompagnons dans toutes les démarches. Un transfert de siège social nécessite une modification des statuts publiée au Moniteur Belge. Notre service de démarches administratives peut gérer cela pour vous." },
        },
        {
            '@type': 'Question',
            name: 'Puis-je créer ma société directement avec votre adresse ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui. Lors de la constitution de votre société chez le notaire, vous pouvez indiquer notre adresse comme siège social dès le départ. Nous vous fournissons la convention de domiciliation à présenter au notaire avant la signature des statuts." },
        },
        // Services Inclus
        {
            '@type': 'Question',
            name: "Qu'est-ce qui est inclus dans la formule de domiciliation ?",
            acceptedAnswer: { '@type': 'Answer', text: "La domiciliation comprend : l'utilisation de notre adresse comme siège social officiel, la réception et le tri de votre courrier, la notification par email à chaque nouveau courrier, la conservation sécurisée de vos documents, et l'accès sur rendez-vous pour récupérer votre courrier." },
        },
        {
            '@type': 'Question',
            name: 'Comment fonctionne la gestion du courrier ?',
            acceptedAnswer: { '@type': 'Answer', text: "Nous réceptionnons votre courrier quotidiennement. Vous avez le choix : récupérer votre courrier sur place aux heures de bureau, demander un renvoi postal régulier vers votre adresse personnelle, ou recevoir une notification par email à chaque arrivée. Votre courrier est conservé en toute sécurité dans nos locaux." },
        },
        {
            '@type': 'Question',
            name: 'Avez-vous des salles de réunion disponibles ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui, nous disposons de salles de réunion que vous pouvez réserver à l'heure ou à la demi-journée. Elles sont idéales pour recevoir des clients, organiser une assemblée générale ou tenir un conseil d'administration dans un cadre professionnel et privé." },
        },
        {
            '@type': 'Question',
            name: 'Puis-je recevoir des colis ou du courrier recommandé ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui, nous réceptionnons également les colis et le courrier recommandé en votre nom. Vous êtes notifié dès réception et pouvez venir les récupérer ou demander un arrangement particulier pour leur gestion." },
        },
        // Coworking & Bureaux
        {
            '@type': 'Question',
            name: 'Quelle est la différence entre coworking et bureau individuel ?',
            acceptedAnswer: { '@type': 'Answer', text: "Le coworking est un espace de travail partagé où vous travaillez dans un open space avec d'autres professionnels. Le bureau individuel est un espace privatif dédié à une seule personne. Le bureau d'équipe accueille plusieurs collaborateurs dans un espace fermé. Chaque formule a ses avantages selon votre mode de travail." },
        },
        {
            '@type': 'Question',
            name: "Qu'est-ce qui est inclus dans l'abonnement coworking ?",
            acceptedAnswer: { '@type': 'Answer', text: "Votre abonnement coworking inclut : accès à l'espace de travail partagé, WiFi haut débit, imprimante, café et thé, utilisation des espaces communs, et adresse postale. Les salles de réunion sont disponibles en supplément à l'heure ou à la demi-journée." },
        },
        {
            '@type': 'Question',
            name: "Quels sont les horaires d'accès aux espaces ?",
            acceptedAnswer: { '@type': 'Answer', text: "Nos espaces de travail sont accessibles du lundi au vendredi, de 8h à 18h. Des arrangements pour des accès étendus ou ponctuels peuvent être discutés selon vos besoins spécifiques." },
        },
        {
            '@type': 'Question',
            name: 'Puis-je combiner domiciliation et espace de travail ?',
            acceptedAnswer: { '@type': 'Answer', text: "Absolument. Beaucoup de nos clients combinent domiciliation et coworking ou bureau individuel. C'est une solution complète : vous avez votre adresse officielle et un espace physique pour travailler, le tout dans le même bâtiment professionnel à Uccle." },
        },
        // Tarifs & Réservation
        {
            '@type': 'Question',
            name: 'Quel est le prix de la domiciliation ?',
            acceptedAnswer: { '@type': 'Answer', text: "La domiciliation est disponible à partir de 79 €/mois HTVA. Ce tarif comprend l'adresse de siège social, la gestion du courrier et l'enregistrement dans un centre certifié SPF Économie. Des options supplémentaires (renvoi postal, salles de réunion) sont disponibles en complément." },
        },
        {
            '@type': 'Question',
            name: "Y a-t-il une durée d'engagement minimum ?",
            acceptedAnswer: { '@type': 'Answer', text: "Nous proposons des formules flexibles sans engagement annuel obligatoire. Contactez-nous pour discuter de la formule qui correspond le mieux à vos besoins, que vous démarriez ou que vous soyez déjà bien établi." },
        },
        {
            '@type': 'Question',
            name: 'Comment puis-je souscrire à un service ?',
            acceptedAnswer: { '@type': 'Answer', text: "C'est simple : contactez-nous via notre formulaire en ligne, par téléphone ou par email. Notre équipe vous répond rapidement pour valider votre situation, vous envoyer la convention à signer, et activer votre service dans les 24 à 48 heures." },
        },
        {
            '@type': 'Question',
            name: 'Proposez-vous des tarifs préférentiels pour les engagements longue durée ?',
            acceptedAnswer: { '@type': 'Answer', text: "Oui, nous proposons des conditions avantageuses pour les engagements de longue durée. Contactez notre équipe pour obtenir un devis personnalisé adapté à votre situation et à la durée souhaitée." },
        },
    ],
};

type RelatedLink = { labelKey: string; href: string };

const categoryRelatedLinks: Record<string, RelatedLink[]> = {
    general_dom: [
        { labelKey: 'link_domiciliation', href: '/services/domiciliation-bruxelles' },
        { labelKey: 'link_siege_social', href: '/services/siege-social-bruxelles' },
        { labelKey: 'link_domiciliation_virtuelle', href: '/services/domiciliation-virtuelle' },
        { labelKey: 'link_nos_services', href: '/nos-services' },
    ],
    docs: [
        { labelKey: 'link_spf', href: '/spf-economie' },
        { labelKey: 'link_demarches', href: '/services/demarches-administratives' },
    ],
    address: [
        { labelKey: 'link_demarches', href: '/services/demarches-administratives' },
        { labelKey: 'link_domiciliation', href: '/services/domiciliation-bruxelles' },
        { labelKey: 'link_siege_social', href: '/services/siege-social-bruxelles' },
    ],
    services_inc: [
        { labelKey: 'link_domiciliation', href: '/services/domiciliation-bruxelles' },
        { labelKey: 'link_salle_reunion', href: '/services/salle-de-reunion-bruxelles' },
        { labelKey: 'link_nos_services', href: '/nos-services' },
    ],
    coworking: [
        { labelKey: 'link_coworking', href: '/services/coworking-bruxelles' },
        { labelKey: 'link_bureau_individuel', href: '/services/bureau-individuel-bruxelles' },
        { labelKey: 'link_bureau_equipe', href: '/services/bureau-equipe-bruxelles' },
    ],
    pricing: [
        { labelKey: 'link_contact', href: '/contact' },
        { labelKey: 'link_nos_services', href: '/nos-services' },
    ],
};

const linkClass = 'underline underline-offset-2 decoration-[#E63946]/50 hover:text-[#E63946] transition-colors';

const richConfigs: Record<string, Record<string, (chunks: React.ReactNode) => React.ReactElement>> = {
    gen3: {
        srlLink: (chunks) => <Link href="/services/domiciliation-srl-bv" className={linkClass}>{chunks}</Link>,
        asblLink: (chunks) => <Link href="/services/domiciliation-asbl-vzw" className={linkClass}>{chunks}</Link>,
        freLink: (chunks) => <Link href="/services/domiciliation-independants" className={linkClass}>{chunks}</Link>,
    },
    doc4: {
        spfLink: (chunks) => <Link href="/spf-economie" className={linkClass}>{chunks}</Link>,
    },
    adr3: {
        demLink: (chunks) => <Link href="/services/demarches-administratives" className={linkClass}>{chunks}</Link>,
    },
    cow1: {
        cowLink: (chunks) => <Link href="/services/coworking-bruxelles" className={linkClass}>{chunks}</Link>,
        burLink: (chunks) => <Link href="/services/bureau-individuel-bruxelles" className={linkClass}>{chunks}</Link>,
        equLink: (chunks) => <Link href="/services/bureau-equipe-bruxelles" className={linkClass}>{chunks}</Link>,
    },
    cow4: {
        cowLink: (chunks) => <Link href="/services/coworking-bruxelles" className={linkClass}>{chunks}</Link>,
        burLink: (chunks) => <Link href="/services/bureau-individuel-bruxelles" className={linkClass}>{chunks}</Link>,
    },
    svc3: {
        roomLink: (chunks) => <Link href="/services/salle-de-reunion-bruxelles" className={linkClass}>{chunks}</Link>,
    },
    pri3: {
        contactLink: (chunks) => <Link href="/contact" className={linkClass}>{chunks}</Link>,
    },
};

const categories = [
    { key: 'general_dom', icon: Building2, items: ['gen1', 'gen2', 'gen3', 'gen4'] },
    { key: 'docs', icon: FileText, items: ['doc1', 'doc2', 'doc3', 'doc4'] },
    { key: 'address', icon: MapPin, items: ['adr1', 'adr2', 'adr3', 'adr4'] },
    { key: 'services_inc', icon: Package, items: ['svc1', 'svc2', 'svc3', 'svc4'] },
    { key: 'coworking', icon: Wifi, items: ['cow1', 'cow2', 'cow3', 'cow4'] },
    { key: 'pricing', icon: CreditCard, items: ['pri1', 'pri2', 'pri3', 'pri4'] },
] as const;

export default function FAQPage() {
    const t = useTranslations('FAQPage');

    const renderAnswer = (item: string) => {
        const config = richConfigs[item];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return config ? t.rich(`${item}_a`, config as any) : t(`${item}_a`);
    };

    return (
        <main className="min-h-screen flex flex-col bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-[#F8F9FA]">
                <div className="container max-w-4xl text-center">
                    <span className="text-[#E63946] font-semibold tracking-wider uppercase mb-2 block">
                        {t('tag')}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1B] leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-[#6C757D] mb-4 max-w-2xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                    <p className="text-lg text-[#6C757D] max-w-2xl mx-auto leading-relaxed">
                        {t('hero_p')}
                    </p>
                </div>
            </section>

            {/* FAQ Categories */}
            {categories.map(({ key, icon: Icon, items }, catIndex) => {
                const relatedLinks = categoryRelatedLinks[key] ?? [];
                return (
                    <section key={key} className={`py-16 ${catIndex % 2 === 1 ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
                        <div className="container max-w-4xl">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-[#E63946] shrink-0">
                                    <Icon size={24} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1D1D1B]">
                                    {t(`cat_${key}`)}
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {items.map((item) => (
                                    <details key={item} className="bg-white border border-gray-200 rounded-xl group shadow-sm">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-[#1D1D1B] hover:text-[#E63946] transition-colors">
                                            {t(`${item}_q`)}
                                            <ChevronDown size={20} className="shrink-0 ml-4 text-[#6C757D] group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-[#6C757D] leading-relaxed">
                                            {renderAnswer(item)}
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* Internal links */}
                            {relatedLinks.length > 0 && (
                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    <span className="text-sm font-semibold text-[#6C757D] uppercase tracking-wider">
                                        {t('see_also')} :
                                    </span>
                                    {relatedLinks.map(({ labelKey, href }) => (
                                        <Link
                                            key={href}
                                            href={href as Parameters<typeof Link>[0]['href']}
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E63946] hover:underline"
                                        >
                                            <ArrowRight size={14} />
                                            {t(labelKey)}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}

            {/* CTA */}
            <section className="py-20 bg-[#1D1D1B]">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">
                        {t('cta_title')}
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        {t('cta_text')}
                    </p>
                    <Link href="/contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold text-base">
                        {t('cta_btn')}
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
