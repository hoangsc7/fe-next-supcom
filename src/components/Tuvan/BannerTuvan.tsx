import Image from 'next/image'
import React from 'react'
import ButtonContact from '../Button/ButtonContact'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const BannerTuvan = () => {
  return (
    <div>
      <div className='relative w-full h-[70%] aspect-9/16 md:aspect-18/7'>
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
            <h1 className='text-3xl md:text-2xl font-bold  drop-shadow-lg mb-2 md:mb-5'>
              <span className=''>Chúng tôi nhận tư vấn về các loại giấy phép:</span>
            </h1>
            <h3 className='text-[16px] md:text-xl'>
              <span className='mr-2'>
                <CheckCircleIcon sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Giấy phép trung tâm ngoại ngữ</span>
            </h3>
            <h3 className='text-[16px] md:text-xl'>
              <span className=' mr-2'>
                <CheckCircleIcon sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Giấy phép tư vấn du học</span>
            </h3>
            <h3 className='text-[16px] md:text-xl'>
              <span className=' mr-2'>
                <CheckCircleIcon sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Giấy phép kinh doanh lữ hành</span>
            </h3>
            <h3 className='text-[16px] md:text-xl'>
              <span className=' mr-2'>
                <CheckCircleIcon sx={{ color: '#00b300' }} />
              </span>
              <span className=''>Giấy phép bán lẻ rượu</span>
            </h3>
            <div className=' mt-5 flex gap-2 text-[20px]  md:text-[20px]'>
              <ButtonContact />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerTuvan
