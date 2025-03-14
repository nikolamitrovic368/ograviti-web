import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { Image } from 'next-sanity/image'

import { IconButton } from '@/components/atoms/icon-button'
import Enter from '@/components/atoms/icons/enter'
import { Link } from '@/i18n/routing'
import { BlogQueryResult } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'

export default function BlogCard({
  data,
}: {
  data: NonNullable<NonNullable<BlogQueryResult>['relatedBlogs']>[number]
}) {
  return (
    <Link
      href={`/blog/${data.slug.current}`}
      className="group relative flex h-[460px] w-full flex-col justify-end overflow-hidden rounded-[45px] md:h-[380px] 2xl:h-[544px]"
    >
      {data.image && (
        <Image
          src={urlForImage(data.image).fit('max').url()}
          width={Math.round(
            544 *
              getImageDimensions(data.image as SanityImageSource).aspectRatio,
          )}
          height={544}
          className="absolute top-0 left-0 h-[460px] w-full object-cover transition-transform duration-500 md:group-hover:scale-150 2xl:h-[544px]"
          alt="blogs-1"
        />
      )}
      <div className="w-full backdrop-blur-xl">
        <div className="p-8 pb-20 transition-all duration-500 md:pb-10 md:group-hover:pb-20">
          <div className="text-primary-foreground overflow-hidden text-3xl leading-[50px] text-nowrap text-ellipsis md:leading-10">
            {data.title}
          </div>
          <div className="text-primary-foreground h-12 overflow-hidden py-2 text-sm text-ellipsis md:h-16 md:text-lg">
            {data.subtitle}
          </div>
        </div>
      </div>
      <IconButton className="absolute right-4 bottom-4 opacity-100 transition-all duration-500 md:-bottom-20 md:opacity-0 md:group-hover:bottom-4 md:group-hover:opacity-100">
        <Enter />
      </IconButton>
    </Link>
  )
}
