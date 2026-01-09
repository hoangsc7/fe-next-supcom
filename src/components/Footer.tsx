import { Grid } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import ApartmentIcon from '@mui/icons-material/Apartment'
import MailIcon from '@mui/icons-material/Mail'
import Image from 'next/image'
import Link from 'next/link'
import FormContact1 from './Form/FormContact1'

const Footer = () => {
  return (
    <div className='bg-footer h-auto w-full'>
      <Grid container sx={{ width: '100%', padding: '2rem' }} spacing={2}>
        <Grid size={{ xs: 12, lg: 8 }} className='text-white '>
          <div>
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
          <Grid container>
            <Grid size={{ xs: 12, lg: 6 }}>
              <ul className='my-3'>
                <li>
                  <ApartmentIcon className='mb-2' />
                  <span className='text-xl pl-2'>Trụ sở Hà Nội:</span>
                  <br />
                  <span className='text-gray-300'>
                    Tầng 7 Toà nhà Viglacera 676 Hoàng Hoa Thám, Phường Tây Hồ, TP.Hà Nội
                  </span>
                </li>
                <li>
                  <LocalPhoneIcon />
                  <span className=' pl-2 '>Hotline: 0902.243.546</span>
                </li>
                <li>
                  <MailIcon />
                  <span className=' pl-2'>Email: supcom.head@gmail.com</span>
                </li>
              </ul>
              <ul className='my-3'>
                <li>
                  <ApartmentIcon className='mb-2' />
                  <span className='text-xl pl-2'>Chi nhánh miền Trung:</span>
                  <br />
                  <div>
                    <span className='text-gray-300'>
                      Tầng 6 Tòa nhà VCCI số 01 Đại lộ Lenin, Phường Trường Vinh, T.Nghệ An
                    </span>
                  </div>
                </li>
                <li>
                  <LocalPhoneIcon />
                  <span className=' pl-2 '>Hotline: 0938.171.186</span>
                </li>
                <li>
                  <MailIcon />
                  <span className=' pl-2'>Email: supcom.mientrung@gmail.com</span>
                </li>
              </ul>
              <ul className='my-3'>
                <li>
                  <ApartmentIcon className='mb-2' />
                  <span className='text-xl pl-2'>Chi nhánh miền Nam:</span>
                  <br />
                  <span className='text-gray-300'>Số 1 Huỳnh Văn Gấm, Phường Phú Thọ, TP.Hồ Chí Minh</span>
                </li>
                <li>
                  <LocalPhoneIcon />
                  <span className=' pl-2 '>Hotline: 0981.926.180</span>
                </li>
                <li>
                  <MailIcon />
                  <span className=' pl-2'>Email: supcom.head@gmail.com</span>
                </li>
              </ul>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <h3 className='my-5 flex justify-center text-2xl font-bold mb-2'>Theo dõi chúng tôi</h3>
              <div className='flex justify-center space-x-4  '>
                <Link href='https://www.facebook.com/tuvandoanhnghiepsupcom'>
                  <Image
                    className='max-w-[60px] max-h-[60px]'
                    src='/icon/face-logo1.png'
                    alt='Fanpage Facebook Supcom'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>
                <Link href='#contact'>
                  <Image
                    className='max-w-[60px] max-h-[60px]'
                    src='/icon/youtube-logo.png'
                    alt='Youtube Supcom'
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Link>
              </div>
              <div className='my-5 w-full h-[230px] rounded-xl overflow-hidden'>
                <iframe
                  title='Bản đồ vị trí công ty Supcom'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6267255305766!2d105.80444307488996!3d21.047616580606416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba3de4b655d%3A0x4060f18e79cb3726!2zQ8O0bmcgdHkgVE5ISCBTdXBjb20gLSBL4bq_IHRvw6FuIHRodeG6vyAmIHRow6BuaCBs4bqtcCBkb2FuaCBuZ2hp4buHcA!5e0!3m2!1svi!2s!4v1767598404591!5m2!1svi!2s'
                  className='w-full h-full border-0'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }} className='flex flex-col justify-center'>
          <div className=''>
            <FormContact1 />
          </div>
        </Grid>
      </Grid>
      <div className='text-white text-center italic'>
        <hr className='border-t border-gray-300' style={{ borderStyle: 'dashed' }} />
        <span className=' text-gray-400'>@Copyright 2025 Designed by Supcom</span>
      </div>
    </div>
  )
}

export default Footer
