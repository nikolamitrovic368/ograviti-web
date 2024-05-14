'use client'
import { Typography } from '@/components/atoms/typography'
import CareerCard from '@/components/molecules/career-card'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <Typography variant="h1" className="text-center">
          <span className="text-primary">Careers</span>
        </Typography>
        <Typography variant="subtitle1" className="text-center md:w-2/3">
          Chart Your Path with Ograviti: Discover Exciting Opportunities and
          Join a Team Committed to Innovation and Growth.
        </Typography>
      </div>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-8  gap-y-6 md:grid-cols-3 md:gap-y-20">
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
    </main>
  )
}
