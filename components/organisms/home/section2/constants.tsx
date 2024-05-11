import Image from 'next/image'

export const steps = [
  {
    title: 'How we started',
    content: (
      <>
        <Image
          className="w-[700px] pb-5"
          src="/images/main/howto1.gif"
          width={426}
          height={240}
          alt="how to 1"
        />
        <div className="px-4">
          <div className="text-3xl text-primary py-4 font-semibold">
            How We Started
          </div>
          <div className="text-2xl py-2">
            Embark on a narrative that traces our humble beginnings, founded on
            innovation and a vision to transform the software landscape.
          </div>
        </div>
      </>
    ),
  },
  {
    title: 'Values',
    content: (
      <div className="px-4">
        <div className="text-3xl text-primary py-4 font-semibold">
          Values - Reshaping Your Business
        </div>
        <div className="text-2xl py-2 leading-9">
          Dive into the essence of Ograviti, where our core values serve as
          guiding lights, shaping businesses through innovation, adaptability,
          and a commitment to excellence. Explore how we redefine industry
          norms, fostering growth and resilience. Discover a narrative of
          transformative values that propels Ograviti beyond conventional
          boundaries—a journey of reshaping businesses for a dynamic digital
          era.
        </div>
      </div>
    ),
  },
  {
    title: 'Our promises',
    content: (
      <div className="flex">
        <Image
          className="py-5 w-1/3 h-[587px] object-cover"
          src="/images/main/howto3.png"
          width={313}
          height={519}
          alt="how to 3"
        />
        <div className="px-4">
          <div className="text-3xl text-primary py-4 font-semibold">
            Our Promises - High Quality, Every Time
          </div>
          <div className="text-2xl py-2 leading-9">
            Explore our unwavering dedication to delivering high-quality
            solutions, where precision meets innovation, and client satisfaction
            is non-negotiable.
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Results',
    content: (
      <>
        <div className="px-4">
          <div className="text-3xl text-primary py-4 font-semibold">
            Results - The Ograviti Impact
          </div>
          <div className="text-2xl py-2 leading-9">
            Witness the transformative outcomes of our collaborations, where
            measurable results speak volumes about our commitment to your
            success.
          </div>
        </div>
        <Image
          className="w-[700px] py-5"
          src="/images/main/howto4.gif"
          width={426}
          height={240}
          alt="how to 1"
        />
      </>
    ),
  },
]
