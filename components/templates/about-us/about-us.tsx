import Image from 'next/image'

import CardSwiper from '@/components/atoms/card-swiper'
import { Link } from '@/components/atoms/link'
import LogoBackground from '@/components/atoms/logo-background/logo-background'
import { Typography } from '@/components/atoms/typography'
import Companies from '@/components/molecules/companies'
import ProfileCard from '@/components/molecules/profile-card'
import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'
import TransformationStories from '@/components/organisms/transformation-stories'
import { AboutUsPageType } from '@/sanity/queries/pages/aboutUs.query'

type AboutUsProps = { data: AboutUsPageType }

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={data?.title} subtitle={data?.subtitle} />
      <div className="mr-0 flex items-center justify-between xl:-mr-16 2xl:-mr-28">
        <div className="w-full xl:h-3/5 xl:pr-24 2xl:pr-32">
          <Typography variant="h2" className="pb-4">
            {data?.ourStory.title}
          </Typography>
          <Typography variant="subtitle2">{data?.ourStory.subtitle}</Typography>
        </div>
        <Image
          src="/images/logos/ograviti-glass2.svg"
          alt="Ograviti Logo"
          width={657}
          height={155}
          className="hidden xl:block xl:h-28 2xl:h-[155px]"
          priority
        />
      </div>
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-8 xl:gap-0">
        <div className="hidden animate-spin-slow items-center justify-center lg:flex lg:w-1/3 xl:w-1/2">
          <Image
            src="/images/logos/ograviti-o.svg"
            alt="Ograviti Logo"
            width={435}
            height={435}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 lg:w-2/3 xl:w-1/2 2xl:gap-14">
          <Typography variant="h2" className="pb-4">
            {data?.ourMission.title}
          </Typography>
          <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-6 xl:grid-cols-2 xl:gap-8">
            {data?.ourMission.sections.map(section => (
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
      <Companies />
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full md:w-4/5">
          <Typography variant="h2" className="pb-4 text-center">
            {data?.ourTeam?.title}
          </Typography>
          <Typography variant="subtitle2" className=" text-center">
            {data?.ourTeam?.subtitle}
          </Typography>
        </div>
        {data?.ourTeam?.teamMembers?.length && (
          <div className="w-full sm:hidden">
            <CardSwiper
              cards={data?.ourTeam?.teamMembers.map(team => (
                <ProfileCard data={team} key={team._id} />
              ))}
            />
          </div>
        )}
        <div className="hidden w-full grid-cols-2 gap-4 sm:grid lg:grid-cols-4 2xl:gap-8">
          {data?.ourTeam?.teamMembers.map((team, key) => (
            <ProfileCard
              data={team}
              key={team._id}
              className={key % 2 ? 'xl:mb-14 2xl:mb-48' : 'xl:mt-14 2xl:mt-48'}
            />
          ))}
        </div>
      </div>

      <LogoBackground>
        <div className="flex flex-col gap-16 p-5 text-center md:w-1/2 md:p-10 md:text-left">
          <Typography variant="h1">{data?.contactUs.title}</Typography>
          <div className="w-full">
            <Link variant="button" href="/contact-us" className="inline-block">
              {data?.contactUs.ctaText}
            </Link>
          </div>
        </div>
      </LogoBackground>

      <TransformationStories data={data?.testimonial} />
      <div className="xl:my-4 2xl:my-16"></div>
      <ContactForm />
    </main>
  )
}
