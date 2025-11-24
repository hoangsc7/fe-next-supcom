import { Grid } from '@mui/material'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ChargeCard from '~/app/components/Card/ChargeCard'
import Banner from '~/app/components/Home/Banner'

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
  return (
    <div className='w-full bg-white'>
      <Banner />
      <main className='md:mx-[90px]'>
        {/*  */}
        <div>
          <h1 className='text-xl md:text-3xl text-center font-semibold uppercase mt-10'>
            Chi phí <span className='text-blue-900'>thành lập doanh nghiệp</span> tại Supcom
          </h1>
          <div className='my-3'>
            <ChargeCard />
          </div>
        </div>
        {/*  */}
        <div className='text-center'>
          <h1 className='text-xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5'>
            Tại sao bạn nên chọn Supcom
          </h1>
          <Grid container sx={{ marginTop: '10px' }}>
            <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div className='my-3 max-w-[220px]'>
                <div className='flex justify-center'>
                  <Image src='/icon/professionalism.png' alt='professional' width={100} height={100} />
                </div>
                <h2 className='text-xl text-purple-950 font-bold my-2'>Chuyên nghiệp</h2>
                <span>Đội ngũ tư vấn viên chuyên nhiệp, nhiệt tình.</span>
              </div>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div className='my-3 max-w-[220px]'>
                <div className='flex justify-center'>
                  <Image src='/icon/transparency.png' alt='professional' width={100} height={100} />
                </div>
                <h2 className='text-xl text-purple-950 font-bold my-2'>Minh bạch</h2>
                <span>Quy trình làm việc minh bạch, rõ ràng, tối ưu chi phí.</span>
              </div>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div className='my-3 max-w-[220px]'>
                <div className='flex justify-center'>
                  <Image src='/icon/cyber-security.png' alt='professional' width={100} height={100} />
                </div>
                <h2 className='text-xl text-purple-950 font-bold my-2'>Bảo mật</h2>
                <span>Bảo mật tuyệt đối thông tin khách hàng.</span>
              </div>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
              <div className='my-3 max-w-[220px]'>
                <div className='flex justify-center'>
                  <Image src='/icon/personal-trainer.png' alt='professional' width={100} height={100} />
                </div>
                <h2 className='text-xl text-purple-950 font-bold my-2'>Chuyên sâu</h2>
                <span>Tư vấn chuyên sâu sau thành lập về kế toán thuế, bảo hiểm,...</span>
              </div>
            </Grid>
          </Grid>
          {/* <div>
            <Image src='/img/logo-t.jpg' alt='bg-tech' width={200} height={200} />
            <div className='-translate-y-[190%] translate-x-[5.5%]'>
              <Image src='/img/supcom.png' alt='supcom' width={50} height={50}></Image>
            </div>
          </div> */}
        </div>
        {/*  */}
        <div id='quytrinh' className='my-10'>
          <h1 className='text-2xl text-center font-semibold uppercase mt-5 my-10'>Quy trình làm việc</h1>
          <div className='flex justify-center text-white bg-blue-950 p-10'>
            <div className='w-full'>
              {/* <div className='line-container'>
                <div className='line-fill'></div>
              </div> */}

              <div className='-translate-y-[15px]'>
                {' '}
                <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} spacing={1}>
                  <Grid size={{ xs: 12, md: 2.4 }}>
                    <span className='flex justify-center items-center h-7 w-7 rounded-[50%] bg-[#2595d8]'>1</span>
                    <span>Tiếp nhận & tư vấn giấy tờ thủ tục, loại hình doanh nghiệp, chọn loại hình kinh doanh</span>
                  </Grid>
                  <Grid size={{ xs: 12, md: 2.4 }}>
                    <span className='flex justify-center items-center h-7 w-7 rounded-[50%] bg-[#2595d8]'>2</span>
                    <span>Tiếp nhận & tư vấn giấy tờ thủ tục, loại hình doanh nghiệp, chọn loại hình kinh doanh</span>
                  </Grid>
                  <Grid size={{ xs: 12, md: 2.4 }}>
                    <span className='flex justify-center items-center h-7 w-7 rounded-[50%] bg-[#2595d8]'>3</span>
                    <span>Tiếp nhận & tư vấn giấy tờ thủ tục, loại hình doanh nghiệp, chọn loại hình kinh doanh</span>
                  </Grid>
                  <Grid size={{ xs: 12, md: 2.4 }}>
                    <span className='flex justify-center items-center h-7 w-7 rounded-[50%] bg-[#2595d8]'>4</span>
                    <span>Tiếp nhận & tư vấn giấy tờ thủ tục, loại hình doanh nghiệp, chọn loại hình kinh doanh</span>
                  </Grid>
                  <Grid size={{ xs: 12, md: 2.4 }}>
                    <span className='flex justify-center items-center h-7 w-7 rounded-[50%] bg-[#2595d8]'>5</span>
                    <span>Tiếp nhận & tư vấn giấy tờ thủ tục, loại hình doanh nghiệp, chọn loại hình kinh doanh</span>
                  </Grid>
                </Grid>{' '}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PageNew
