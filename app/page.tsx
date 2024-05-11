"use client"
import Section1 from '@/components/organisms/home/section1'
import Section2 from '@/components/organisms/home/section2'
import useMedia from '@/hooks/useMedia'

export default function Home() {
  const { isMd } = useMedia()
  return (
    <main>
      <Section1 />
      {isMd && <Section2 />}
    </main>
  )
}
