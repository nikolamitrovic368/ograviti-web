import Card from '@/components/molecules/card'
import Companies from '@/components/molecules/companies'
import SectionTitle from '@/components/molecules/section-title'

export default function Section3() {
  return (
    <div className="pt-14">
      <SectionTitle
        title="Realizing Possibilities, One Solution at a Time"
        subtitle=" Embark on a journey through our Case Studies, where real-world
      challenges meet innovative solutions. Explore how Ograviti transforms
      possibilities into success stories, showcasing the tangible impact of
      our tailored solutions in diverse business landscapes."
      />
      <div className="flex py-10 md:gap-4 2xl:gap-8">
        <div className="w-1/4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
      </div>
      <Companies />
    </div>
  )
}
