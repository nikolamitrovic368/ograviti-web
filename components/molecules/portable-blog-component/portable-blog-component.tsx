import SanityImage from '@/components/atoms/sanity-image'
import { Typography } from '@/components/atoms/typography'
import { cn } from '@/utils/common'

const PortableBlogComponent = {
  types: {
    image: ({ value }: any) => (
      <SanityImage
        image={value}
        className="h-[245px] w-full rounded-[45px] object-cover xl:h-[400px] 2xl:h-[686px]"
      />
    ),
    multiPartImageBlock: ({ value }: any) => (
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
    h2: ({ children }: any) => <Typography variant="h2">{children}</Typography>,
    normal: ({ children }: any) => (
      <Typography variant="subtitle2">{children}</Typography>
    ),
    blockquote: ({ children }: any) => (
      <Typography
        variant="subtitle1"
        className="rounded-[45px] bg-primary-foreground px-6 py-3.5 text-center text-secondary md:px-16 md:py-5 2xl:px-28 2xl:py-9"
      >
        {children}
      </Typography>
    ),
  },
}

export default PortableBlogComponent
