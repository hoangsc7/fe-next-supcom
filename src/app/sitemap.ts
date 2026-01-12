import { MetadataRoute } from 'next'
// import { getAllNews } from '~/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getAllNews()
  const posts = [
    {
      locale: 'vi',
      category: 'thanh lap cong ty, doanh nghiep',
      slug: 'thanh-lap-doanh-nghiep',
      updatedAt: '2025-11-19'
    }
  ]

  return [
    {
      url: 'https://supcom.vn',
      lastModified: new Date()
    },
    ...posts.map((post) => ({
      url: `https://supcom.vn/${post.locale}/${post.category}/${post.slug}`,
      lastModified: post.updatedAt || new Date()
    }))
  ]
}
