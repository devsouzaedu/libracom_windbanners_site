import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/_next/'],
    },
    sitemap: 'https://www.libracomwindbanner.com.br/sitemap.xml',
    host: 'https://www.libracomwindbanner.com.br',
  }
}
