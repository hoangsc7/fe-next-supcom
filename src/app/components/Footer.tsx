import { Grid } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LanguageIcon from '@mui/icons-material/Language'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import DateRangeIcon from '@mui/icons-material/DateRange'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-[#062555] h-auto'>
      <div className='flex justify-center'>
        <Image
          className='max-w-[400px] max-h-[200px] '
          src='/logo-dark.png'
          alt='Logo'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px ', borderRadius: '10px' }}
        />
      </div>
      <Grid container sx={{ width: '90%', margin: '0 auto', paddingBottom: '20px' }} spacing={3}>
        <Grid size={{ xs: 12, lg: 4 }} className='text-white '>
          <div>
            <ul className='text-[14px] space-y-2'>
              <li>
                <span className='pl-2'>Giới thiệu</span>
              </li>

              <li>
                <span className='pl-2'>Dịch vụ</span>
              </li>
              <li>
                <span className='pl-2'>Tư vấn</span>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 5 }} className='text-white'>
          <h1 className='text-2xl font-bold mb-4 uppercase'>CÔNG TY TNHH XÚC TIẾN ĐẦU TƯ THƯƠNG MẠI SUPCOM VIỆT NAM</h1>
          <ul className='text-[14px] space-y-2'>
            <li>
              <ApartmentIcon />
              <span className='pl-2'>
                Trụ sở: Tầng 7 Toà nhà Viglacera 676 Hoàng Hoa Thám, Phường Tây Hồ, TP Hà Nội
              </span>
            </li>
            <li>
              <ReceiptLongIcon />
              <span className='pl-2'>Số đăng kí kinh doanh: 0110596554</span>
            </li>
            <li>
              <DateRangeIcon />
              <span className='pl-2'>Ngày cấp: 10-01-2024</span>
            </li>
            <li>
              <LocalPhoneIcon />
              <span className='pl-2'>Hotline: 0981.926.180</span>
            </li>

            <li>
              <LanguageIcon />
              <span className='pl-2'>Website: supcom.vn</span>
            </li>
            <li>
              <PendingActionsIcon />
              <span className='pl-2'>Thời gian làm việc: Từ thứ 2 đến thứ 7</span>
            </li>
          </ul>
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }} className='text-white'>
          <h3 className='flex justify-center text-2xl font-bold mb-2'>Theo dõi chúng tôi</h3>
          <div className='flex justify-center space-x-4  '>
            <a href='https://www.facebook.com/p/An-Pha%CC%81t-Qu%C3%B4%CC%81c-T%C3%AA%CC%81-A%CC%81-Ch%C3%A2u-61575039501435/'>
              <Image
                className='max-w-[60px] max-h-[60px]'
                src='/logo/logo-facebook.png'
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </a>
            <a href='https://zalo.me/0973762618'>
              <Image
                className='max-w-[65px] max-h-[65px]'
                src='/logo/logo-zalo.png'
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px ' }}
              />
            </a>
          </div>
          {/* <div className="flex justify-center mt-4">
            <img
              className="max-w-[180px] max-h-[70px]"
              src="/logo-thong-bao-bo-cong-thuong.png"
            />
          </div> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
