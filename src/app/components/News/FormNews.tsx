'use client'
import { Grid } from '@mui/material'
import CardNews from './CardNews'
import { Category, New } from '~/types/new'

type Prop = {
  category: Category
  newsList: New[]
}

const FormNews = ({ newsList }: Prop) => {
  return (
    <div className='w-full mb-4'>
      <Grid container spacing={{ xs: 1, md: 2.5, lg: 2.5 }} className=''>
        {newsList.slice(0, 8)?.map((news) => (
          <Grid size={{ xs: 6, md: 3, lg: 3 }} key={news.id}>
            <CardNews data={news} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FormNews
