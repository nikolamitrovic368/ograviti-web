import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Companies() {
  return (
    <div className="-mx-8 py-16 xl:-mx-16 2xl:-mx-28">
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
            <div className="flex h-12 items-center justify-center gap-12 pl-12 md:h-36 md:gap-56 md:pl-56">
              <Image
                className="h-auto max-md:w-[170px]"
                src="/images/companies/1.svg"
                alt="companies-1"
                width={340}
                height={62}
              />
              <Image
                className="h-auto max-md:w-[135px]"
                src="/images/companies/2.svg"
                alt="companies-1"
                width={270}
                height={77}
              />
              <Image
                className="h-auto max-md:w-[86px]"
                src="/images/companies/3.svg"
                alt="companies-1"
                width={173}
                height={54}
              />
              <Image
                className="h-auto max-md:w-[117px]"
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
