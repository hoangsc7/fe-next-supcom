'use client'

import { mainCarouselData } from './MainCarouselData'

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })])

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container'>
        {mainCarouselData.map((item) => (
          <div className='embla__slide' key={item?.id}>
            <Link href={item?.path}>
              <div className='relative w-full aspect-[18/8.95] h-auto md:aspect-[18/8.95] object-cover'>
                <Image
                  src={item?.image}
                  fill
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
  )
}
