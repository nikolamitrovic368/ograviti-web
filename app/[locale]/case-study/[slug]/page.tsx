import { Metadata } from 'next'
import Image from 'next/image'
import { unstable_setRequestLocale } from 'next-intl/server'

import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import CaseStudyCard from '@/components/molecules/case-study-card'
import SectionTitle from '@/components/molecules/section-title'
import { Link } from '@/navigation'
import { fetchCaseStudyData } from '@/sanity/services/caseStudy.service'
import { SlugLocaleProps } from '@/types'
import { mapSeo } from '@/utils/common'

export async function generateMetadata({
  params,
}: SlugLocaleProps): Promise<Metadata> {
  const { seo } = await fetchCaseStudyData(params.slug)
  return mapSeo(seo)
}

export default async function Page({
  params: { slug, locale },
}: SlugLocaleProps) {
  unstable_setRequestLocale(locale)
  const { title, ...data } = await fetchCaseStudyData(slug, locale)

  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
        <h1 className=" w-full text-center text-3xl font-bold md:text-5xl md:leading-[70px]  lg:w-2/3 lg:border-r lg:py-6 lg:text-left 2xl:py-12 2xl:text-6xl 2xl:text-[80px] 2xl:leading-[100px]">
          <span className="text-primary">{title.split(' ')[0]}</span>{' '}
          {title.includes(' ') && title.substring(title.indexOf(' ') + 1)}{' '}
        </h1>
        <div className="flex w-full flex-col justify-center gap-5 py-6 pr-5 md:gap-6 lg:w-1/3 lg:py-12 2xl:gap-8">
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              Completed
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data.CompletedDate}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              Client
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data.client}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              Website
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data.website}
            </Typography>
          </div>
          <div className="flex justify-between xl:pl-8 2xl:pl-16">
            <Typography variant="subtitle2" className="max-md:text-base">
              Main Service
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              {data.mainService}
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Image
          {...data.image}
          alt="Ograviti Logo"
          className="h-[245px] w-full rounded-[45px] object-cover md:h-96 2xl:h-[686px]"
          priority
        />
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:gap-8 md:pt-8">
          {data.headerImages.map((image, key) => (
            <Image
              key={key}
              {...image}
              alt="Ograviti Logo"
              className="h-[245px] rounded-[45px] object-cover md:h-72 2xl:h-[439px]"
              priority
            />
          ))}
        </div>
      </div>
      <div className="mr-0 flex items-center justify-between gap-0 md:-mr-8 md:gap-16 xl:-mr-16 2xl:-mr-28 2xl:gap-28">
        <div className="flex-1">
          <Typography variant="h2" className="pb-4">
            {data.approachTitle}
          </Typography>
          <Typography variant="subtitle2">{data.approachSubtitle}</Typography>
        </div>
        <Image
          src="/images/logos/ograviti-glass2.svg"
          alt="Ograviti Logo"
          width={657}
          height={155}
          className="hidden h-28 w-auto md:block 2xl:h-[155px]"
          priority
        />
      </div>
      <div className="mr-0 flex items-center justify-between gap-0 md:-ml-8 md:gap-16 xl:-ml-16 2xl:-ml-28 2xl:gap-28">
        <Image
          src="/images/logos/ograviti-glass1.svg"
          alt="Ograviti Logo"
          width={656}
          height={155}
          className="hidden h-28 w-auto md:block 2xl:h-[155px]"
          priority
        />
        <div className="flex-1">
          <Typography variant="h2" className="pb-4">
            {data.backgroundTitle}
          </Typography>
          <Typography variant="subtitle2">{data.backgroundSubtitle}</Typography>
        </div>
      </div>
      <div>
        <Image
          {...data.footerimage}
          alt="Ograviti Logo"
          className="h-[245px] w-full rounded-[45px] object-cover md:h-96 2xl:h-[686px]"
          priority
          unoptimized
        />
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          {data.footerImages.map((image, key) => (
            <Image
              key={key}
              {...image}
              alt="Ograviti Logo"
              className="h-[245px] rounded-[45px] object-cover md:h-[350px] 2xl:h-[686px]"
              priority
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SectionTitle
          title={data.exceptionalResultsTitle}
          subtitle={data.exceptionalResultsSubtitle}
        />
      </div>
      <div className="flex flex-col">
        <Link
          href="/case-study"
          className="text-right font-bold underline md:text-2xl"
        >
          See all
        </Link>
        <Typography variant="subtitle1" className="hidden md:block">
          Other case studies
        </Typography>
        <div className="md:hidden">
          <CardSwiper
            cards={data.relatedCaseStudies.map(caseStudy => (
              <CaseStudyCard key={caseStudy._id} data={caseStudy} />
            ))}
          />
        </div>
        <div className="hidden flex-col justify-center gap-8 pb-10 md:flex md:flex-row md:pt-10">
          {data.relatedCaseStudies.map(caseStudy => (
            <div className="w-1/3 xl:w-1/4" key={caseStudy._id}>
              <CaseStudyCard data={caseStudy} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
