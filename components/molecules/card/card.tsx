import { IconButton } from '@/components/atoms/icon-button'
import { Right } from '@/components/atoms/icons'

export default function Card({
  title,
  subtitle,
  onClick,
}: {
  title: string
  subtitle: string
  onClick: () => void
}) {
  return (
    <div
      className="group flex h-[65vh] w-full cursor-pointer items-center justify-center rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)]"
      onClick={onClick}
    >
      <div className="flex h-[calc(65vh-4px)] w-[calc(100%-4px)] items-center justify-center rounded-[45.84px] bg-secondary">
        <div className="group h-[calc(65vh-24px)] w-[calc(100%-20px)] flex-col justify-center overflow-hidden">
          <div
            className={`flex h-[calc(65vh-24px)] w-full items-center justify-center overflow-hidden rounded-[34.38px] bg-[url(/images/card/1.png)] bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:h-[calc(65vh-210px)]`}
          ></div>
          <div className="flex h-28 items-center justify-center text-center text-[4vw]">
            {title}
          </div>
          <div className="flex items-center justify-between px-1">
            <div className="pl-4 text-xl">{subtitle}</div>
            <div>
              <IconButton variant="secondary">
                <Right />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
