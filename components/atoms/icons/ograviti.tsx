import Image from 'next/image'

const Ograviti = ({
  variants = 'primary',
}: {
  variants?: 'primary' | 'secondary'
}) => (
  <Image
    src={`/images/logos/ograviti${variants === 'secondary' ? '-white' : ''}.svg`}
    alt="Ograviti Logo"
    width={variants === 'secondary' ? 273 : 145}
    height={variants === 'secondary' ? 43 : 23}
    priority
  />
)

export default Ograviti
