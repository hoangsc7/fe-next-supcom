import { Button, Grid } from '@mui/material'
import MainCarousel from '../components/carousel/MainCarousel'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <div className=''>
      <div className='w-full h-full  overflow-hidden'>
        <MainCarousel />
      </div>
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
          <Grid size={{ xs: 12, md: 6 }} sx={{ alignContent: 'center', padding: '16px' }}>
            <div className='space-y-4'>
              <span className='text-red-700 text-xl uppercase font-bold'>Về chúng tôi</span>
              <h2 className='text-gray-900 uppercase text-3xl font-bold mt-4'>
                CÔNG TY TNHH XÚC TIẾN ĐẦU TƯ THƯƠNG MẠI SUPCOM VIỆT NAM
              </h2>
              <p className='text-gray-700 text-justify'></p>
            </div>

            <Grid size={{ xs: 6, sm: 6 }} className='mt-12'>
              <Button
                sx={{
                  width: '100%',
                  height: '60px',
                  fontSize: '18px',
                  borderRadius: '10px'
                }}
                variant='contained'
                color='success'
                // onClick={() => handleOpen()}
              >
                Liên hệ
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
