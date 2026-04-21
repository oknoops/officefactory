import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  async redirects() {
    // Fix double-locale-prefix URLs detected by Google Search Console
    return [
      {
        source: '/:locale(fr|en|nl)/:locale2(fr|en|nl)/:path*',
        destination: '/:locale2/:path*',
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
    ],
  },
};

export default withNextIntl(nextConfig);
