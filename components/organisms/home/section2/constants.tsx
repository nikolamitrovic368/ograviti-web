import Image from 'next/image'

export const steps = [
  {
    title: 'How we started',
    content: (
      <>
        <Image
          className="w-[300px] pb-4 2xl:w-[550px]"
          src="/images/main/howto1.gif"
          width={426}
          height={240}
          alt="how to 1"
          unoptimized
        />
        <div className="flex flex-col gap-4 pl-4 2xl:gap-6">
          <div className="text-2xl font-semibold text-primary 2xl:text-3xl">
            How We Started
          </div>
          <div className="text-xl 2xl:text-2xl">
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
      <div className="flex flex-col gap-4 pl-4 2xl:gap-6">
        <div className="text-2xl font-semibold text-primary 2xl:text-3xl">
          Values - Reshaping Your Business
        </div>
        <div className="text-xl 2xl:text-2xl">
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
          className="h-[300px] w-1/3 object-cover 2xl:h-[500px]"
          src="/images/main/howto3.png"
          width={313}
          height={519}
          alt="how to 3"
        />
        <div className="flex flex-col gap-4 pl-4 2xl:gap-6">
          <div className="text-2xl font-semibold text-primary 2xl:text-3xl">
            Our Promises - High Quality, Every Time
          </div>
          <div className="text-xl 2xl:text-2xl">
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
      <div className="flex flex-col gap-4 2xl:gap-6">
        <div className="flex flex-col gap-4 pl-4 2xl:gap-6">
          <div className="text-2xl font-semibold text-primary 2xl:text-3xl">
            Results - The Ograviti Impact
          </div>
          <div className="text-xl 2xl:text-2xl">
            Witness the transformative outcomes of our collaborations, where
            measurable results speak volumes about our commitment to your
            success.
          </div>
        </div>
        <div>
          <Image
            className="h-auto w-[300px] 2xl:w-[550px]"
            src="/images/main/howto4.gif"
            width={426}
            unoptimized
            height={240}
            alt="how to 1"
          />
        </div>
      </div>
    ),
  },
]
