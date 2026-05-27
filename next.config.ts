import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  // Tree-shake lucide-react so only the icons we import ship in the bundle
  // (the default barrel import pulls in ~1000 icons → ~60 KiB of legacy JS)
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      preventFullImport: true,
    },
  },
  async redirects() {
    return [
      // Fix double-locale-prefix URLs detected by Google Search Console
      {
        source: '/:locale(fr|en|nl)/:locale2(fr|en|nl)/:path*',
        destination: '/:locale2/:path*',
        permanent: true,
      },

      // Retired blog post on the Belgian domiciliation law — redirect to the
      // legal-framework section of the new pillar guide.
      // Each locale slug can be reached from any locale prefix, so we handle
      // the cross-locale combinations Google has indexed.
      {
        source: '/fr/blog/domiciliation-entreprise-loi-belgique',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/fr/blog/belgian-law-company-domiciliation',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/fr/blog/belgische-wet-domiciliering-bedrijven',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/en/blog/belgian-law-company-domiciliation',
        destination: '/en/guide-domiciliation-brussels#legal-framework',
        permanent: true,
      },
      {
        source: '/en/blog/domiciliation-entreprise-loi-belgique',
        destination: '/en/guide-domiciliation-brussels#legal-framework',
        permanent: true,
      },
      {
        source: '/en/blog/belgische-wet-domiciliering-bedrijven',
        destination: '/en/guide-domiciliation-brussels#legal-framework',
        permanent: true,
      },
      {
        source: '/nl/blog/belgische-wet-domiciliering-bedrijven',
        destination: '/nl/gids-domiciliering-brussel#legal-framework',
        permanent: true,
      },
      {
        source: '/nl/blog/belgian-law-company-domiciliation',
        destination: '/nl/gids-domiciliering-brussel#legal-framework',
        permanent: true,
      },
      {
        source: '/nl/blog/domiciliation-entreprise-loi-belgique',
        destination: '/nl/gids-domiciliering-brussel#legal-framework',
        permanent: true,
      },

      // Short legacy slug /domiciliation → service page (per locale).
      // /domiciliering is the historical NL variant.
      {
        source: '/fr/domiciliation',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },
      {
        source: '/en/domiciliation',
        destination: '/en/services/domiciliation-brussels',
        permanent: true,
      },
      {
        source: '/nl/domiciliation',
        destination: '/nl/diensten/domiciliering-brussel',
        permanent: true,
      },
      {
        source: '/fr/domiciliering',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },
      {
        source: '/en/domiciliering',
        destination: '/en/services/domiciliation-brussels',
        permanent: true,
      },
      {
        source: '/nl/domiciliering',
        destination: '/nl/diensten/domiciliering-brussel',
        permanent: true,
      },

      // Legacy short service URLs reported as 404 by Ahrefs (links inside
      // Sanity blog content, e.g. "Découvrir notre service de domiciliation").
      // The middleware rewrites /services/domiciliation → /fr/services/domiciliation
      // which has no matching route, so the chain ends in 404.
      {
        source: '/fr/services/domiciliation',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },
      {
        source: '/en/services/domiciliation',
        destination: '/en/services/domiciliation-brussels',
        permanent: true,
      },
      {
        source: '/nl/services/domiciliation',
        destination: '/nl/diensten/domiciliering-brussel',
        permanent: true,
      },
      {
        source: '/nl/diensten/domiciliering',
        destination: '/nl/diensten/domiciliering-brussel',
        permanent: true,
      },
      {
        source: '/services/domiciliation',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },

      // Locale-less variants reported as 404. Without these, requests would
      // hit the next-intl middleware, get rewritten to the default locale,
      // and only then hit the redirects above (two-hop chain).
      // We map them directly to the default-locale (FR) destinations.
      {
        source: '/blog/belgian-law-company-domiciliation',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/blog/belgische-wet-domiciliering-bedrijven',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/blog/domiciliation-entreprise-loi-belgique',
        destination: '/fr/guide-domiciliation-bruxelles#legal-framework',
        permanent: true,
      },
      {
        source: '/domiciliation',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },
      {
        source: '/domiciliering',
        destination: '/fr/services/domiciliation-bruxelles',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Long-cache static build assets (hashed filenames)
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Long-cache next/image optimized assets
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache static images/fonts in /public for 1 year
        source: '/:path*.(jpg|jpeg|png|webp|avif|svg|ico|gif|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
