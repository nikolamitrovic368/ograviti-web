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
    <div className="group flex w-full overflow-hidden rounded-3xl bg-secondary md:h-[730px] md:w-[538px]">
      <div className="flex w-1/2 flex-col justify-between gap-4 px-3.5 pb-5 pt-7 md:px-6 md:pb-10 md:pt-14">
        <Icon className="h-14 w-14 fill-primary md:h-24 md:w-24 md:fill-white md:group-hover:fill-primary" />
        <div>
          <div className="text-lg md:text-3xl">{title}</div>

          <div className="overflow-hidden text-lg transition-all duration-700 md:h-0 md:text-2xl md:group-hover:h-[400px]">
            <div className="pt-4 text-sm md:pt-8 md:text-2xl">{content}</div>
          </div>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  )
}
