import Image from 'next/image'

const Ograviti = ({
  variants = 'primary',
}: {
  variants?: 'primary' | 'secondary'
}) => (
  <Image
    className="h-auto max-sm:w-[121px]"
    src={`/images/logos/ograviti${variants === 'secondary' ? '-white' : ''}.svg`}
    alt="Ograviti Logo"
    width={variants === 'secondary' ? 273 : 145}
    height={variants === 'secondary' ? 43 : 23}
    priority
  />
)

export default Ograviti
