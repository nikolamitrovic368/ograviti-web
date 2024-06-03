'use client'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Companies() {
  return (
    <div className="-mx-8 py-4 xl:-mx-16 2xl:-mx-28 2xl:py-12">
      <Swiper
        dir="rtl"
        loop={true}
        centeredSlides={false}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        modules={[Autoplay]}
        className="[&>.swiper-wrapper]:ease-linear "
      >
        {[1, 2, 3].map(v => (
          <SwiperSlide className="!w-auto" key={v}>
            <div className="flex h-12 items-center justify-center gap-12 pl-12 md:h-20 md:gap-24 md:pl-24 2xl:h-36 2xl:gap-56 2xl:pl-56">
              <Image
                className="w-[136px] md:w-[238px] 2xl:h-auto"
                src="/images/companies/1.svg"
                alt="companies-1"
                width={340}
                height={62}
              />
              <Image
                className="w-[136px] md:w-[189px] 2xl:h-auto"
                src="/images/companies/2.svg"
                alt="companies-1"
                width={270}
                height={77}
              />
              <Image
                className="w-[69.2px] md:w-[173px] 2xl:h-auto"
                src="/images/companies/3.svg"
                alt="companies-1"
                width={173}
                height={54}
              />
              <Image
                className="w-[93.6px] md:w-[235px] 2xl:h-auto"
                src="/images/companies/4.svg"
                alt="companies-1"
                width={235}
                height={73}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
