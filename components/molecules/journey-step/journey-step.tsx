import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { stegaClean } from '@sanity/client/stega'
import { Image } from 'next-sanity/image'

import { PageQueryResult } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'
import { cn } from '@/utils/common'

export default function JourneyStep({
  data,
}: {
  data: NonNullable<
    NonNullable<
      Extract<
        NonNullable<NonNullable<PageQueryResult>['modules']>[number],
        { _type: 'journey-carousel' }
      >
    >['step1']
  >
}) {
  const position = stegaClean(data.media?.position)
  return (
    <div
      className={cn(
        position === 'left' ? 'flex' : 'flex flex-col gap-4 2xl:gap-6',
      )}
    >
      {data.media?.image && position !== 'bottom' && (
        <Image
          src={urlForImage(data.media.image).fit('max').url()}
          width={Math.round(
            500 *
              getImageDimensions(data.media.image as SanityImageSource)
                .aspectRatio,
          )}
          height={500}
          className={cn(
            position === 'left'
              ? 'h-[300px] w-1/3 object-cover 2xl:h-[500px]'
              : 'h-auto w-[300px] 2xl:w-[550px]',
          )}
          unoptimized
          alt="how to image"
        />
      )}
      <div className="flex flex-col gap-4 pl-4 2xl:gap-6">
        <div className="text-primary text-xl font-semibold 2xl:text-3xl">
          {data.title}
        </div>
        <div className="text-base 2xl:text-2xl">{data.subtitle}</div>
      </div>
      {data.media?.image && position === 'bottom' && (
        <div>
          <Image
            src={urlForImage(data.media.image).fit('max').url()}
            width={Math.round(
              500 *
                getImageDimensions(data.media.image as SanityImageSource)
                  .aspectRatio,
            )}
            height={500}
            className="h-auto w-[300px] 2xl:w-[550px]"
            unoptimized
            alt="how to image"
          />
        </div>
      )}
    </div>
  )
}
