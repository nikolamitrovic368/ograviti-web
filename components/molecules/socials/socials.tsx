import { Image } from 'next-sanity/image'

import { FooterQueryResult } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'

export default function Socials({
  data,
}: {
  data: NonNullable<FooterQueryResult>['socialMedia']
}) {
  return (
    <div className="flex gap-7 py-4 md:gap-4 2xl:gap-7">
      {data?.map(
        (social, key) =>
          social.image && (
            <a
              key={key}
              href={social.link}
              target="_blank"
              className="hover:border-primary flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 md:h-10 md:w-10 2xl:h-12 2xl:w-12"
            >
              <Image
                src={urlForImage(social.image).fit('max').url()}
                alt="social icon"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
            </a>
          ),
      )}
    </div>
  )
}
