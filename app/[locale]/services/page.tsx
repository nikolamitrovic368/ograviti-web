import { Step1, Step2, Step3, Step4, Step5 } from '@/components/atoms/icons'
import Modules from '@/components/modules'
import Title from '@/components/modules/heading-title'
import ServiceStep from '@/components/molecules/service-step'
import { fetchServicesPageData } from '@/sanity/services'
import { LocaleProps } from '@/types'

export default async function ServicesPage({ params }: LocaleProps) {
  const { locale } = await params
  const {
    title,
    subtitle,
    service1,
    service2,
    service3,
    service4,
    service5,
    modules,
  } = await fetchServicesPageData(locale)
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-wrap justify-center gap-8 md:gap-4 2xl:gap-8">
        <ServiceStep
          url={service1.image.src}
          title={
            // eslint-disable-next-line react/jsx-no-literals
            <>
              01. <br />
              {service1.title}
            </>
          }
          content={service1.subtitle}
          icon={Step1}
        />
        <ServiceStep
          url={service2.image.src}
          title={
            // eslint-disable-next-line react/jsx-no-literals
            <>
              02. <br />
              {service2.title}
            </>
          }
          content={service2.subtitle}
          icon={Step2}
        />
        <ServiceStep
          url={service3.image.src}
          title={
            // eslint-disable-next-line react/jsx-no-literals
            <>
              03. <br />
              {service3.title}
            </>
          }
          content={service3.subtitle}
          icon={Step3}
        />
        <ServiceStep
          url={service4.image.src}
          title={
            // eslint-disable-next-line react/jsx-no-literals
            <>
              04. <br />
              {service4.title}
            </>
          }
          content={service4.subtitle}
          icon={Step4}
        />
        <ServiceStep
          url={service5.image.src}
          title={
            // eslint-disable-next-line react/jsx-no-literals
            <>
              05. <br />
              {service5.title}
            </>
          }
          content={service5.subtitle}
          icon={Step5}
        />
      </div>
      <Modules modules={modules} />
    </main>
  )
}
