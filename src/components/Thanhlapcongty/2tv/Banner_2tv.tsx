import Image from 'next/image'
import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ButtonMore from '~/components/Button/ButtonMore'
import ButtonContact from '~/components/Button/ButtonContact'

const Banner2TV = () => {
  const title = 'Bảng giá dịch vụ'
  const href = '#charge'
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Background */}
      <Image src='/banner/banner3.png' fill priority alt='Banner Supcom' className='object-cover' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-[#020ef8] to-[#0149b2] mix-blend-plus-lighter' />

      {/* Content – KHÔNG absolute */}
      <div className='relative z-10 flex flex-col md:flex-row  px-4 md:px-40 py-5'>
        {/* TEXT */}
        <div className='flex flex-col justify-center w-full md:w-1/2 text-gray-50'>
          <h1 className='text-3xl md:text-2xl font-bold uppercase drop-shadow-lg my-4'>
            <span className='text-orange-300'>Thành lập Công ty TNHH 2 thành viên trọn gói</span>
            <br /> chỉ từ 1.190.000VNĐ
          </h1>

          <h3 className='text-[16px] md:text-xl my-2'>
            <CheckCircleIcon sx={{ color: '#00b300' }} className='mr-2 inline' />
            Hoàn thiện và bàn giao trong 3–5 ngày làm việc
          </h3>

          <h3 className='text-[16px] md:text-xl my-2'>
            <CheckCircleIcon sx={{ color: '#00b300' }} className='mr-2 inline' />
            Tư vấn hỗ trợ pháp lý sau khi thành lập
          </h3>
          <h3 className='text-[16px] md:text-xl my-2'>
            <CheckCircleIcon sx={{ color: '#00b300' }} className='mr-2 inline' />
            Cung cấp các dịch vụ kế toán-thuế chuyên nghiệp, chính xác
          </h3>

          <div className='flex gap-2 mt-2'>
            <ButtonMore href={href} name={title} />
            <ButtonContact />
          </div>
        </div>

        {/* IMAGE */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end items-end mt-6 md:mt-0'>
          <Image
            src='/img/thusc.png'
            alt='Thusc'
            width={450}
            height={800}
            className='max-h-[70vh] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner2TV
