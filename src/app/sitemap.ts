import { MetadataRoute } from 'next'
// import { getAllNews } from '~/lib/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const posts = await getAllNews()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

  const posts = [
    {
      locale: 'vi',
      category: 'thanh-lap-cong-ty',
      slug: 'thanh-lap-doanh-nghiep',
      updatedAt: '2025-11-19'
    }
  ]

  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/${post.locale}/${post.category}/${post.slug}`,
      lastModified: post.updatedAt || new Date()
    }))
  ]
}
