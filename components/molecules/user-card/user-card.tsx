import Image from 'next/image'

import Rating from '@/components/atoms/rating'

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
    <div className="flex h-[322px] flex-col justify-between gap-4 rounded-3xl bg-secondary px-4 py-6 md:h-[372px] md:w-[320px] md:py-5 2xl:h-[465px] 2xl:w-[400px] 2xl:px-7 2xl:py-10">
      <div className="text-center md:text-xl 2xl:text-2xl 2xl:leading-9">
        {description}
      </div>
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
