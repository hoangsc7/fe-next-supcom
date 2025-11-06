import { Button, Grid } from '@mui/material'
import MainCarousel from '../components/carousel/MainCarousel'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className=''>
      <div className='w-full h-full  overflow-hidden bg-footer'>{/*<MainCarousel />*/}</div>
      <div className='flex justify-center pt-[20px] pb-[20px] h-auto'>
        <Grid container sx={{ width: '90%' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxHeight: '100%'
            }}
          ></Grid>
        </Grid>
      </div>
    </div>
  )
}
