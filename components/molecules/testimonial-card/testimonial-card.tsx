import Image from 'next/image'

import Rating from '@/components/atoms/rating'
import useSanityImage from '@/hooks/useSanityImage'
import { type TestimonialCard } from '@/sanity/queries/pages/home.query'

type TestimonialCardProps = {
  data: TestimonialCard
}

export default function TestimonialCard({
  data: { description, rate, image, name, role },
}: TestimonialCardProps) {
  const imageProps = useSanityImage(image)
  return (
    <div className="flex h-[322px] flex-col justify-between gap-4 rounded-3xl bg-secondary px-4 py-6 md:h-[334px] md:w-[288px] md:py-5 2xl:h-[465px] 2xl:w-[400px] 2xl:px-7 2xl:py-10">
      <div className="text-center md:text-base 2xl:text-2xl 2xl:leading-9">
        {description}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Rating className="pb-6" initialValue={rate} readonly />
        {imageProps && (
          <Image
            {...imageProps}
            className="h-12 w-12 rounded-full object-cover"
            alt="user-avatar"
          />
        )}
        <div className="py-1 text-lg font-semibold text-white md:text-base">
          {name}
        </div>
        <div className="text-white/opacity-60 text-sm font-normal text-action">
          {role}
        </div>
      </div>
    </div>
  )
}
