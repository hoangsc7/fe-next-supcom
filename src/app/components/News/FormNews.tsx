'use client'
import { Grid } from '@mui/material'
import CardNews from './CardNews'
import { Category, New } from '~/types/new'
import Link from 'next/link'

type Prop = {
  category: Category
  newsList: New[]
}

const FormNews = ({ category, newsList }: Prop) => {
  return (
    <div className='w-full mb-4'>
      {/*<h1 className='text-[20px] md:text-[25px] uppercase p-1'>{category?.name}</h1>
      <hr className=' w-full h-[1px] md:h-[2px] bg-footer border-0 mb-8' />*/}

      <Grid container spacing={{ xs: 1, md: 2.5, lg: 2.5 }} className=''>
        {newsList.slice(0, 8)?.map((news) => (
          <Grid size={{ xs: 6, md: 3, lg: 3 }} key={news.id}>
            <CardNews data={news} />
          </Grid>
        ))}
      </Grid>

      {/*<div className='flex justify-center mt-5'>
        <Link href={`/${locale}/${category?.slug}`}>
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
      </div>*/}
    </div>
  )
}

export default FormNews
