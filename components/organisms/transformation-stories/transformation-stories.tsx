'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwiper from '@/components/atoms/card-swiper'
import SectionTitle from '@/components/molecules/section-title'
import UserCard from '@/components/molecules/user-card'

import { users } from './constants'

export default function TransformationStories({
  hideTitle = false,
}: {
  hideTitle?: boolean
}) {
  return (
    <div className="">
      {hideTitle || (
        <SectionTitle
          className="text-center md:text-left"
          title="Stories of Transformation with Ograviti"
          subtitle="Discover the resonance of Ograviti's impact through firsthand
            experiences. From CEOs to industry experts, explore the
            transformative journeys shared by our clients and partners, echoing
            the essence of our commitment, innovation, and strategic
            collaboration."
        />
      )}
      <div className="pt-8 md:pt-12 2xl:pt-20">
        <div className="w-full md:hidden">
          <CardSwiper
            cards={users.map((user, k) => (
              <UserCard user={user} key={k} />
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
            {users.map((user, k) => (
              <SwiperSlide key={k} className="!w-auto select-none">
                <UserCard user={user} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
