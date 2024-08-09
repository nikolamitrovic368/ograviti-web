import {Link} from '@/navigation'
import { ReactNode } from 'react'

export default function ServiceStep({
  title,
  content,
  icon: Icon,
  url,
}: {
  title: ReactNode
  content: ReactNode
  icon: any
  url: string
}) {
  return (
    <Link
      href="/services/4"
      className="group flex w-full overflow-hidden rounded-3xl bg-secondary md:h-[calc(561px/1.15)] md:w-[calc(410px/1.15)] 2xl:h-[561px] 2xl:w-[410px]"
    >
      <div className="flex w-1/2 flex-col items-start justify-between gap-4 px-3.5 pb-5 pt-7 md:px-6 md:pb-5 md:pt-7">
        <Icon className="h-14 w-auto fill-primary md:h-24 md:w-auto md:fill-white md:group-hover:fill-primary" />
        <div>
          <div className="text-lg md:text-xl 2xl:text-2xl">{title}</div>
          <div className="overflow-hidden transition-all duration-700 md:h-0 md:group-hover:h-[325px] 2xl:group-hover:h-[375px]">
            <div className="pt-4 text-sm md:text-base 2xl:text-lg">
              {content}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-1 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </Link>
  )
}
