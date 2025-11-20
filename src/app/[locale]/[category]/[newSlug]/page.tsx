import { Metadata } from 'next'

type Props = {
  params: Promise<{ locale: string; category: string; newSlug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category, newSlug } = await params

  // Fetch data bài viết từ API/database
  // const article = await fetchArticle(news, locale)
  const article = {
    title: 'Dich vu thanh lap cong ty',
    description:
      'Phí thành lập công ty trọn gói là 1.000.000đ. Bao gồm 250.000đ phí dịch vụ và 750.000đ phí nhà nước. Chỉ trong 3 ngày doanh nghiệp có GPKD.',
    image: ''
  }

  return {
    title: article.title, // title new - Supcom Việt Nam"
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
      type: 'article',
      locale: locale
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.image]
    },
    alternates: {
      canonical: `https://supcom.vn/${locale}/${category}/${newSlug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    }
  }
}

const PageNew = async () => {
  return <div className='w-full max-w-[1170px] bg-white p-1 md:p-5'></div>
}

export default PageNew
