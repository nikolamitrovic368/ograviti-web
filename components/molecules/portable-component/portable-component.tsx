import { PortableTextReactComponents } from 'next-sanity'

import SanityImage from '@/components/atoms/sanity-image'
import { Typography } from '@/components/atoms/typography'
import Video from '@/components/modules/video'
import { cn } from '@/utils/common'

export const PortableComponent: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <SanityImage
        image={value}
        className="h-[245px] w-full rounded-[45px] object-cover xl:h-[400px] 2xl:h-[686px]"
      />
    ),
    video: ({ value }) => (
      <Video
        {...value}
        className="h-[245px] w-full rounded-[45px] object-cover xl:h-[400px] 2xl:h-[686px]"
      />
    ),
    multiPartImageBlock: ({ value }) => (
      <div
        className={cn(
          'grid grid-cols-1 gap-6 md:gap-8',
          value.multiPartImage.images.length === 1 && 'md:grid-cols-1',
          value.multiPartImage.images.length === 2 && 'md:grid-cols-2',
          value.multiPartImage.images.length === 3 && 'md:grid-cols-3',
          value.multiPartImage.images.length === 4 && 'md:grid-cols-4',
          value.multiPartImage.images.length === 5 && 'md:grid-cols-5',
        )}
      >
        {value.multiPartImage.images.map((image: any, key: any) => (
          <SanityImage
            key={key}
            image={image}
            className="h-[245px] rounded-[45px] object-cover md:h-[350px] 2xl:h-[439px]"
          />
        ))}
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    normal: ({ children }) => (
      <Typography variant="subtitle2">{children}</Typography>
    ),
    blockquote: ({ children }) => (
      <Typography
        variant="subtitle1"
        className="rounded-[45px] bg-primary-foreground px-6 py-3.5 text-center text-secondary md:px-16 md:py-5 2xl:px-28 2xl:py-9"
      >
        {children}
      </Typography>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Typography variant="subtitle2">
        <ul className="flex list-disc flex-col gap-1 pl-4">{children}</ul>
      </Typography>
    ),
    number: ({ children }) => (
      <Typography variant="subtitle2">
        <ol className="flex list-decimal flex-col gap-1 pl-4">{children}</ol>
      </Typography>
    ),
  },
}