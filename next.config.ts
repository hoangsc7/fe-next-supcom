import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'supcom.vn',
        port: '',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  }
}

export default withNextIntl(nextConfig)
