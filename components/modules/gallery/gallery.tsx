'use client'

import Image from 'next/image'
import styled from 'styled-components'

import { cn } from '@/utils/common'

const GalleryContainer = styled.div<{ $count: number }>`
  grid-template-columns: repeat(1, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(${props => props.$count}, minmax(0, 1fr));
  }
`

export default function Gallery({
  images,
}: Partial<{
  images: Sanity.ImageProps[]
}>) {
  return (
    <GalleryContainer
      className="grid gap-6 pt-6 md:gap-8 md:pt-8"
      $count={images?.length ?? 1}
    >
      {images?.map((image, key) => (
        <Image
          key={key}
          {...image}
          alt="Ograviti Logo"
          className={cn(
            'h-[245px] w-full flex-none rounded-[45px] object-cover',
            images.length > 2
              ? 'md:h-72 2xl:h-[439px]'
              : 'md:h-96 2xl:h-[686px]',
          )}
          priority
        />
      ))}
    </GalleryContainer>
  )
}
