import Link from 'next/link'

import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Typography } from '@/components/atoms/typography'

type BlogCardProps = {
  blog?: {
    title: string
    description: string
    img: string
    src: string
  }
}

export default function BlogCard({}: BlogCardProps) {
  return (
    <Link
      href="/blog/1"
      className="group relative flex h-[544px] w-full flex-col justify-end overflow-hidden rounded-[45px]"
      style={{
        backgroundImage: 'url(/images/blogs/1.jpg)',
      }}
    >
      <div className="w-full backdrop-blur-xl">
        <div className="p-8 pb-10 transition-all duration-500 group-hover:pb-20">
          <Typography variant="subtitle1" className="text-primary-foreground">
            Look Inside Art
          </Typography>
          <Typography
            variant="subtitle3"
            className="py-2 text-primary-foreground"
          >
            Nunc nulla. Praesent ac massa at ligula laoreet iaculis. Aliquam
            erat volutpat.
          </Typography>
        </div>
      </div>
      <IconButton className="absolute -bottom-20 right-4 opacity-0 transition-all duration-500 group-hover:bottom-4 group-hover:opacity-100">
        <Enter />
      </IconButton>
    </Link>
  )
}
