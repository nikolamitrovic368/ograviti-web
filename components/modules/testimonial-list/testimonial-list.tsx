'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwiper from '@/components/atoms/card-swiper'
import SectionTitle from '@/components/molecules/section-title'
import TestimonialCard from '@/components/molecules/testimonial-card'

export default function TestimonialList({
  title,
  subtitle,
  testimonialCards,
}: Partial<{
  title: string
  subtitle: string
  testimonialCards: Sanity.TestimonialCard[]
}>) {
  return (
    <div className="py-8 md:py-12 xl:py-16">
      <SectionTitle
        className="text-center md:text-left"
        title={title}
        subtitle={subtitle}
      />
      <div className="pt-8 md:pt-12 2xl:pt-20">
        {testimonialCards?.length && (
          <>
            <div className="w-full md:hidden">
              <CardSwiper
                cards={testimonialCards.map((card, k) => (
                  <TestimonialCard {...card} key={k} />
                ))}
              />
            </div>
            <div className="-mx-8 max-md:hidden xl:-mx-16 2xl:-mx-28">
              <Swiper
                slidesPerView="auto"
                spaceBetween={32}
                freeMode={{
                  enabled: true,
                  momentumVelocityRatio: 0.5,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'hidden',
                }}
                // px-8 xl:px-16 2xl:px-28
                className="!px-8 xl:!px-16 2xl:!px-28"
                slideToClickedSlide
                modules={[FreeMode, Pagination]}
              >
                {testimonialCards.map((card, k) => (
                  <SwiperSlide key={k} className="!w-auto select-none">
                    <TestimonialCard {...card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
