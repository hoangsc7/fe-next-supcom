'use client'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { initFadeIn } from '~/hook/Animation'

// const boxVariantTopToBot = {
//   hidden: { opacity: 0, y: -100 },
//   visible: { opacity: 1, y: 0 }
// }
// const boxVariantLeftToRight = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0 }
// }
// const boxVariantRightToLeft = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0 }
// }

const SectionServiceCard = () => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => initFadeIn())
    } else {
      setTimeout(initFadeIn, 200)
    }
  }, [])
  return (
    <div>
      <h1 className='text-purple-950 text-2xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5 mx-5'>
        các loại hình doanh nghiệp
      </h1>
      <Grid container spacing={3}>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <div className='fade fade-left-to-right text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
            <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty TNHH 1 thành viên</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5 text-blue-500'>
              <Link href={'/thanh-lap-cong-ty/thanh-lap-cty-tnhh-1tv'}>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <div className='fade fade-right-to-left text-center w-full h-full rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
            <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty TNHH 2 thành viên</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5 text-blue-500'>
              <Link href={'/thanh-lap-cong-ty/thanh-lap-cty-tnhh-2tv'}>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <div className='fade fade-left-to-right text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
            <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty cổ phần</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5 text-blue-500'>
              <Link href={'/thanh-lap-cong-ty/thanh-lap-cty-cp'}>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            height: '100%',
            borderRadius: '10px',
            paddingInline: '14px'
          }}
        >
          <div className='fade fade-right-to-left text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
            <h2 className='font-semibold md:text-xl text-center'>Thành lập hợp tác xã</h2>
            <span>Hỗ trợ thành lập từ A-Z</span> <br />
            <span>Không phát sinh chi phí</span>
            <div className='mt-5 text-blue-500'>
              <Link href={'/thanh-lap-cong-ty/thanh-lap-htx'}>
                Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
              </Link>{' '}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SectionServiceCard
