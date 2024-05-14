'use client'
import { Typography } from '@/components/atoms/typography'
import Card from '@/components/molecules/card'
import Companies from '@/components/molecules/companies'

export default function Page() {
  return (
    <main className="pb-28 md:pb-60">
      <div className="flex flex-col items-center gap-8 pb-14 md:gap-14">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Realizing</span> Possibilities, One
          Solution at a Time
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          Embark on a journey through our Case Studies, where real-world
          challenges meet innovative solutions. Explore how Ograviti transforms
          possibilities into success stories, showcasing the tangible impact of
          our tailored solutions in diverse business landscapes.
        </Typography>
      </div>
      <Companies />
      {[1, 2, 3].map(v => (
        <div className="flex flex-col gap-8 pb-10 md:flex-row md:pt-10" key={v}>
          {[1, 2, 3, 4].map(v => (
            <div className="w-full" key={v}>
              <Card
                title="Change"
                subtitle="30% increase in sales"
                onClick={() => alert('clicked card')}
              />
            </div>
          ))}
        </div>
      ))}
    </main>
  )
}
