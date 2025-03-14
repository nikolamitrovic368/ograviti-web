import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { Image } from 'next-sanity/image'

import Rating from '@/components/atoms/rating'
import type { TestimonialCard } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'

export default function TestimonialCard({
  description,
  rate,
  image,
  name,
  role,
}: TestimonialCard) {
  return (
    <div className="bg-secondary flex h-[322px] flex-col justify-between gap-4 rounded-3xl px-4 py-6 md:h-[334px] md:w-[288px] md:py-5 2xl:h-[465px] 2xl:w-[400px] 2xl:px-7 2xl:py-10">
      <div className="text-center md:text-base 2xl:text-2xl 2xl:leading-9">
        {description}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Rating className="pb-6" initialValue={rate} readonly />
        {image && (
          <Image
            src={urlForImage(image).fit('max').url()}
            width={Math.round(
              48 * getImageDimensions(image as SanityImageSource).aspectRatio,
            )}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            alt="user-avatar"
          />
        )}
        <div className="py-1 text-lg font-semibold text-white md:text-base">
          {name}
        </div>
        <div className="text-white/opacity-60 text-action text-sm font-normal">
          {role}
        </div>
      </div>
    </div>
  )
}
