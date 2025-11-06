'use client'
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { mainCarouselData } from './MainCarouselData'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import Link from 'next/link'

interface CarouselItem {
  id: string
  image: string
  path: string
}

const items = mainCarouselData.map((item) => (
  <Link href={item.path} key={item.id}>
    <Image src={item.image} width={1920} height={1080} alt='Carousel Slide' className='w-full h-full object-cover' />
  </Link>
))

const MainCarousel = () => (
  <div className='relative h-700px]'>
    <AliceCarousel
      items={items}
      infinite
      autoPlay
      mouseTracking
      autoPlayInterval={5000}
      disableButtonsControls={true}
      animationDuration={1000}
      disableDotsControls={true}
    />
  </div>
)

export default MainCarousel
