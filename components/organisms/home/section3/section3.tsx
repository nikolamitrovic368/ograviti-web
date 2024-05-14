import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'
import Companies from '@/components/molecules/companies'

export default function Section3() {
  return (
    <div className="pt-14">
      <Typography variant="h2" type="primary">
        Realizing Possibilities, One Solution at a Time
      </Typography>
      <Typography variant="subtitle2" className="w-2/3 py-2">
        Embark on a journey through our Case Studies, where real-world
        challenges meet innovative solutions. Explore how Ograviti transforms
        possibilities into success stories, showcasing the tangible impact of
        our tailored solutions in diverse business landscapes.
      </Typography>
      <div className="flex pt-10">
        <div className="w-1/4 px-4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4 px-4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4 px-4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
        <div className="w-1/4 px-4">
          <Card title="Change" subtitle="30% increase in sales" />
        </div>
      </div>
      <Companies />
    </div>
  )
}
