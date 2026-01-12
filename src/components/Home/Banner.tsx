import Image from 'next/image'
import React from 'react'
import ButtonContact from '../Button/ButtonContact'
import ButtonMore from '../Button/ButtonMore'

const Banner = () => {
  const title = 'Tim hiểu thêm'
  const href = '/thanh-lap-cong-ty'
  return (
    <div>
      <div className='relative w-full flex flex-col justify-center overflow-hidden min-h-162.5'>
        <Image src='/banner/banner3.png' fill priority alt='Banner Supcom' className='object-cover' />

        <div className='absolute inset-0 bg-linear-to-r from-[#000c2e] to-[#0053a5] mix-blend-plus-lighter'></div>

        <div className='relative z-10 flex flex-col md:flex-row  px-4 md:px-40 py-10'>
          {/* TEXT */}
          <div className='flex flex-col justify-center w-full md:w-1/2 text-gray-50'>
            <h1 className='text-3xl md:text-5xl font-bold uppercase drop-shadow-lg mb-2 md:mb-5'>
              Dịch vụ doanh nghiệp
            </h1>
            <h3 className='text-[15px] md:text-xl'>
              Đồng hành cùng doanh nghiệp từ bước đầu thành lập <br /> đến tối ưu vận hành & phát triển
            </h3>
            <div className=' mt-5 flex gap-2 text-[20px]  md:text-[20px]'>
              <ButtonMore href={href} name={title} />
              <ButtonContact />
            </div>
          </div>

          {/* IMAGE */}
          <div className='w-full md:w-1/2 flex justify-center md:justify-end items-end mt-6 md:mt-0'>
            <Image
              src='/img/thusc.png'
              alt='Thusc'
              width={800}
              height={1600}
              className='max-h-[70vh] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
