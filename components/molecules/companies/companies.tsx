'use client'
import 'swiper/css'
import 'swiper/css/autoplay'

import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Companies() {
  return (
    <div className="-mx-8 py-4 xl:-mx-16 2xl:-mx-28 2xl:py-8">
      <Swiper
        loop={true}
        centeredSlides={false}
        speed={3000}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/1.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/2.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/3.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/4.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/1.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/2.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/3.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            className="h-14 max-sm:mx-auto 2xl:h-16"
            src="/images/companies/4.svg"
            alt="companies-1"
            width={250}
            height={62}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
