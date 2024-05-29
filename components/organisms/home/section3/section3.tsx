import CardSwiper from '@/components/atoms/card-swiper'
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
        className="text-center md:text-left"
      />
      <div className="py-5 md:hidden">
        <CardSwiper
          cards={[
            <Card key={1} title="Change" subtitle="30% increase in sales" />,
            <Card key={2} title="Change" subtitle="30% increase in sales" />,
            <Card key={3} title="Change" subtitle="30% increase in sales" />,
          ]}
        />
      </div>
      <div className="hidden grid-cols-2 py-10 md:grid md:gap-4 lg:grid-cols-4 2xl:gap-8">
        <Card title="Change" subtitle="30% increase in sales" />
        <Card title="Change" subtitle="30% increase in sales" />
        <Card title="Change" subtitle="30% increase in sales" />
        <Card title="Change" subtitle="30% increase in sales" />
      </div>
      <Companies />
    </div>
  )
}
