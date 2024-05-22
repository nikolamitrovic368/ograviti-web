import Section1 from '@/components/organisms/home/section1'
import Section2 from '@/components/organisms/home/section2'
import Section3 from '@/components/organisms/home/section3'
import TransformationStories from '@/components/organisms/transformation-stories'

export default function Home() {
  return (
    <main className="flex flex-col gap-12 md:-mt-14">
      <Section1 />
      <Section2 />
      <Section3 />
      <TransformationStories />
    </main>
  )
}
