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

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="About Us"
        subtitle="Empowering Innovation, Enriching Futures: Explore the Ograviti Story"
      />
      <div className="mr-0 flex items-center justify-between xl:-mr-16 2xl:-mr-28">
        <div className="w-full xl:h-3/5 xl:pr-24 2xl:pr-32">
          <Typography variant="h2" className="pb-4">
            Our Story
          </Typography>
          <Typography variant="subtitle2">
            At Ograviti, we believe in the power of innovation to transform
            businesses and enrich lives. Founded in 2016 in Switzerland, our
            journey began with a vision to redefine the software landscape. From
            humble beginnings, we have evolved into a dynamic software house,
            driven by a passion for excellence and a commitment to pushing the
            boundaries of technology.
          </Typography>
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
            Our Mission
          </Typography>
          <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-6 xl:grid-cols-2 xl:gap-8">
            <div>
              <Typography variant="h3" className="pb-4 text-primary">
                Innovation
              </Typography>
              <Typography variant="subtitle2" className="">
                We strive to innovate and push the boundaries of what&apos;s
                possible in the digital realm
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="pb-4 text-primary">
                Excellence
              </Typography>
              <Typography variant="subtitle2" className="">
                We are committed to delivering excellence in every aspect of our
                work, ensuring exceptional results
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="pb-4 text-primary">
                Collaboration
              </Typography>
              <Typography variant="subtitle2" className="">
                We believe in the power of collaboration and work closely with
                our clients to achieve shared goals
              </Typography>
            </div>
            <div>
              <Typography variant="h3" className="pb-4 text-primary">
                Impact
              </Typography>
              <Typography variant="subtitle2" className="">
                Our mission is to make a meaningful impact through our
                solutions, driving success and growth for businesses
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Companies />
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full md:w-4/5">
          <Typography variant="h2" className="pb-4 text-center">
            Meet Our Team
          </Typography>
          <Typography variant="subtitle2" className=" text-center">
            At Ograviti, our team is our greatest asset. Comprised of talented
            individuals from diverse backgrounds, we come together to form a
            dynamic and innovative workforce. With expertise spanning software
            development, design, project management, and more, we are united by
            a shared passion for creating impactful solutions and driving
            positive change.
          </Typography>
        </div>
        <div className="w-full sm:hidden">
          <CardSwiper
            cards={[
              <ProfileCard name="Danila Mark" role="CEO" key={1} />,
              <ProfileCard name="Danila Mark" role="CEO" key={2} />,
              <ProfileCard name="Danila Mark" role="CEO" key={3} />,
              <ProfileCard name="Danila Mark" role="CEO" key={4} />,
            ]}
          />
        </div>
        <div className="hidden w-full grid-cols-2 gap-4 sm:grid lg:grid-cols-4 2xl:gap-8">
          <ProfileCard
            name="Danila Mark"
            role="CEO"
            className="xl:mb-14 2xl:mb-48"
          />
          <ProfileCard
            name="Danila Mark"
            role="CEO"
            className="xl:mt-14 2xl:mt-48"
          />
          <ProfileCard
            name="Danila Mark"
            role="CEO"
            className="xl:mb-14 2xl:mb-48"
          />
          <ProfileCard
            name="Danila Mark"
            role="CEO"
            className="xl:mt-14 2xl:mt-48"
          />
        </div>
      </div>

      <LogoBackground>
        <div className="flex flex-col gap-16 p-5 text-center md:w-1/2 md:p-10 md:text-left">
          <Typography variant="h1">
            We provide special offers for the best customers
          </Typography>
          <div className="w-full">
            <Link variant="button" href="/contact-us" className="inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </LogoBackground>

      <TransformationStories />
      <div className="xl:my-4 2xl:my-16"></div>
      <ContactForm />
    </main>
  )
}
