import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Typography } from '@/components/atoms/typography'
import UserCard from '@/components/molecules/user-card'

import { users } from './constants'

export default function Section4() {
  return (
    <div className="pt-14">
      <Typography variant="h2" type="primary">
        Stories of Transformation with Ograviti
      </Typography>
      <Typography variant="subtitle2" className="w-2/3 py-2">
        Discover the resonance of Ograviti&apos;s impact through firsthand
        experiences. From CEOs to industry experts, explore the transformative
        journeys shared by our clients and partners, echoing the essence of our
        commitment, innovation, and strategic collaboration.
      </Typography>
      <div className="pt-20">
        <Swiper
          slidesPerView="auto"
          spaceBetween={32}
          freeMode={{
            enabled: true,
            momentumVelocityRatio: 0.5,
          }}
          pagination={{
            clickable: true,
          }}
          slideToClickedSlide
          modules={[FreeMode, Pagination]}
        >
          {users.map((user, k) => (
            <SwiperSlide key={k} className="!w-auto">
              <UserCard user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
