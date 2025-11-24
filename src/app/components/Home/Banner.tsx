import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'
import ButtonContact from '../Button/ButtonContact'
import ButtonMore from '../Button/ButtonMore'

const Banner = () => {
  return (
    <div>
      <div className='relative w-full h-[70%] aspect-9/16 md:aspect-[18/8.95]'>
        <Image
          src='/banner/banner-2.jpg'
          fill
          quality={100}
          alt='Banner Supcom'
          priority={true}
          className='object-cover object-[90%_90%] md:object-center'
        />
        <div className='absolute inset-0 w-full p-3 md:pl-30 flex md:items-center'>
          <div className='text-gray-50  w-full'>
            <h1 className='text-2xl md:text-5xl font-bold uppercase drop-shadow-lg mb-2 md:mb-5'>
              Dịch vụ doanh nghiệp
            </h1>
            <h3 className='text-[12px] md:text-xl'>
              Đồng hành cùng doanh nghiệp từ bước đầu thành lập <br /> đến tối ưu vận hành & phát triển
            </h3>
            <div className=' mt-5 flex gap-2 text-sm  md:text-[20px]'>
              <ButtonMore />
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
