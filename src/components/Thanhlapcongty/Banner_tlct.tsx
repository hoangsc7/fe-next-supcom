import Image from 'next/image'
import React from 'react'
import ButtonContact from '../Button/ButtonContact'
import ButtonMore from '../Button/ButtonMore'
import { CheckCircle } from '@mui/icons-material'

const BannerTLDN = () => {
  const title = 'Bảng giá dịch vụ'
  const href = '#charge'
  return (
    <div>
      <div className='relative w-full h-[70%] aspect-9/16 md:aspect-[18/8.95]'>
        <Image
          src='/banner/banner3.png'
          fill
          quality={100}
          alt='Banner Supcom'
          priority
          className='object-cover object-[90%_90%] md:object-center'
        />
        <div className='absolute inset-0 bg-linear-to-r from-[#020ef8] to-[#0149b2] mix-blend-plus-lighter'></div>

        <div className='absolute inset-0 w-full p-3 md:pl-30 flex md:items-center'>
          <div className='text-gray-50  w-full'>
            <h1 className='text-3xl md:text-2xl font-bold uppercase drop-shadow-lg mb-2 md:mb-5'>
              <span className='text-orange-300'>Thành lập doanh nghiệp trọn gói</span> tại Supcom
              <br /> chỉ từ 1.250.000VNĐ
            </h1>
            <h3 className='text-[16px] md:text-xl'>
              <span className=' mr-2'>
                <CheckCircle sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Hoàn thiện và bàn giao trong 3-5 ngày làm việc</span>
            </h3>
            <h3 className='text-[16px] md:text-xl'>
              <span className=' mr-2'>
                <CheckCircle sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Tư vấn hỗ trợ pháp lý sau khi thành lập</span>
            </h3>
            <div className=' mt-5 flex gap-2 text-[20px]  md:text-[20px]'>
              <ButtonMore href={href} name={title} />
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerTLDN
