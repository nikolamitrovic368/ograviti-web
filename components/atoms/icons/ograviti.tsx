import Image from 'next/image'

import { cn } from '@/utils/tailwind'

const Ograviti = ({
  variants = 'primary',
  className,
}: {
  variants?: 'primary' | 'secondary'
  className?: string
}) => (
  <Image
    className={cn('h-auto max-sm:w-[121px]', className)}
    src={`/images/logos/ograviti${variants === 'secondary' ? '-white' : ''}.svg`}
    alt="Ograviti Logo"
    width={variants === 'secondary' ? 273 : 145}
    height={variants === 'secondary' ? 43 : 23}
    priority
  />
)

export default Ograviti
