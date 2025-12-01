import { Box, Grid } from '@mui/material'
import CardNews from './CardNews'

const OutStandNews = () => {
  return (
    <div className='bg-gray-100 border border-gray-300 '>
      {/*<h1 className='uppercase p-5'>noi bat</h1>
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 2.4 }} sx={{ background: 'white' }}>
            <div>1</div>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ background: 'white' }}>
            <div>1</div>
          </Grid>
          <Grid size={{ xs: 12, md: 2.4 }} sx={{ background: 'white' }}>
            <div>1</div>
          </Grid>
        </Grid>
      </div>*/}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        {/* TIÊU ĐỀ */}
        <Box textAlign='start' mb={4} fontSize='1.5rem' fontWeight={600} className='uppercase'>
          Dich vu thanh lap doanh nghiep noi bat
        </Box>

        <Grid container spacing={2}>
          {/* CỘT TRÁI */}
          <Grid size={{ xs: 12, md: 2.7 }} display='flex' flexDirection='column' gap={1} sx={{ background: 'white' }}>
            <Box className=''>Item 1</Box>
            <Box className=''>Item 2</Box>
          </Grid>

          {/* CỘT GIỮA – BANNER LỚN */}
          <Grid size={{ xs: 12, md: 6.6 }} sx={{ background: 'white' }}>
            <Box className=''>Item big</Box>
          </Grid>

          {/* CỘT PHẢI */}
          <Grid size={{ xs: 12, md: 2.7 }} display='flex' flexDirection='column' gap={1} sx={{ background: 'white' }}>
            <Box className=''>Item nhỏ 3</Box>
            <Box className=''>Item nhỏ 4</Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default OutStandNews
