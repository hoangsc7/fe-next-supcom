'use client'

import { Button, Grid } from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useEffect } from 'react'
import { initFadeIn } from '~/hook/Animation'

export default function ServiceSection() {
  useEffect(() => {
    initFadeIn()
  }, [])
  return (
    <>
      <div>
        <h1 className='text-purple-950 text-xl md:text-3xl text-center font-semibold uppercase mt-10 mb-5 mx-5'>
          Các dịch vụ chúng tôi cung cấp
        </h1>
        <Grid container spacing={3}>
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              height: '190px',
              borderRadius: '10px',
              paddingInline: '14px'
            }}
          >
            <div className='fade fade-up-to-down text-center w-full md:w-[48%] h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
              <h2 className='font-semibold md:text-xl text-center'>Thành lập công ty trọn gói</h2>
              <span>Hỗ trợ thành lập từ A-Z</span> <br />
              <span>Không phát sinh chi phí</span>
              <div className='mt-5 text-blue-500'>
                <Link href={'/thanh-lap-cong-ty'}>
                  Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
                </Link>
              </div>
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: '190px',
              borderRadius: '10px',
              paddingInline: '14px'
            }}
          >
            <div className='fade fade-left-to-right text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
              <h2 className='font-semibold md:text-xl text-center'>Tư vấn giấy phép</h2>
              <span>Hỗ trợ thành lập từ A-Z</span> <br />
              <span>Không phát sinh chi phí</span>
              <div className='mt-5 text-blue-500'>
                <Link href={'/tu-van-giay-phep'}>
                  Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: '190px',
              borderRadius: '10px',
              paddingInline: '14px'
            }}
          >
            <div className='fade fade-right-to-left text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
              <h2 className='font-semibold md:text-xl text-center'>Dịch vụ kế toán</h2>
              <span>Hỗ trợ thành lập từ A-Z</span> <br />
              <span>Không phát sinh chi phí</span>
              <div className='mt-5 text-blue-500'>
                <Link href={'/dich-vu-ke-toan'}>
                  Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: '190px',
              borderRadius: '10px',
              paddingInline: '14px'
            }}
          >
            <div className='fade fade-left-to-right text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
              <h2 className='font-semibold md:text-xl text-center'>Thay đổi giấy phép kinh doanh</h2>
              <span>Hỗ trợ thành lập từ A-Z</span> <br />
              <span>Không phát sinh chi phí</span>
              <div className='mt-5 text-blue-500'>
                <Link href={'/thay-doi-gpkd'}>
                  Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              height: '190px',
              borderRadius: '10px',
              paddingInline: '14px'
            }}
          >
            <div className='fade fade-right-to-left text-center w-full h-full  rounded-xl shadow-[0_0_10px_rgba(0,200,255,1)] py-10 px-20'>
              <h2 className='font-semibold md:text-xl text-center'>Phần mềm</h2>
              <span>Hỗ trợ thành lập từ A-Z</span> <br />
              <span>Không phát sinh chi phí</span>
              <div className='mt-5 text-blue-500'>
                <Link href={'/phan-mem'}>
                  Tìm hiểu thêm <ArrowForwardIcon fontSize='small' />
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
