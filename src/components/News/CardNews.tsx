'use client'
import Link from 'next/link'
import Image from 'next/image'

import { New } from '~/types/new'

type Prop = {
  data?: New
}

const CardNews = ({ data }: Prop) => {
  return (
    <div className='h-full flex flex-col'>
      <Link
        href={`/${data?.slug}`}
        className=' flex flex-col h-full rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow '
      >
        <div className='p-1'>
          <Image
            src={data?.image || './bg_test.png'}
            alt=''
            width={400}
            height={300}
            className='w-full h-auto shrink-0 object-cover'
            priority
          />
        </div>
        <p className='text-[14px] text-justify md:text-[16px] p-3 text-gray-700 grow mb-2'>{data?.title}</p>
      </Link>
    </div>
  )
}

export default CardNews
