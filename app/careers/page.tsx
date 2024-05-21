import CareerCard from '@/components/molecules/career-card'
import Title from '@/components/molecules/title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="Careers"
        subtitle="Chart Your Path with Ograviti: Discover Exciting Opportunities and Join a Team Committed to Innovation and Growth."
      />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
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
