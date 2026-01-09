import Image from 'next/image'
import '~/app/globals.css'

const ContactButton = () => {
  return (
    <div>
      <div className='fixed bottom-10 right-6 flex flex-col items-center gap-3 z-50'>
        <a
          href='https://zalo.me/0902243546'
          target='_blank'
          rel='noopener noreferrer'
          className=' relative w-14 h-14 flex items-center justify-center bg-[#0068ff] text-white rounded-full shadow-lg hover:scale-110 transition-transform '
        >
          <span
            className='absolute inset-0 rounded-full bg-[#0068ff] opacity-75 z-0'
            style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          ></span>
          <Image src='/icon/zalo-logo1.png' alt='Zalo' width={40} height={40} className='object-contain z-10' />
        </a>
        <a
          href='https://messenger.com/t/tuvandoanhnghiepsupcom'
          target='_blank'
          rel='noopener noreferrer'
          className=' relative w-14 h-14 flex items-center justify-center bg-mess-icon text-white rounded-full shadow-lg hover:scale-110 transition-transform '
        >
          <span
            className='absolute inset-0 rounded-full  bg-mess-icon opacity-75 z-0'
            style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          ></span>
          <Image src='/icon/mess-logo1.png' alt='Zalo' width={40} height={40} className='object-contain z-10' />
        </a>
        <a
          href='tel:0902243546'
          className='relative w-14 h-14 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform '
        >
          <span
            className='absolute inset-0 rounded-full bg-green-500 opacity-75 z-0'
            style={{ animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
          ></span>
          <span className='z-10'>📞</span>
        </a>
      </div>
    </div>
  )
}

export default ContactButton
