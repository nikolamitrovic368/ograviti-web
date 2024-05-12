'use client'
import Section1 from '@/components/organisms/home/section1'
import Section2 from '@/components/organisms/home/section2'
import Section3 from '@/components/organisms/home/section3'
import Section4 from '@/components/organisms/home/section4'
import useMedia from '@/hooks/useMedia'

export default function Home() {
  const { isMd } = useMedia()
  return (
    <main>
      <Section1 />
      {isMd && (
        <div className="flex flex-col gap-12">
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      )}
    </main>
  )
}
