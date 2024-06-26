import Image from 'next/image'
import Link from 'next/link'

import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Typography } from '@/components/atoms/typography'
import { type BlogCard } from '@/sanity/types'

type BlogCardProps = {
  data: BlogCard
}

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${data.slug.current}`}
      className="group relative flex h-[460px] w-full flex-col justify-end overflow-hidden rounded-[45px] md:h-[380px] 2xl:h-[544px]"
    >
      <Image
        {...data.image}
        className="absolute left-0 top-0 h-[460px] w-full object-cover transition-transform duration-500 md:group-hover:scale-150 2xl:h-[544px]"
        alt="blogs-1"
      />
      <div className="w-full pl-5 backdrop-blur-xl">
        <div className="p-8 pb-20 transition-all duration-500 md:pb-10 md:group-hover:pb-20">
          <div className="text-3xl leading-[50px] text-primary-foreground md:leading-10 ">
            {data.title}
          </div>
          <Typography
            variant="subtitle3"
            className="h-14 py-2 text-sm text-primary-foreground md:text-base"
          >
            {data.subtitle}
          </Typography>
        </div>
      </div>
      <IconButton className="absolute bottom-4 right-4 opacity-100 transition-all duration-500 md:-bottom-20 md:opacity-0 md:group-hover:bottom-4 md:group-hover:opacity-100">
        <Enter />
      </IconButton>
    </Link>
  )
}
