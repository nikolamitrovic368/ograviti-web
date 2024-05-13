import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'

export default function Section3() {
  return (
    <div className="py-14">
      <Typography variant="h2" type="primary">
        Realizing Possibilities, One Solution at a Time
      </Typography>
      <Typography variant="subtitle2" className="w-2/3 py-2">
        Embark on a journey through our Case Studies, where real-world
        challenges meet innovative solutions. Explore how Ograviti transforms
        possibilities into success stories, showcasing the tangible impact of
        our tailored solutions in diverse business landscapes.
      </Typography>
      <div className="flex py-10">
        <div className="w-1/4 px-4">
          <Card
            title="Change"
            subtitle="30% increase in sales"
            onClick={() => alert(5555)}
          />
        </div>
        <div className="w-1/4 px-4">
          <Card
            title="Change"
            subtitle="30% increase in sales"
            onClick={() => alert(5555)}
          />
        </div>
        <div className="w-1/4 px-4">
          <Card
            title="Change"
            subtitle="30% increase in sales"
            onClick={() => alert(5555)}
          />
        </div>
        <div className="w-1/4 px-4">
          <Card
            title="Change"
            subtitle="30% increase in sales"
            onClick={() => alert(5555)}
          />
        </div>
      </div>
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
          // allowSlideNext={false}
        >
          {[1, 2, 3].map(v => (
            <SwiperSlide className="!w-auto" key={v}>
              <div className="flex h-36 items-center justify-center gap-56 pl-56">
                <Image
                  src="/images/companies/1.svg"
                  alt="companies-1"
                  width={340}
                  height={62}
                />
                <Image
                  src="/images/companies/2.svg"
                  alt="companies-1"
                  width={270}
                  height={77}
                />
                <Image
                  src="/images/companies/3.svg"
                  alt="companies-1"
                  width={173}
                  height={54}
                />
                <Image
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
    </div>
  )
}
