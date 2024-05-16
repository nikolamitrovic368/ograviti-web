import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import UserCard from '@/components/molecules/user-card'

import { users } from './constants'

export default function TransformationStories({
  hideTitle = false,
}: {
  hideTitle?: boolean
}) {
  return (
    <div className="pt-8 md:pt-14">
      {hideTitle || (
        <>
          <Typography
            variant="h2"
            type="primary"
            className="max-md:text-center"
          >
            Stories of Transformation with Ograviti
          </Typography>
          <Typography
            variant="subtitle2"
            className="py-2 max-md:text-center md:w-2/3"
          >
            Discover the resonance of Ograviti&apos;s impact through firsthand
            experiences. From CEOs to industry experts, explore the
            transformative journeys shared by our clients and partners, echoing
            the essence of our commitment, innovation, and strategic
            collaboration.
          </Typography>
        </>
      )}
      <div className="md:pt-20">
        <div className="w-full md:hidden">
          <CardSwiper
            cards={users.map((user, k) => (
              <UserCard user={user} key={k} />
            ))}
          />
        </div>
        <div className="max-md:hidden">
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
    </div>
  )
}
