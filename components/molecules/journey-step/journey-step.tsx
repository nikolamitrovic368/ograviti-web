import { stegaClean } from '@sanity/client/stega'
import Image from 'next/image'
import React from 'react'

import useSanityImage from '@/hooks/useSanityImage'
import { Step } from '@/sanity/queries/pages/home.query'
import { cn } from '@/utils/tailwind'

export default function JourneyStep({ data }: { data: Step }) {
  const position = stegaClean(data.media?.position)
  const imageProps = useSanityImage(data.media?.image)
  return (
    <div
      className={cn(
        position === 'left' ? 'flex' : 'flex flex-col gap-4 2xl:gap-6',
      )}
    >
      {imageProps && position !== 'bottom' && (
        <Image
          {...imageProps}
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
        <div className="text-xl font-semibold text-primary 2xl:text-3xl">
          {data.title}
        </div>
        <div className="text-base 2xl:text-2xl">{data.subtitle}</div>
      </div>
      {imageProps && position === 'bottom' && (
        <div>
          <Image
            {...imageProps}
            className="h-auto w-[300px] 2xl:w-[550px]"
            unoptimized
            alt="how to image"
          />
        </div>
      )}
    </div>
  )
}
