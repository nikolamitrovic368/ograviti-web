'use client'

import Image from 'next/image'

import useSanityImage from '@/hooks/useSanityImage'
import { type Image as SanityImage } from '@/sanity/types'

export default function SanityImage({
  image,
  className,
  alt,
  ...props
}: {
  image: SanityImage
  className?: string
  alt?: string
}) {
  const imageProps = useSanityImage(image)
  return (
    <Image alt={alt ?? ''} {...imageProps!} className={className} {...props} />
  )
}
