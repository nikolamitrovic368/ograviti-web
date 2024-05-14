import 'swiper/css'
import 'swiper/css/pagination'

import { motion, useAnimate } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '@/components/molecules/card'

export default function CardSwiper({ cards }: { cards: any[] }) {
  return (
    <Swiper
      pagination={{
        clickable: true,
        clickableClass: 'swiper-pagination-clickable',
        bulletActiveClass: '!w-7 !bg-white',
        bulletClass:
          'mx-1 cursor-pointer inline-block w-4 h-1.5 rounded-lg bg-neutral-700',
      }}
      className="!pb-12"
      modules={[Pagination]}
    >
      {cards.map((card, key) => (
        <SwiperSlide key={key}>{card}</SwiperSlide>
      ))}
    </Swiper>
  )
}
