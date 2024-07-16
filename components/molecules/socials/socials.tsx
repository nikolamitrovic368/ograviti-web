import Image from 'next/image'

import { SocialMedias } from '@/sanity/queries/layout.queries'

type SocialsProps = {
  data: SocialMedias
}

export default function Socials({ data }: SocialsProps) {
  return (
    <div className="flex gap-7 py-4 md:gap-4 2xl:gap-7">
      {data.map((social, key) => (
        <a
          key={key}
          href={social.link}
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary md:h-10 md:w-10 2xl:h-12 2xl:w-12"
        >
          <Image
            src={social.image.src}
            alt="social icon"
            width={social.image.width}
            height={social.image.height}
            className="h-[18px] w-[18px]"
          />
        </a>
      ))}
    </div>
  )
}
