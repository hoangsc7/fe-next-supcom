'use client'

import { mainCarouselData } from './MainCarouselData'

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function FeedbackCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  return (
    <div className=''>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {mainCarouselData.map((item) => (
            <div className='embla__slide px-2' key={item?.id}>
              <Link href={item?.path}>
                <div className='relative h-auto min-h-125 object-cover rounded-lg'>
                  <Image
                    src={item?.image}
                    fill
                    sizes='100px'
                    quality={100}
                    alt={`Carousel Slide ${item?.id}`}
                    priority={item?.id === mainCarouselData[0]?.id}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
