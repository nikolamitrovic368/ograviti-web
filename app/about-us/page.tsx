'use client'
import { motion, useAnimate } from 'framer-motion'
import Image from 'next/image'
import { Fragment } from 'react'

import { Button } from '@/components/atoms/button'
import CardSwiper from '@/components/atoms/card-swiper'
import { Typography } from '@/components/atoms/typography'
import Companies from '@/components/molecules/companies'
import ProfileCard from '@/components/molecules/profile-card'
import ContactForm from '@/components/organisms/contact-form'
import TransformationStories from '@/components/organisms/transformation-stories'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-14 md:pb-8">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">About</span> Us
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          Empowering Innovation, Enriching Futures: Explore the Ograviti Story
        </Typography>
      </div>
      <div className="mr-0 flex items-center justify-between md:-mr-8 xl:-mr-16 2xl:-mr-28">
        <div className="w-full md:w-3/5 md:pr-32">
          <Typography variant="h2" className="pb-4 text-primary">
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
          className="hidden h-[155px] md:block"
          priority
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden w-1/2 items-center justify-center md:flex">
          <Image
            src="/images/logos/ograviti-o.svg"
            alt="Ograviti Logo"
            width={435}
            height={435}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2 md:gap-14">
          <Typography variant="h2" className="pb-4 text-primary">
            Our Mission
          </Typography>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
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
          <Typography variant="h2" className="pb-4 text-center text-primary">
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
        <div className="w-full md:hidden">
          <CardSwiper
            cards={[
              <ProfileCard name="Danila Mark" role="CEO" key={1} />,
              <ProfileCard name="Danila Mark" role="CEO" key={2} />,
              <ProfileCard name="Danila Mark" role="CEO" key={3} />,
              <ProfileCard name="Danila Mark" role="CEO" key={4} />,
            ]}
          />
        </div>
        <div className="hidden w-full gap-8 md:flex">
          <ProfileCard name="Danila Mark" role="CEO" className="mb-48" />
          <ProfileCard name="Danila Mark" role="CEO" className="mt-48" />
          <ProfileCard name="Danila Mark" role="CEO" className="mb-48" />
          <ProfileCard name="Danila Mark" role="CEO" className="mt-48" />
        </div>
      </div>
      <div className="relative -mx-8 flex h-[501px] items-center justify-end overflow-hidden md:h-[958px] xl:-mx-16 2xl:-mx-28">
        <div className="absolute left-0 top-0 -z-10 -mt-28 w-[2000px] bg-[#232361]">
          <div className="pointer-events-none flex  scale-[.6] opacity-25 max-md:-translate-x-1/3 max-md:-translate-y-1/2 md:scale-100">
            {[...new Array(9)].map((_v, key) =>
              key % 2 ? (
                <motion.div
                  className="flex flex-col items-center"
                  key={key}
                  animate={{
                    y: [0, 103, 103, 0],
                  }}
                  transition={{
                    duration: 1.7,
                    ease: 'easeInOut',
                    times: [0, 0.33, 0.66, 1],
                    repeat: Infinity,
                    repeatDelay: 0.33,
                  }}
                >
                  {[...new Array(7)].map((_v, key) => (
                    <Fragment key={key}>
                      <Image
                        src="/images/bgs/o.svg"
                        className="-mt-[55px]"
                        alt="O Logo"
                        width={187}
                        height={187}
                        priority
                      />
                      <Image
                        src="/images/bgs/a.svg"
                        className=""
                        alt="O Logo"
                        width={272}
                        height={272}
                        priority
                      />
                      {[1, 2, 3].map(v => (
                        <Image
                          key={v}
                          src="/images/bgs/a.svg"
                          className="-mt-[171px]"
                          alt="O Logo"
                          width={272}
                          height={272}
                          priority
                        />
                      ))}
                    </Fragment>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="-mx-[52px] -mt-[31px] flex flex-col items-center"
                  key={key}
                  animate={{
                    y: [0, -100, -100, 0],
                  }}
                  transition={{
                    duration: 1.7,
                    ease: 'easeInOut',
                    times: [0, 0.33, 0.66, 1],
                    repeat: Infinity,
                    repeatDelay: 0.33,
                  }}
                >
                  {[...new Array(50)].map((_v, key) => (
                    <Image
                      key={key}
                      src="/images/bgs/a.svg"
                      className="-mt-[171px] rotate-180"
                      alt="O Logo"
                      width={272}
                      height={272}
                      priority
                    />
                  ))}
                </motion.div>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col gap-8 p-5 text-center md:w-1/2 md:p-10 md:text-left">
          <Typography variant="h1">
            We provide special offers for the best customers
          </Typography>
          <div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
      <TransformationStories />
      <div className="md:my-16"></div>
      <ContactForm />
    </main>
  )
}
