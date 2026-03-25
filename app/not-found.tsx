'use client';

import Link from 'next/link';

export default function RootNotFound() {
    return (
        <html lang="fr">
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
                                fontSize: '8rem',
                                fontWeight: 'bold',
                                color: '#E63946',
                                margin: '0 0 1rem',
                                lineHeight: 1,
                            }}
                        >
                            404
                        </p>
                        <h1
                            style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#1D1D1B',
                                margin: '0 0 1rem',
                            }}
                        >
                            Page introuvable
                        </h1>
                        <p
                            style={{
                                fontSize: '1.1rem',
                                color: '#6C757D',
                                margin: '0 0 2.5rem',
                                maxWidth: '28rem',
                            }}
                        >
                            La page que vous recherchez n&apos;existe pas ou a été déplacée.
                        </p>
                        <Link
                            href="/fr"
                            style={{
                                display: 'inline-block',
                                backgroundColor: '#E63946',
                                color: 'white',
                                padding: '0.75rem 2rem',
                                borderRadius: '9999px',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            Retour à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
