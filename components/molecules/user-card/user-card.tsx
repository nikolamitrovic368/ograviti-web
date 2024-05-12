import Image from 'next/image'

import Rating from '@/components/atoms/rating'
import { Typography } from '@/components/atoms/typography'
type UserCardProps = {
  user: {
    description: string
    rate: number
    img: string
    name: string
    role: string
  }
}

export default function UserCard({
  user: { description, rate, img, name, role },
}: UserCardProps) {
  return (
    <div className="w-[400px] h-[465px] px-7 py-10 bg-secondary rounded-3xl flex flex-col justify-between">
      <Typography variant="subtitle2" className="text-center">
        {description}
      </Typography>
      <div className="flex flex-col justify-center items-center">
        <Rating className="pb-6" initialValue={rate} />

        <Image
          className="w-12 h-12 object-cover rounded-full"
          src={img}
          width={40}
          height={40}
          alt="user-avatar"
        />
        <div className="text-white text-lg font-semibold py-1">{name}</div>
        <div className="text-white/opacity-60 text-sm font-normal text-action">
          {role}
        </div>
      </div>
    </div>
  )
}
