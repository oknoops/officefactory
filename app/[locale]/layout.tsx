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
    title: t('layout_title'),
    description: t('layout_desc'),
    icons: {
      icon: '/favicon.webp',
    },
    alternates: generateAlternates(locale, '/'),
  };
}

import { Inter } from 'next/font/google'
import './globals.css'

import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

const locales = ['fr', 'en', 'nl'];

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  console.log('RootLayout received locale parameter:', locale);

  if (!locales.includes(locale)) {
    console.log('RootLayout triggering notFound for locale:', locale);
    notFound();
  }

  const messages = await getMessages();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Office Factory',
    image: 'https://www.officefactory.be/logo.webp',
    '@id': 'https://www.officefactory.be',
    url: 'https://www.officefactory.be',
    telephone: '+32-2-331-04-74',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '842 Chaussée d\'Alsemberg',
      addressLocality: 'Uccle',
      postalCode: '1180',
      addressRegion: 'Brussels',
      addressCountry: 'BE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.7935,
      longitude: 4.3440,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
  };

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-E70BV0BQBS"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E70BV0BQBS');
          `}
          </Script>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
