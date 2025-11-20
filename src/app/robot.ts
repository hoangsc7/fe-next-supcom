// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api']
    },
    sitemap: 'https://supcom.vn/sitemap.xml',
    host: 'https://supcom.vn'
  }
}
