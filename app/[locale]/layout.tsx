import { getTranslations } from 'next-intl/server';

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

  return (
    <html lang={locale} className={inter.className}>
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
