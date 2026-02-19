export const metadata = {
  title: 'Office Factory - Un cadre flexible pour un travail flexible',
  description: 'Bureaux privatifs et espaces partagés, qui s’adaptent à votre rythme à Bruxelles.',
}

import { Inter } from 'next/font/google'
import './globals.css'

import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
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
      </body>
    </html>
  )
}
