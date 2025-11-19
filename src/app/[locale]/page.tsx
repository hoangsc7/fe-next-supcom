import { Button, Grid } from '@mui/material'
import { getTranslations } from 'next-intl/server'
import { New } from '~/types/new'
import FormNews from '../components/News/FormNews'
import { EmblaCarousel } from '../components/carousel/MainCarousel'
import { NewsData } from '../components/News/NewsData'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const data: New[] = NewsData

  const t = await getTranslations('home')

  const groupedByCategory = data.reduce((acc: Record<string, { category: New['category']; newsList: New[] }>, cur) => {
    const categoryId = cur.category.id
    if (!acc[categoryId]) {
      acc[categoryId] = {
        category: cur.category,
        newsList: []
      }
    }
    acc[categoryId].newsList.push(cur)
    return acc
  }, {})

  return (
    <>
      <div className='w-full flex justify-center'>
        <div className=' w-full max-w-[1150px] bg-white '>
          <div className='h-auto'>
            <EmblaCarousel />
          </div>

          {/*About*/}
          <div className=' p-3 md:p-6  '>
            <div className='font-bold text-2xl uppercase text-shadow text-purple-900 '>
              <h1>Công ty tnhh xúc tiến đầu tư thương mại Supcom Việt Nam</h1>
            </div>
            <span className='text-xl md:text-3xl text-shadow'>
              Tư vấn pháp lý, thành lập công ty, hộ kinh doanh
              <br /> Dịch vụ chữ ký số, hóa đơn điện tử, bảo hiểm xã hội,...
            </span>
          </div>
          <div className=' p-3 md:p-6 '>
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
                    <h1 className='text-[20px] md:text-[25px] uppercase p-1'>{category?.name}</h1>
                    <hr className=' w-full h-[1px] md:h-[2px] bg-footer border-0 mb-8' />
                    <FormNews category={category} newsList={newsList} />
                    <div className='flex justify-center mt-5'>
                      <Link href={`/${category?.slug}`}>
                        <Button
                          sx={{
                            border: '1px solid #0091e0',
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
                ))}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}
