import { MetadataRoute } from 'next'
import { cities, products, SITE_URL } from './lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  })

  return [
    page('/', 1),
    ...products.filter((p) => p.slug !== '/').map((p) => page(p.slug, 0.9)),
    page('/wind-banner-barueri', 0.9),
    ...cities.map((c) => page(`/wind-banner/${c.slug}`, 0.8)),
    page('/entrega-rapida-24h', 0.8),
    page('/wind-banner-personalizado-eventos', 0.8),
    page('/wind-banner-vs-bandeira-comum', 0.6),
  ]
}
