import Companies from '../molecules/companies'
import Branding from './branding'
import CaseStudyList from './case-study-list'
import Gallery from './gallery'
import JourneyCarousel from './journey-carousel'
import SimpleText from './simple-text'
import TestimonialList from './testimonial-list'
import TextWithLogo from './text-with-logo'
import Video from './video'

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
          case 'gallery':
            return <Gallery {...module} key={module._key} />
          case 'text-with-logo':
            return <TextWithLogo {...module} key={module._key} />
          case 'video':
            return <Video {...module} key={module._key} />
          case 'simple-text':
            return <SimpleText {...module} key={module._key} />

          default:
            return <div data-type={module._type} key={module._key} />
        }
      })}
    </>
  )
}
