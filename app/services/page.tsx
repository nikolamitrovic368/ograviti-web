import { Step1, Step2, Step3, Step4, Step5 } from '@/components/atoms/icons'
import ServiceStep from '@/components/molecules/service-step'
import Title from '@/components/molecules/title'
import ContactForm from '@/components/organisms/contact-form'
import TransformationStories from '@/components/organisms/transformation-stories'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="Our Services"
        subtitle="At Ogravity, we offer a comprehensive range of services to meet your digital needs. From branding to digital marketing, our team is here to help you achieve your goals and stand out in the digital landscape."
      />
      <div className="flex flex-wrap justify-center 2xl:gap-8">
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
      <div className="md:my-4 2xl:my-16"></div>
      <ContactForm />
    </main>
  )
}
