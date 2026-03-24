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
    metadataBase: new URL('https://www.officefactory.be'),
    icons: {
      icon: '/favicon.webp',
    },
    alternates: generateAlternates(locale, '/'),
    openGraph: {
      title: t('layout_title'),
      description: t('layout_desc'),
      url: `https://www.officefactory.be/${locale}`,
      siteName: 'Office Factory',
      images: [
        {
          url: '/image2.jpg',
          width: 1200,
          height: 630,
          alt: 'Office Factory — Bruxelles',
        },
      ],
      locale: locale === 'fr' ? 'fr_BE' : locale === 'nl' ? 'nl_BE' : 'en',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('layout_title'),
      description: t('layout_desc'),
      images: ['/image2.jpg'],
    },
  };
}

import { Inter } from 'next/font/google'
import './globals.css'

import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import WhatsAppButton from '@/components/WhatsAppButton';

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
    telephone: '+32-471-79-45-52',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
    },
  };

  return (
    <html lang={locale} className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55W3FZSQ');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55W3FZSQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
