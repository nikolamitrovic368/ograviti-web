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
    <div className="flex h-[465px] w-[400px] flex-col justify-between rounded-3xl bg-secondary px-7 py-10">
      <Typography variant="subtitle2" className="text-center">
        {description}
      </Typography>
      <div className="flex flex-col items-center justify-center">
        <Rating className="pb-6" initialValue={rate} />

        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={img}
          width={40}
          height={40}
          alt="user-avatar"
        />
        <div className="py-1 text-lg font-semibold text-white">{name}</div>
        <div className="text-white/opacity-60 text-sm font-normal text-action">
          {role}
        </div>
      </div>
    </div>
  )
}
