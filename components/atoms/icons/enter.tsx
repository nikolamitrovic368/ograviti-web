import Image from 'next/image'

import { cn } from '@/utils/tailwind'

const Enter = ({ className }: { className?: string }) => (
  <Image
    src="/images/icons/enter.svg"
    alt="Ograviti Logo"
    className={cn(className)}
    width={34}
    height={22}
    priority
  />
)

export default Enter
