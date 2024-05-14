'use client'
import Image from 'next/image'

import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'
import Companies from '@/components/molecules/companies'

export default function Page() {
  return (
    <main className="pb-28 md:pb-60">
      <div className="flex w-full">
        <Typography variant="h1" className="w-2/3">
          <span className="text-primary">Creative</span> development and
          production for Cleano’s new commercial
        </Typography>
        <div className="flex w-1/3 flex-col justify-center gap-8 border-l pr-5">
          <div className="flex justify-between pl-32">
            <Typography variant="subtitle2">Completed</Typography>
            <Typography variant="subtitle2" className="text-primary">
              January 2023
            </Typography>
          </div>
          <div className="flex justify-between pl-32">
            <Typography variant="subtitle2">Client</Typography>
            <Typography variant="subtitle2" className="text-primary">
              Cleano
            </Typography>
          </div>
          <div className="flex justify-between pl-32">
            <Typography variant="subtitle2">Website</Typography>
            <Typography variant="subtitle2" className="text-primary">
              www.Cleano.com
            </Typography>
          </div>
          <div className="flex justify-between pl-32">
            <Typography variant="subtitle2">Main Service</Typography>
            <Typography variant="subtitle2" className="text-primary">
              Branding
            </Typography>
          </div>
        </div>
      </div>

      <Image
        src="/images/blogs/2.jpg"
        alt="Ograviti Logo"
        width={1280}
        height={686}
        className="h-[686px] w-full rounded-[45px] object-cover"
        priority
      />
      <div className="flex gap-8 pt-8">
        <Image
          src="/images/blogs/3.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[439px] w-1/3 rounded-[45px] object-cover"
          priority
        />
        <Image
          src="/images/blogs/4.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[439px] w-1/3 rounded-[45px] object-cover"
          priority
        />
        <Image
          src="/images/blogs/5.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[439px] w-1/3 rounded-[45px] object-cover"
          priority
        />
      </div>
      <div className="-mr-8 flex items-center justify-between py-14 xl:-mr-16 2xl:-mr-28">
        <div className="w-3/5 pr-32">
          <Typography variant="h2" className="text-primary">
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
          className="h-[155px]"
          priority
        />
      </div>
      <div className="-ml-8 flex items-center justify-between py-14 xl:-ml-16 2xl:-ml-28">
        <Image
          src="/images/logos/ograviti-glass1.svg"
          alt="Ograviti Logo"
          width={656}
          height={155}
          className="h-[155px]"
          priority
        />
        <div className="w-3/5 pl-32">
          <Typography variant="h2" className="text-primary">
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
      <Image
        src="/images/blogs/6.gif"
        alt="Ograviti Logo"
        width={1280}
        height={686}
        className="h-[686px] w-full rounded-[45px] object-cover"
        priority
      />
      <div className="flex gap-8 pt-8">
        <Image
          src="/images/blogs/7.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[686px] w-1/2 rounded-[45px] object-cover"
          priority
        />
        <Image
          src="/images/blogs/8.jpg"
          alt="Ograviti Logo"
          width={3840}
          height={2561}
          className="h-[686px] w-1/2 rounded-[45px] object-cover"
          priority
        />
      </div>
      <div className="py-14">
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
      <div className="text-right text-2xl font-bold underline">See all</div>
      <Typography variant="subtitle1" className="py-8">
        Other case studies
      </Typography>
      <div>
        <div className="flex flex-col justify-center gap-8 pb-10 md:flex-row md:pt-10">
          {[1, 2, 3].map(v => (
            <div className="w-1/4" key={v}>
              <Card
                title="Change"
                subtitle="30% increase in sales"
                onClick={() => alert('clicked card')}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
