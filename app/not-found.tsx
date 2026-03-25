'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const translations = {
    fr: {
        title: 'Page introuvable',
        message:
            "La page que vous recherchez n'existe pas ou a été déplacée. Pas d'inquiétude, nous allons vous aider à retrouver votre chemin.",
        cta_home: "Retour à l'accueil",
        cta_contact: 'Contactez-nous',
        cta_services: 'Nos services',
        services_path: '/fr/nos-services',
    },
    en: {
        title: 'Page not found',
        message:
            "The page you are looking for does not exist or has been moved. Don't worry, we'll help you find your way.",
        cta_home: 'Back to homepage',
        cta_contact: 'Contact us',
        cta_services: 'Our services',
        services_path: '/en/our-services',
    },
    nl: {
        title: 'Pagina niet gevonden',
        message:
            'De pagina die u zoekt bestaat niet of is verplaatst. Geen zorgen, wij helpen u de juiste weg te vinden.',
        cta_home: 'Terug naar de startpagina',
        cta_contact: 'Neem contact op',
        cta_services: 'Onze diensten',
        services_path: '/nl/onze-diensten',
    },
};

type Locale = keyof typeof translations;

function getLocaleFromPath(pathname: string | null): Locale {
    if (!pathname) return 'fr';
    const segment = pathname.split('/')[1];
    if (segment === 'en' || segment === 'nl') return segment;
    return 'fr';
}

export default function RootNotFound() {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const t = translations[locale];

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.webp" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
                <div
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F8F9FA',
                        textAlign: 'center',
                        padding: '2rem',
                    }}
                >
                    <div>
                        <p
                            style={{
                                fontSize: 'clamp(6rem, 15vw, 9rem)',
                                fontWeight: 900,
                                color: '#E63946',
                                margin: '0 0 1rem',
                                lineHeight: 1,
                            }}
                        >
                            404
                        </p>
                        <h1
                            style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                                fontWeight: 700,
                                color: '#1D1D1B',
                                margin: '0 0 1rem',
                            }}
                        >
                            {t.title}
                        </h1>
                        <p
                            style={{
                                fontSize: '1.1rem',
                                color: '#6C757D',
                                margin: '0 auto 2.5rem',
                                maxWidth: '32rem',
                                lineHeight: 1.6,
                            }}
                        >
                            {t.message}
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Link
                                href={`/${locale}`}
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#E63946',
                                    color: 'white',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                }}
                            >
                                {t.cta_home}
                            </Link>
                            <Link
                                href={`/${locale}/contact`}
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#1D1D1B',
                                    color: 'white',
                                    padding: '0.75rem 2rem',
                                    borderRadius: '9999px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                }}
                            >
                                {t.cta_contact}
                            </Link>
                            <Link
                                href={t.services_path}
                                style={{
                                    color: '#E63946',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                }}
                            >
                                {t.cta_services} →
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
