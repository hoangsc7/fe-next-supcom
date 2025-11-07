import { Grid } from '@mui/material'

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
            <div>hoa don dien tu</div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
