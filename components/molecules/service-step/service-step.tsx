import Link from 'next/link'
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
      className="group mx-0 flex w-full scale-90 overflow-hidden rounded-3xl bg-secondary md:-mx-3 md:h-[584px] md:w-[430px] 2xl:mx-0 2xl:h-[730px] 2xl:w-[538px] 2xl:scale-100"
    >
      <div className="flex w-1/2 flex-col items-start justify-between gap-4 px-3.5 pb-5 pt-7 md:px-6 md:pb-7 md:pt-7 2xl:pb-10 2xl:pt-14">
        <Icon className="h-14 w-auto fill-primary md:h-24 md:w-auto md:fill-white md:group-hover:fill-primary" />
        <div>
          <div className="text-lg md:text-2xl 2xl:text-3xl">{title}</div>
          <div className="overflow-hidden transition-all duration-700 md:h-0 md:group-hover:h-[376px] 2xl:group-hover:h-[400px]">
            <div className="pt-4 text-sm md:text-xl 2xl:pt-8 2xl:text-2xl">
              {content}
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </Link>
  )
}
