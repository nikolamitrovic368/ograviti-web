import Image from 'next/image'
import { Rating as OriginRating, RatingProps } from 'react-simple-star-rating'

import { cn } from '@/utils/tailwind'

export default function Rating({ className, ...props }: RatingProps) {
  return (
    <OriginRating
      initialValue={5}
      className={cn(
        '[&>.filled-icons]:flex [&>.filled-icons]:gap-1 [&>.empty-icons]:flex [&>.empty-icons]:gap-1',
        className,
      )}
      fillIcon={
        <Image
          className="inline"
          src="/images/icons/star.svg"
          width={20}
          height={20}
          alt="star"
        />
      }
      emptyIcon={
        <Image
          className="inline"
          src="/images/icons/star.svg"
          width={20}
          height={20}
          alt="star"
        />
      }
      {...props}
    />
  )
}
