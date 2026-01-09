import BannerTLDN from '~/components/Thanhlapcongty/Banner_tlct'
import ChargeCard from '~/components/Thanhlapcongty/ChargeCard'
import StepTLCT from '~/components/Thanhlapcongty/SectionStepTLCT'
import SectionServiceCard from '~/components/Thanhlapcongty/SectionServiceCard'
import FormNews from '~/components/News/FormNews'
import { NewsData } from '~/components/News/NewsData'
import { New } from '~/types/new'
import SectionPrepare from '~/components/Thanhlapcongty/SectionPrepare'
import SectionSauTL from '~/components/Thanhlapcongty/SectionSauTL'
import { Metadata } from 'next'

// type Props = {
//   params: Promise<{ locale: string; category: string; newSlug: string }>
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { locale, category, newSlug } = await params

//   // Fetch data bài viết từ API/database
//   // const article = await fetchArticle(news, locale)
//   const article = {
//     title: 'Dich vu thanh lap cong ty',
//     description:
//       'Phí thành lập công ty trọn gói là 1.000.000đ. Bao gồm 250.000đ phí dịch vụ và 750.000đ phí nhà nước. Chỉ trong 3 ngày doanh nghiệp có GPKD.',
//     image: ''
//   }

//   return {
//     title: article.title, // title new - Supcom Việt Nam"
//     description: article.description,
//     openGraph: {
//       title: article.title,
//       description: article.description,
//       images: [article.image],
//       type: 'article',
//       locale: locale
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: article.title,
//       description: article.description,
//       images: [article.image]
//     },
//     alternates: {
//       canonical: `https://supcom.vn/${locale}/${category}/${newSlug}`
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true
//       }
//     }
//   }
// }

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Chi phí thành lập doanh nghiệp trọn gói',
    description: 'Thành lập công ty trọn gói chỉ từ 1.190.000đ, hoàn thiện 3–5 ngày.',
    openGraph: {
      title: 'Chi phí thành lập doanh nghiệp trọn gói',
      description: 'Dịch vụ thành lập công ty uy tín'
    }
  }
}

const PageNew = async () => {
  const data: New[] = NewsData.slice(0, 4)

  return (
    <div className='w-full bg-white'>
      <BannerTLDN />
      <main className='md:mx-[90px]'>
        {/* chi phi */}
        <section>
          <h1 className='text-2xl md:text-3xl text-center font-semibold uppercase mt-10'>
            <span className='text-blue-900'>Chi phí thành lập doanh nghiệp</span>
          </h1>
          <div className='my-3'>
            <ChargeCard />
          </div>
        </section>

        {/* dich vu thanh lap cong */}
        <section className='my-5'>
          <SectionServiceCard />
        </section>

        {/* chuan bi */}
        <section className='py-16 bg-[#f2f6ff]'>
          <h2 className='text-center text-2xl md:text-3xl uppercase font-semibold mb-10 text-blue-900'>
            BẠN CẦN CHUẨN BỊ NHỮNG GÌ ?
          </h2>
          <SectionPrepare />
        </section>

        {/* quy trinh */}
        <section className='my-3'>
          <StepTLCT />
        </section>

        {/*sau khi thanh lap*/}
        <section>
          <SectionSauTL />
        </section>

        {/* <section>
          <h1 className='text-purple-950 text-xl md:text-3xl font-semibold uppercase p-1'>Tin tức liên quan</h1>
          <hr className=' w-full h-px md:h-0.5 bg-footer border-0 mb-8' />
          <FormNews newsList={data} />
        </section> */}

        {/* lien he */}
        {/*<div className='flex justify-center'>
          <FormContact />
        </div>*/}
      </main>
    </div>
  )
}

export default PageNew
