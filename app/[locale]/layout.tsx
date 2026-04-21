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
      icon: '/favicon.png',
    },
    alternates: generateAlternates(locale, '/'),
    openGraph: {
      title: t('layout_title'),
      description: t('layout_desc'),
      url: `https://www.officefactory.be/${locale}`,
      siteName: 'Office Factory',
      images: [
        {
          url: '/blog-siege-social.jpg',
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
      images: ['/blog-siege-social.jpg'],
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

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const locales = ['fr', 'en', 'nl'];

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <head>
        {/* Preconnect to critical third-party origins to shorten network dependency tree */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://brusselsofficefactory.odoo.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        {/* Google Tag Manager — deferred until after interactive to avoid blocking LCP */}
        <Script
          id="gtm-head"
          strategy="lazyOnload"
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
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
