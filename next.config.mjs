// eslint-disable-next-line import/no-extraneous-dependencies
import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer(
  withNextIntlConfig({
    async headers() {
      return [
        {
          // Routes this applies to
          source: '/front/api/:path*',
          // Headers
          // CORS HEADERS
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: '*' }, // замініть це на список довірених доменів, з яких можна зробити запити
            {
              key: 'Access-Control-Allow-Origin',
              value: 'https://admin.astayhome.com',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'OPTIONS,POST',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
          ],
        },
      ];
    },
    experimental: {
      optimizePackageImports: [
        'date-fns',
        '@vis.gl/react-google-maps',
        'next',
        'next-intl',
        'react',
        'react-date-range',
        'react-dom',
        'react-hook-form',
        'react-intersection-observer',
        'react-share',
        'react-spinners',
        'sanitize-html',
        'sharp',
        'swiper',
        'zod',
      ],
    },
    eslint: {
      dirs: ['.'],
    },
    images: {
      remotePatterns: [
        {
          hostname: 'astayhome.com',
        },
      ],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    webpack: (config) => {
      // config.externals is needed to resolve the following errors:
      // Module not found: Can't resolve 'bufferutil'
      // Module not found: Can't resolve 'utf-8-validate'
      config.externals.push({
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      });

      return config;
    },
  }),
);
