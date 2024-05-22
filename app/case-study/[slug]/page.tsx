import Image from 'next/image'

import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'
import SectionTitle from '@/components/molecules/section-title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex w-full flex-col items-center gap-8 lg:flex-row">
        <h1 className=" w-full text-center text-3xl font-bold md:text-5xl md:leading-[70px]  lg:w-2/3 lg:border-r lg:py-6 lg:text-left 2xl:py-12 2xl:text-6xl 2xl:text-[80px] 2xl:leading-[100px]">
          <span className="text-primary">Creative</span> development and
          production for Cleano’s new commercial
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
              January 2023
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
              Cleano
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
              www.Cleano.com
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
          className="h-[245px] w-full rounded-[45px] object-cover md:h-96 2xl:h-[686px]"
          priority
        />
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-3 md:gap-8 md:pt-8">
          <Image
            src="/images/blogs/3.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] rounded-[45px] object-cover md:h-72 2xl:h-[439px]"
            priority
          />
          <Image
            src="/images/blogs/4.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] rounded-[45px] object-cover md:h-72 2xl:h-[439px]"
            priority
          />
          <Image
            src="/images/blogs/5.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] rounded-[45px] object-cover md:h-72 2xl:h-[439px]"
            priority
          />
        </div>
      </div>
      <div className="mr-0 flex items-center justify-between gap-0 md:-mr-8 md:gap-16 xl:-mr-16 2xl:-mr-28 2xl:gap-28">
        <div className="flex-1">
          <Typography variant="h2" className="pb-4">
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
            Client background
          </Typography>
          <Typography variant="subtitle2">
            At Ograviti, the visionary creator of the Cosmetic Product brand
            approached us to seamlessly blend technology and design for a
            captivating digital presence. Fueled by their passion for beauty and
            innovation, our collaboration resulted in a platform that showcases
            their cosmetic products while enhancing the overall brand identity.
            At Ograviti, amplifying our client&apos;s vision is fundamental, and
            this project exemplifies that commitment.
          </Typography>
        </div>
      </div>
      <div>
        <Image
          src="/images/blogs/6.gif"
          alt="Ograviti Logo"
          width={1280}
          height={686}
          className="h-[245px] w-full rounded-[45px] object-cover md:h-96 2xl:h-[686px]"
          priority
          unoptimized
        />
        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <Image
            src="/images/blogs/7.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] rounded-[45px] object-cover md:h-[350px] 2xl:h-[686px]"
            priority
          />
          <Image
            src="/images/blogs/8.jpg"
            alt="Ograviti Logo"
            width={3840}
            height={2561}
            className="h-[245px] rounded-[45px] object-cover md:h-[350px] 2xl:h-[686px]"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SectionTitle
          title="Exceptional Results: Ograviti Elevates Cosmetic Brand Presence."
          subtitle="The achieved outcomes were outstanding, underscoring the seamless
            integration of technology and design for the Cosmetic Product brand.
            The digital platform not only effectively showcases the cosmetic
            products but also elevates the overall brand identity, exemplifying
            Ograviti's commitment to excellence."
          center
        />
      </div>
      <div className="flex flex-col">
        <div className="text-right font-bold underline md:text-xl 2xl:text-2xl">
          See all
        </div>
        <Typography variant="subtitle1" className="hidden md:block">
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
            <div className="w-1/3 xl:w-1/4" key={v}>
              <Card title="Change" subtitle="30% increase in sales" />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
