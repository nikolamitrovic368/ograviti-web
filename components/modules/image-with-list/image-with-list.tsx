import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'

export default function ImageWithList({
  title,
  items,
  image,
}: Partial<Sanity.ImageWithList>) {
  return (
    <div className="flex flex-col gap-0 py-4 md:py-12 lg:flex-row lg:gap-8 xl:gap-0">
      <div className="hidden items-center justify-center lg:flex lg:w-1/3 xl:w-1/2">
        {image ? (
          <Image alt="Image with list" priority {...image} />
        ) : (
          <Image
            src="/images/logos/ograviti-o.svg"
            alt="Ograviti Logo"
            width={435}
            height={435}
            priority
          />
        )}
      </div>
      <div className="flex flex-col gap-4 md:gap-8 lg:w-2/3 xl:w-1/2 2xl:gap-14">
        <Typography variant="h2" className="pb-4">
          {title}
        </Typography>
        <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-6 xl:grid-cols-2 xl:gap-8">
          {items?.map(section => (
            <div key={section._key}>
              <Typography variant="h3" className="pb-4 text-primary">
                {section.title}
              </Typography>
              <Typography variant="subtitle2" className="">
                {section.subtitle}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
