import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Image } from 'next-sanity/image'

import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import Modules from '@/components/modules'
import CaseStudyCard from '@/components/molecules/case-study-card'
import { Link } from '@/i18n/routing'
import { sanityFetch } from '@/sanity/live'
import { caseStudyQuery } from '@/sanity/queries'
import { urlForImage } from '@/sanity/utils'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata(
  props: SlugLocaleProps,
): Promise<Metadata> {
  const params = await props.params

  const { slug, locale } = params

  const { data } = await sanityFetch({
    query: caseStudyQuery,
    tags: ['caseStudy'],
    stega: false,
    params: { slug, locale },
  })
  return mapSeo(data?.seo)
}

export default async function CaseStudyPage(props: SlugLocaleProps) {
  const params = await props.params

  const { slug, locale } = params

  const t = await getTranslations('CaseStudyPage')
  const { data } = await sanityFetch({
    query: caseStudyQuery,
    tags: ['caseStudy'],
    params: { slug, locale },
  })
  const title = data?.title

  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
        {title && (
          <h1 className="w-full text-center text-3xl font-bold md:text-5xl md:leading-[70px] lg:w-2/3 lg:border-r lg:py-6 lg:text-left 2xl:py-12 2xl:text-6xl 2xl:text-[80px] 2xl:leading-[100px]">
            <span className="text-primary">{title.split(' ')[0]}</span>{' '}
            {title.includes(' ') &&
              title.substring(title.indexOf(' ') + 1)}{' '}
          </h1>
        )}
        <div className="flex w-full flex-col justify-center gap-5 py-6 pr-5 md:gap-6 lg:w-1/3 lg:py-12 2xl:gap-8">
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              {t('completed')}
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data?.CompletedDate}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              {t('client')}
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data?.client}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              {t('website')}
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data?.website}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              {t('main-service')}
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data?.mainService}
            </Typography>
          </div>
        </div>
      </div>
      {data?.image && (
        <Image
          src={urlForImage(data.image).fit('max').url()}
          width={1920}
          height={Math.round(
            1920 /
              getImageDimensions(data.image as SanityImageSource).aspectRatio,
          )}
          alt="Ograviti Logo"
          className="h-[245px] w-full rounded-[45px] object-cover md:h-96 2xl:h-[686px]"
        />
      )}
      <Modules modules={data?.modules} />
      {data?.relatedCaseStudies?.length && (
        <div className="flex flex-col">
          <Link
            href="/case-study"
            className="text-right font-bold underline md:text-2xl"
          >
            {t('see-all')}
          </Link>
          <Typography variant="subtitle1" className="hidden md:block">
            {t('other-case-studies')}
          </Typography>
          <div className="md:hidden">
            <CardSwiper
              cards={data?.relatedCaseStudies?.map(caseStudy => (
                <CaseStudyCard key={caseStudy._id} data={caseStudy} />
              ))}
            />
          </div>
          <div className="hidden flex-col justify-center gap-8 pb-10 md:flex md:flex-row md:pt-10">
            {data?.relatedCaseStudies?.map(caseStudy => (
              <div className="w-1/3 xl:w-1/4" key={caseStudy._id}>
                <CaseStudyCard data={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}
