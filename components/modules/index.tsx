import Companies from '../molecules/companies'
import Branding from './branding'
import CaseStudyList from './case-study-list'
import JourneyCarousel from './journey-carousel'
import TestimonialList from './testimonial-list'

export default function Modules({ modules }: { modules?: Sanity.Module[] }) {
  return (
    <>
      {modules?.map(module => {
        switch (module._type) {
          case 'branding':
            return <Branding {...module} key={module._key} />
          case 'case-study-list':
            return <CaseStudyList {...module} key={module._key} />
          case 'journey-carousel':
            return <JourneyCarousel {...module} key={module._key} />
          case 'testimonial-list':
            return <TestimonialList {...module} key={module._key} />
          case 'companies':
            return <Companies {...module} key={module._key} />

          default:
            return <div data-type={module._type} key={module._key} />
        }
      })}
    </>
  )
}
