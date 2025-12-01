import { Grid } from '@mui/material'
import React from 'react'
import { LocalPhone, Apartment, Mail } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-footer h-auto w-full'>
      <div className=''>
        <div className='flex justify-center'>
          <Image
            className='max-w-[400px] max-h-[200px] pt-2'
            src='/logo-dark.png'
            priority
            alt='Logo'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px ', borderRadius: '10px' }}
          />
        </div>
        <h1 className='w-full text-xl text-white font-bold uppercase text-center'>
          CÔNG TY TNHH XÚC TIẾN ĐẦU TƯ THƯƠNG MẠI SUPCOM VIỆT NAM
        </h1>
      </div>

      <Grid container sx={{ width: '100%', padding: '2rem' }} spacing={2}>
        <Grid size={{ xs: 12, lg: 4.5 }} className='text-white '>
          {/* <hr className='mb-2' /> */}
          <ul className='space-y-2'>
            <li>
              <Apartment className='mb-2' />
              <span className='text-xl pl-2'>Trụ sở Hà Nội:</span>
              <br />
              <span className='text-gray-300'>
                Tầng 7 Toà nhà Viglacera 676 Hoàng Hoa Thám, Phường Tây Hồ, TP.Hà Nội
              </span>
            </li>
            <li>
              <LocalPhone />
              <span className=' pl-2 '>Hotline: 0981.926.180</span>
            </li>
            <li>
              <Mail />
              <span className=' pl-2'>Email: supcom.head@gmail.com</span>
            </li>

            {/*<li className='mt-6'>
              <Apartment className='mb-2' />
              <span className='text-xl pl-2'>Chi nhánh miền Trung:</span>
              <br />
              <div>
                <span className='text-gray-300'>Số 17 đường An Dương Vương, TP Vinh, Tỉnh Nghệ An</span>
              </div>
            </li>
            <li>
              <LocalPhone />
              <span className=' pl-2 '>Hotline: 0938.171.186</span>
            </li>
            <li>
              <Mail />
              <span className=' pl-2'>Email: supcom.mientrung@gmail.com</span>
            </li>
            <hr />*/}
          </ul>
        </Grid>

        <Grid size={{ xs: 12, lg: 4.5 }} className='text-white'>
          {/*<Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 6 }}>
              
              <hr className='mb-2' />
              <div className='mb-6'>
                <span className='text-xl'>Dịch vụ</span>
                <ul className=' pt-2 pl-4 space-y-1 list-disc'>
                  <li>
                    <span className='text-gray-300'>Thành lập doanh nghiệp trọn gói</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Thay đổi giấy phép kinh doanh</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Bảo hộ thương hiệu</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Giải pháp lao động</span>
                  </li>
                </ul>
              </div>
              <hr className='mb-2' />
              <div>
                <span className='text-xl'>Sản phẩm</span>
                <ul className=' pt-2 pl-4 space-y-1 list-disc'>
                  <li>
                    <span className='text-gray-300'>Chứ ký số</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Hóa đơn điện tử</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Bảo hiểm xã hội</span>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <hr className='mb-2' />
              <div>
                <span className='text-xl'>Tư vấn</span>
                <ul className=' pt-2 pl-4 space-y-1 list-disc'>
                  <li>
                    <span className='text-gray-300'>Tư vấn về luật</span>
                  </li>

                  <li>
                    <span className='text-gray-300'>Tư vấn kế toán</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Tư vấn chữ ký số</span>
                  </li>
                  <li>
                    <span className='text-gray-300'>Tư vấn hóa đơn điện tử</span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>*/}
          {/* <hr className='mb-2' /> */}
          <ul className='space-y-2'>
            <li className=''>
              <Apartment className='mb-2' />
              <span className='text-xl pl-2'>Chi nhánh miền Trung:</span>
              <br />
              <div>
                <span className='text-gray-300'>Số 17 đường An Dương Vương, TP.Vinh, Tỉnh Nghệ An</span>
              </div>
            </li>
            <li>
              <LocalPhone />
              <span className=' pl-2 '>Hotline: 0938.171.186</span>
            </li>
            <li>
              <Mail />
              <span className=' pl-2'>Email: supcom.mientrung@gmail.com</span>
            </li>
          </ul>
        </Grid>

        <Grid size={{ xs: 12, lg: 2.5 }} className='text-white'>
          <h3 className='flex justify-center text-2xl font-bold mb-2'>Theo dõi chúng tôi</h3>
          <div className='flex justify-center space-x-4  '>
            <Link href='/'>
              <Image
                className='max-w-[60px] max-h-[60px]'
                src='/next.svg'
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Link>
          </div>
          {/* <div className="flex justify-center mt-4">
            <img
              className="max-w-[180px] max-h-[70px]"
              src="/logo-thong-bao-bo-cong-thuong.png"
            />
          </div> */}
        </Grid>
      </Grid>
      <div className='text-white text-center italic'>
        <hr className='border-t border-gray-300' style={{ borderStyle: 'dashed' }} />
        <span className=' text-gray-400'>@Copyright 2025 Designed by Supcom VN & HSC1</span>
      </div>
    </div>
  )
}

export default Footer
