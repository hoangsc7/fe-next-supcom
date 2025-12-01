import BannerTLDN from '~/components/Thanhlapcongty/Banner_tlct'
import ChargeCard from '~/components/Thanhlapcongty/ChargeCard'
import FormContact from '~/components/Form/FormContact'
import StepTLCT from '~/components/Thanhlapcongty/SectionStepTLCT'
import SectionServiceCard from '~/components/Thanhlapcongty/SectionServiceCard'
import NewsTL from '~/components/Thanhlapcongty/NewsTL'
import PopupContact from '~/components/Form/PopupContact'
import FormNews from '~/components/News/FormNews'
import { NewsData } from '~/components/News/NewsData'
import { New } from '~/types/new'

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

const PageNew = async () => {
  const data: New[] = NewsData.slice(0, 4)

  return (
    <div className='w-full bg-white'>
      <BannerTLDN />
      <main className='md:mx-[90px]'>
        {/* chi phi */}
        <section>
          <h1 className='text-2xl md:text-3xl text-center font-semibold uppercase mt-10'>
            Chi phí <span className='text-blue-900'>thành lập doanh nghiệp</span> tại Supcom
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
          <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4'>
            <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
              <div className='shape-wrap w-12 h-[100px] mr-1'>
                <div
                  className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
                  style={{ textShadow: '2px 2px 0px #1e3a8a' }}
                >
                  1
                </div>
              </div>

              <h5 className='font-semibold text-lg mt-3'>Chuẩn bị tên công ty</h5>

              <p className='text-gray-700 text-sm text-justify'>
                Tên công ty là yếu tố liên quan đến việc nhận diện thương hiệu của doanh nghiệp sau này. Khi đặt tên
                công ty bạn nên đặt tên ngắn gọn, dễ nhớ, dễ phát âm, tránh trùng lặp với các công ty đã thành lập trước
                đó. Để xác định xem có bị trùng với công ty khác không, bạn có thể truy câp vào đây để tra cứu.
              </p>
            </div>
            <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
              <div className='shape-wrap w-16 h-[100px] mr-1'>
                <div
                  className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
                  style={{ textShadow: '2px 2px 0px #1e3a8a' }}
                >
                  2
                </div>
              </div>

              <h5 className='font-semibold text-lg mt-3'>Chuẩn bị CCCD/Hộ chiếu</h5>

              <p className='text-gray-700 text-sm text-justify'>
                Bạn vui lòng chuẩn bị Căn cước công dân hoặc Hộ chiếu của Đại diện pháp luật và Thành viên góp vốn (nếu
                có).
              </p>
            </div>
            <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
              <div className='shape-wrap w-16 h-[100px] mr-1'>
                <div
                  className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
                  style={{ textShadow: '2px 2px 0px #1e3a8a' }}
                >
                  3
                </div>
              </div>

              <h5 className='font-semibold text-lg mt-3'>Xác định loại hình công ty, ngành nghề đăng ký</h5>

              <p className='text-gray-700 text-sm text-justify'>
                Loại hình doanh nghiệp và nghành nghề đăng ký là yếu tố quan trọng mà bạn cần nắm vững. Chủ doanh nghiệp
                cần hiểu rõ đặc điểm của từng loại hình doanh nghiệp để có thể xác định và lựa chọn loại hình doanh
                nghiệp phù hợp nhất với định hướng phát triển của công ty. Đồng thời bạn cũng cần xác định các ngành
                nghề kinh doanh mà công ty sẽ hoạt động trong thời gian tới.
              </p>
            </div>
            <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
              <div className='shape-wrap w-16 h-[100px] mr-1'>
                <div
                  className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
                  style={{ textShadow: '2px 2px 0px #1e3a8a' }}
                >
                  4
                </div>
              </div>

              <h5 className='font-semibold text-lg mt-3'>Địa điểm đặt trụ sở công ty</h5>

              <p className='text-gray-700 text-sm text-justify'>
                Xác định địa chỉ trụ sở thuộc quyền sử dụng hợp pháp của công ty. Trụ sở của doanh nghiệp và địa điểm
                liên lạc của doanh nghiệp trên lãnh thổ Việt Nam, có địa chỉ được xác định gồm số nhà, ngách, hẻm, ngõ
                phố, phố, đường hoặc thôn, xóm, ấp, xã, phường, thành phố trực thuộc trung ương, số điện thoại, thư điện
                tử (nếu có).
              </p>
            </div>
            <div className='relative bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden'>
              <div className='shape-wrap w-16 h-[100px] mr-1'>
                <div
                  className='absolute text-[100px] text-blue-500 font-extrabold leading-none select-none'
                  style={{ textShadow: '2px 2px 0px #1e3a8a' }}
                >
                  5
                </div>
              </div>

              <h5 className='font-semibold text-lg mt-3'>Xác định vốn điều lệ</h5>

              <p className='text-gray-700 text-sm text-justify'>
                Vốn điều lệ là số vốn do các thành viên, cố đông góp hoặc cam kết góp đủ trong một thời gian nhất
                định(không quá 90 ngày kể từ ngày được cấp phép hoạt động) và được ghi vào điều lệ công ty. Lưu ý mức
                thuế môn bài hàng năm mà công ty phải đóng được xác định dựa trên mức vốn điều lệ của công ty.
              </p>
            </div>
          </div>
        </section>

        {/* quy trinh */}
        <section className='my-3'>
          <StepTLCT />
        </section>

        <section>
          <h1 className='text-purple-950 text-xl md:text-3xl font-semibold uppercase p-1'>Tin tức liên quan</h1>
          <hr className=' w-full h-px md:h-0.5 bg-footer border-0 mb-8' />
          <FormNews newsList={data} />
        </section>

        {/* lien he */}
        <div className='flex justify-center'>
          <FormContact />
        </div>
      </main>
      <PopupContact autoOpen delay={1000} />
    </div>
  )
}

export default PageNew
