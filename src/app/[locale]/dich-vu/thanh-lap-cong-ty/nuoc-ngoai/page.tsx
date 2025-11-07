import { Grid } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thành lập doanh nghiệp có vốn đầu tư nước ngoài'
}

export default function EstCompanyWorld() {
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
            <div>Thành lập doanh nghiệp có vốn đầu tư nước ngoài</div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
