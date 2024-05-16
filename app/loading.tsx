import { Ograviti } from '@/components/atoms/icons'

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-background">
      <div className="mt-[50vh] flex items-center justify-center">
        <Ograviti className="w-[500px] animate-pulse" />
      </div>
    </div>
  )
}
