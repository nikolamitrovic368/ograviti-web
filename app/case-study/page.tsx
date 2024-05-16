'use client'
import Card from '@/components/molecules/card'
import Companies from '@/components/molecules/companies'
import Title from '@/components/molecules/title'

export default function Page() {
  return (
    <main className="flex flex-col gap-8 md:gap-14">
      <Title
        title="Realizing Possibilities, One Solution at a Time"
        subtitle="Embark on a journey through our Case Studies, where real-world challenges meet innovative solutions. Explore how Ograviti transforms possibilities into success stories, showcasing the tangible impact of our tailored solutions in diverse business landscapes."
      />
      <Companies />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...new Array(12)].map((_v, key) => (
          <Card title="Change" subtitle="30% increase in sales" key={key} />
        ))}
      </div>
    </main>
  )
}
