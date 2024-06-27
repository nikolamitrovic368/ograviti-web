import { Rating as OriginRating, RatingProps } from 'react-simple-star-rating'

import { cn } from '@/utils/common'

import { Star } from '../icons'

export default function Rating({ className, ...props }: RatingProps) {
  return (
    <OriginRating
      initialValue={3}
      className={cn(
        '[&>.empty-icons]:flex [&>.empty-icons]:gap-1 [&>.filled-icons]:flex [&>.filled-icons]:gap-1',
        className,
      )}
      fillIcon={
        <div>
          <Star className="inline" />
        </div>
      }
      emptyIcon={
        <div>
          <Star className="inline [&_path]:fill-white" />
        </div>
      }
      {...props}
    />
  )
}
