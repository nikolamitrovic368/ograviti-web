import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'

import client from '@/sanity/client'

export default function useSanityImage(image: any) {
  return useNextSanityImage(client, image) as UseNextSanityImageProps | null
}
