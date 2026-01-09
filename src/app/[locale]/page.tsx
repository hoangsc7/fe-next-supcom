import { Button, Grid } from '@mui/material'
// import { getTranslations } from 'next-intl/server'
import { New } from '~/types/new'
import FormNews from '../../components/News/FormNews'
import { NewsData } from '../../components/News/NewsData'
import Link from 'next/link'
import { Metadata } from 'next'
import Banner from '../../components/Home/Banner'
import Image from 'next/image'
import { EmblaCarousel } from '~/components/carousel/MainCarousel'
import ServiceSection from '~/components/Home/ServiceSection'

export const metadata: Metadata = {
  title: 'Dịch vụ thành lập doanh nghiệp và tư vấn pháp lý'
}

export default async function Home() {
  // const t = await getTranslations('home')

  const data: New[] = NewsData.slice(0, 4).map((news) => ({
    ...news
  }))

  // console.log('data', data)

  // const groupedByCategory = NewsData.reduce(
  //   (acc: Record<string, { category: New['category']; newsList: New[] }>, cur) => {
  //     const categoryId = cur.category.id
  //     if (!acc[categoryId]) {
  //       acc[categoryId] = {
  //         category: cur.category,
  //         newsList: []
  //       }
  //     }
  //     acc[categoryId].newsList.push(cur)
  //     return acc
  //   },
  //   {}
  // )

  return (
    <>
      <div className='w-full'>
        <Banner />
        <div className=' w-full bg-white flex justify-center '>
          {/* Body */}
          <div className='max-w-[1170px]'>
            {/* gioi thieu */}
            <div className='p-3 md:p-6 text-center'>
              <div className='font-bold text-3xl uppercase text-shadow text-purple-900 '>
                <h1>Công ty tnhh xúc tiến đầu tư thương mại Supcom Việt Nam</h1>
              </div>
              <span className='text-xl md:text-2xl text-shadow'>
                Tư vấn pháp lý, thành lập công ty, hộ kinh doanh. Dịch vụ chữ ký số, hóa đơn điện tử, bảo hiểm xã
                hội,...
              </span>
            </div>

            {/* cac dich vu */}
            {/*<div>
              <h1 className='text-purple-950 text-xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5 mx-5'>
                Các dịch vụ chúng tôi cung cấp
              </h1>
              <Grid container spacing={3}>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '190px',
                    borderRadius: '10px',
                    paddingInline: '14px'
                  }}
                >
                  <div className='text-center w-full md:w-[48%] h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
                    <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty trọn gói</h2>
                    <span>Hỗ trợ thành lập từ A-Z</span> <br />
                    <span>Không phát sinh chi phí</span>
                    <div className='mt-5'>
                      <Link href={'/#charge'}>
                        Đăng ký nhận tư vấn <ArrowForward fontSize='small' />
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    height: '190px',
                    borderRadius: '10px',
                    paddingInline: '14px'
                  }}
                >
                  <div className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
                    <h2 className='font-semibold md:text-xl text-center'>Tư vấn giấy phép</h2>
                    <span>Hỗ trợ thành lập từ A-Z</span> <br />
                    <span>Không phát sinh chi phí</span>
                    <div className='mt-5'>
                      <Link href={'/thanh-lap-cong-ty'}>
                        Đăng ký nhận tư vấn <ArrowForward fontSize='small' />
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    height: '190px',
                    borderRadius: '10px',
                    paddingInline: '14px'
                  }}
                >
                  <div className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
                    <h2 className='font-semibold md:text-xl text-center'>Kê toán thuế</h2>
                    <span>Hỗ trợ thành lập từ A-Z</span> <br />
                    <span>Không phát sinh chi phí</span>
                    <div className='mt-5'>
                      <Link href={'/thanh-lap-cong-ty'}>
                        Đăng ký nhận tư vấn <ArrowForward fontSize='small' />
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    height: '190px',
                    borderRadius: '10px',
                    paddingInline: '14px'
                  }}
                >
                  <div className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
                    <h2 className='font-semibold md:text-xl text-center'>Thay đổi giấy phép kinh doanh</h2>
                    <span>Hỗ trợ thành lập từ A-Z</span> <br />
                    <span>Không phát sinh chi phí</span>
                    <div className='mt-5'>
                      <Link href={'/thanh-lap-cong-ty'}>
                        Đăng ký nhận tư vấn <ArrowForward fontSize='small' />
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    height: '190px',
                    borderRadius: '10px',
                    paddingInline: '14px'
                  }}
                >
                  <div className='text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
                    <h2 className='font-semibold md:text-xl text-center'>Phần mềm</h2>
                    <span>Hỗ trợ thành lập từ A-Z</span> <br />
                    <span>Không phát sinh chi phí</span>
                    <div className='mt-5'>
                      <Link href={'/thanh-lap-cong-ty'}>
                        Đăng ký nhận tư vấn <ArrowForward fontSize='small' />
                      </Link>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>*/}
            <ServiceSection />

            {/* tai sao ban nen chon Supcom */}
            <div className='text-center p-2'>
              <h1 className='text-purple-950 text-xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5'>
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
            </div>

            {/* formNew 1 */}
            {/* <div className=' p-3 md:p-6 '>
              <Grid container>
                <Grid
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '100%'
                  }}
                >
                  {Object.entries(groupedByCategory).map(([categoryId, { category, newsList }]) => (
                    <Grid key={categoryId} className='mb-10'>
                      <h1 className='text-[20px] md:text-[25px] uppercase p-1'>{category?.title}</h1>
                      <hr className=' w-full h-px md:h-0.5 bg-footer border-0 mb-8' />
                      <FormNews category={category} newsList={newsList} />
                      <div className='flex justify-center mt-5'>
                        <Link href={`/${category?.slug}`}>
                          <Button
                            sx={{
                              border: '1px solid #0091e0',
                              background: '#0091e0',
                              color: 'white',
                              padding: '5px 15px',
                              borderRadius: '4px',
                              hover: ''
                            }}
                          >
                            <span className='font-sans'>Xem thêm</span>
                          </Button>
                        </Link>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </div> */}

            {/* chia se cua khach hang */}
            <div>
              <h1 className='text-purple-950 text-xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5 mx-5'>
                Chia sẻ của khách hàng sử dụng dịch vụ
              </h1>
              <EmblaCarousel />
            </div>

            {/* tin tuc */}
            <div className=' p-3 md:p-6 '>
              <Grid container>
                <Grid
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '100%'
                  }}
                >
                  <Grid className='mb-10'>
                    <h1 className='text-purple-950 text-xl md:text-3xl font-semibold uppercase p-1'>Tin tức</h1>
                    <hr className=' w-full h-px md:h-0.5 bg-footer border-0 mb-8' />
                    <FormNews newsList={data} />
                    <div className='flex justify-center mt-5'>
                      <Link href={`/`}>
                        <Button
                          sx={{
                            background: '#0091e0',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '4px'
                          }}
                        >
                          <span className='font-sans'>Xem thêm</span>
                        </Button>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        {/*<div className=' flex justify-center '>
          <FormContact />
        </div>*/}
        {/*<HomeClient />*/}
      </div>
    </>
  )
}
