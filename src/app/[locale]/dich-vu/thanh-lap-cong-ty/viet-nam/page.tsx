import { Grid } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thành lập doanh nghiệp trong nước'
}

export default function EstCompany() {
  return (
    <div className=''>
      <div className='flex justify-center pt-[20px] pb-[20px] h-auto'>
        <Grid container sx={{ width: '90%' }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxHeight: '100%'
            }}
          >
            <div>Dich vu thanh lap cong ty</div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
