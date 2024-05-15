'use client'

import { Step1 } from '@/components/atoms/icons'
import Step2 from '@/components/atoms/icons/step2'
import Step3 from '@/components/atoms/icons/step3'
import Step4 from '@/components/atoms/icons/step4'
import Step5 from '@/components/atoms/icons/step5'
import { Typography } from '@/components/atoms/typography'
import ServiceStep from '@/components/molecules/service-step'
import ContactForm from '@/components/organisms/contact-form'
import TransformationStories from '@/components/organisms/transformation-stories'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-14 md:pb-8">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Our</span> Services
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          At Ogravity, we offer a comprehensive range of services to meet your
          digital needs. From branding to digital marketing, our team is here to
          help you achieve your goals and stand out in the digital landscape.
        </Typography>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <ServiceStep
          url="/images/services/1.jpg"
          title={
            <>
              01. <br />
              Branding
            </>
          }
          content="Elevate your brand identity with our branding services. From logo design to brand strategy, we'll help you create a memorable and impactful brand presence that resonates with your audience."
          icon={Step1}
        />
        <ServiceStep
          url="/images/services/2.jpg"
          title={
            <>
              02. <br />
              UI/UX Design
            </>
          }
          content="Deliver exceptional user experiences with our UI/UX design services. Our team specializes in designing intuitive and visually appealing interfaces that enhance user engagement and drive conversions."
          icon={Step2}
        />
        <ServiceStep
          url="/images/services/3.jpg"
          title={
            <>
              03. <br />
              Data Analysis
            </>
          }
          content="Maximize data's potential with our analysis services. From market research to visualization, we provide actionable insights for informed decisions and sustained growth"
          icon={Step3}
        />
        <ServiceStep
          url="/images/services/4.jpg"
          title={
            <>
              04. <br />
              Development
            </>
          }
          content="Turn your vision into reality with our development services. Whether it's websites or mobile apps, our expert team crafts custom solutions tailored to your needs."
          icon={Step4}
        />
        <ServiceStep
          url="/images/services/5.jpg"
          title={
            <>
              05. <br />
              UI/UX Design
            </>
          }
          content="Maximize your online presence and reach with our digital marketing services. From SEO to social media marketing, we'll help you drive traffic, generate leads, and grow your business in the digital age"
          icon={Step5}
        />
      </div>
      <TransformationStories hideTitle />
      <div className="md:my-16"></div>
      <ContactForm />
    </main>
  )
}