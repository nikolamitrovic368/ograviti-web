import { cn } from '@/utils/tailwind'
import Image from 'next/image'

const Menu = ({ className }: { className?: string }) => (
  <Image
    src="/images/icons/menu.svg"
    alt="Ograviti Logo"
    width={28}
    height={24}
    className={cn(className)}
    priority
  />
)

export default Menu
