import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { Image } from 'next-sanity/image'

import { IconButton } from '@/components/atoms/icon-button'
import { Right } from '@/components/atoms/icons'
import { Link } from '@/i18n/routing'
import { PageQueryResult } from '@/sanity.types'
import { urlForImage } from '@/sanity/utils'

type CaseStudyCardProps = {
  data: NonNullable<
    NonNullable<
      Extract<
        NonNullable<NonNullable<PageQueryResult>['modules']>[number],
        { _type: 'case-study-list' }
      >
    >['caseStudies']
  >[number]
}

export default function CaseStudyCard({
  data: { title, description, image, slug },
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-study/${slug.current}`}
      className="group flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)]"
    >
      <div className="bg-secondary flex h-[calc(60vh-4px)] w-[calc(100%-4px)] items-center justify-center overflow-hidden rounded-[45.84px]">
        <div className="h-[calc(60vh-24px)] w-[calc(100%-20px)] flex-col justify-center overflow-hidden">
          <div className="h-[calc(60vh-24px)] w-full overflow-hidden rounded-[34.38px]">
            <Image
              src={urlForImage(image).fit('max').url()}
              width={Math.round(
                686 *
                  getImageDimensions(image as SanityImageSource).aspectRatio,
              )}
              height={686}
              alt=""
              className="ease-smart flex h-[calc(60vh-165px)] w-full items-center justify-center overflow-hidden rounded-[34.38px] object-cover transition-all duration-500 md:h-[calc(60vh-24px)] md:group-hover:h-[calc(60vh-165px)] 2xl:group-hover:h-[calc(60vh-210px)]"
            ></Image>
            <div className="to-secondary flex h-20 items-center overflow-hidden bg-linear-to-r from-white bg-clip-text text-center text-6xl text-nowrap text-transparent md:text-[4vw] 2xl:h-28">
              {title}
            </div>
            {description && (
              <div className="flex items-center justify-between px-1">
                <div className="pl-4 text-xl">
                  {description.substring(0, 20)}
                  {description.length > 20 && ' ...'}
                </div>
                <div>
                  <IconButton variant="secondary">
                    <Right />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
