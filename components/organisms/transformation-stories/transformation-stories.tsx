'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwiper from '@/components/atoms/card-swiper'
import SectionTitle from '@/components/molecules/section-title'
import TestimonialCard from '@/components/molecules/testimonial-card'
import { Testimonial } from '@/sanity/queries/pages/home.query'

export default function TransformationStories({
  hideTitle = false,
  data,
}: {
  hideTitle?: boolean
  data: Testimonial
}) {
  return (
    <div className="">
      {hideTitle || (
        <SectionTitle
          className="text-center md:text-left"
          title={data.title}
          subtitle={data.subtitle}
        />
      )}
      <div className="pt-8 md:pt-12 2xl:pt-20">
        <div className="w-full md:hidden">
          <CardSwiper
            cards={data.testimonialCards.map((card, k) => (
              <TestimonialCard data={card} key={k} />
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
            className="!px-8"
            slideToClickedSlide
            modules={[FreeMode, Pagination]}
          >
            {data.testimonialCards.map((user, k) => (
              <SwiperSlide key={k} className="!w-auto select-none">
                <TestimonialCard data={user} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
