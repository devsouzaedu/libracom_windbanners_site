import { MetadataRoute } from 'next'
import { SITE_URL } from './lib/site'

// Não bloqueie /_next/: o Google precisa do CSS, JS e das imagens otimizadas (/_next/image) para renderizar a página.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
