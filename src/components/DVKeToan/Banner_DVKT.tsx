import Image from 'next/image'
import ButtonContact from '../Button/ButtonContact'

const BannerDVKT = () => {
  const title = 'Bảng giá dịch vụ'
  const href = '#charge'
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Background */}
      <Image src='/banner/banner3.png' fill priority alt='Banner Supcom' className='object-cover' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-linear-to-r from-[#020ef8] to-[#0149b2] mix-blend-plus-lighter' />

      {/* Content – KHÔNG absolute */}
      <div className='relative z-10 flex flex-col md:flex-row  px-4 md:px-40 py-10'>
        {/* TEXT */}
        <div className='flex flex-col justify-center w-full md:w-1/2 text-gray-50 md:ml-20'>
          <h1 className='text-2xl md:text-4xl font-bold uppercase drop-shadow-lg my-4 leading-snug'>
            <span className=''>Dịch vụ kế toán trọn gói </span>
            <br />
            chỉ từ
          </h1>

          <div className='items-start'>
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
  )
}

export default BannerDVKT
