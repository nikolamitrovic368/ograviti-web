'use client'

import Image from 'next/image'

import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 pb-28 md:gap-14 md:pb-60">
      <div className="flex w-full flex-col gap-8 md:flex-row">
        <Typography
          variant="h1"
          className="w-full text-center md:w-2/3 md:text-left"
        >
          <span className="text-primary max-md:block">Creative</span>{' '}
          development and production for Cleano’s new commercial
        </Typography>
        <div className="flex w-full flex-col justify-center gap-5 pr-5 md:w-1/3 md:gap-8 md:border-l">
          <div className="flex justify-between md:pl-32">
            <Typography variant="subtitle2" className="max-md:text-base">
              Completed
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              January 2023
            </Typography>
          </div>
          <div className="flex justify-between md:pl-32">
            <Typography variant="subtitle2" className="max-md:text-base">
              Client
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              Cleano
            </Typography>
          </div>
          <div className="flex justify-between md:pl-32">
            <Typography variant="subtitle2" className="max-md:text-base">
              Website
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              www.Cleano.com
            </Typography>
          </div>
          <div className="flex justify-between md:pl-32">
            <Typography variant="subtitle2" className="max-md:text-base">
              Main Service
            </Typography>
            <Typography
              variant="subtitle2"
              className="text-primary max-md:text-base"
            >
              Branding
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/blogs/2.jpg"
          alt="Ograviti Logo"
          width={1280}
          height={686}
          className="h-[245px] w-full rounded-[45px] object-cover md:h-[686px]"
          priority
        />
        <div className="flex flex-col gap-6 pt-6 md:flex-row md:gap-8 md:pt-8">
          <Image
            src="/images/blogs/3.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] w-full rounded-[45px] object-cover md:h-[439px] md:w-1/3"
            priority
          />
          <Image
            src="/images/blogs/4.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] w-full rounded-[45px] object-cover md:h-[439px] md:w-1/3"
            priority
          />
          <Image
            src="/images/blogs/5.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] w-full rounded-[45px] object-cover md:h-[439px] md:w-1/3"
            priority
          />
        </div>
      </div>
      <div className="mr-0 flex items-center justify-between md:-mr-8 xl:-mr-16 2xl:-mr-28">
        <div className="w-full md:w-3/5 md:pr-32">
          <Typography variant="h2" className="pb-4 text-primary">
            How we approached the project?
          </Typography>
          <Typography variant="subtitle2">
            At Ograviti, our approach to the cosmetic product brand was a blend
            of meticulous understanding and innovative design. We immersed
            ourselves in the brand&lsquo;s essence, crafting a strategy that
            marries technology with aesthetic appeal. Through collaborative
            ideation and open communication, we brought to life a digital
            presence that reflects the perfect fusion of creativity and
            technology, exemplifying our commitment to excellence.
          </Typography>
        </div>
        <Image
          src="/images/logos/ograviti-glass2.svg"
          alt="Ograviti Logo"
          width={657}
          height={155}
          className="hidden h-[155px] md:block"
          priority
        />
      </div>
      <div className="mr-0 flex items-center justify-between md:-mr-8 xl:-mr-16 2xl:-mr-28">
        <Image
          src="/images/logos/ograviti-glass1.svg"
          alt="Ograviti Logo"
          width={656}
          height={155}
          className="hidden h-[155px] md:block"
          priority
        />
        <div className="w-full md:w-3/5 md:pr-32">
          <Typography variant="h2" className="pb-4 text-primary">
            How we approached the project?
          </Typography>
          <Typography variant="subtitle2">
            At Ograviti, our approach to the cosmetic product brand was a blend
            of meticulous understanding and innovative design. We immersed
            ourselves in the brand&lsquo;s essence, crafting a strategy that
            marries technology with aesthetic appeal. Through collaborative
            ideation and open communication, we brought to life a digital
            presence that reflects the perfect fusion of creativity and
            technology, exemplifying our commitment to excellence.
          </Typography>
        </div>
      </div>
      <div>
        <Image
          src="/images/blogs/6.gif"
          alt="Ograviti Logo"
          width={1280}
          height={686}
          className="h-[686px] w-full rounded-[45px] object-cover"
          priority
        />
        <div className="flex flex-col gap-8 pt-8 md:flex-row">
          <Image
            src="/images/blogs/7.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] w-full rounded-[45px] object-cover md:h-[686px] md:w-1/2"
            priority
          />
          <Image
            src="/images/blogs/8.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] w-full rounded-[45px] object-cover md:h-[686px] md:w-1/2"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h2" className="text-primary">
          Exceptional Results: Ograviti Elevates Cosmetic Brand Presence.
        </Typography>
        <Typography variant="subtitle2">
          The achieved outcomes were outstanding, underscoring the seamless
          integration of technology and design for the Cosmetic Product brand.
          The digital platform not only effectively showcases the cosmetic
          products but also elevates the overall brand identity, exemplifying
          Ograviti&apos;s commitment to excellence.
        </Typography>
      </div>
      <div className="text-right font-bold underline md:text-2xl">See all</div>
      <Typography variant="subtitle1" className="hidden py-8 md:block">
        Other case studies
      </Typography>
      <div className="md:hidden">
        <CardSwiper
          cards={[
            <Card key={1} title="Change" subtitle="30% increase in sales" />,
            <Card key={2} title="Change" subtitle="30% increase in sales" />,
            <Card key={3} title="Change" subtitle="30% increase in sales" />,
          ]}
        />
      </div>
      <div className="hidden flex-col justify-center gap-8 pb-10 md:flex md:flex-row md:pt-10">
        {[1, 2, 3].map(v => (
          <div className="w-1/4" key={v}>
            <Card title="Change" subtitle="30% increase in sales" />
          </div>
        ))}
      </div>
    </main>
  )
}
