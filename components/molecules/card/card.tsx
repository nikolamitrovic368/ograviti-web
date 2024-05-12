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
      className="group w-full h-[65vh] rounded-[45.84px] [background-image:linear-gradient(135deg,#1e1e1e_74%,rgba(255,255,255,0.6)_100%)] flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="w-[calc(100%-4px)] h-[calc(65vh-4px)] bg-secondary rounded-[45.84px] flex justify-center items-center">
        <div className="group w-[calc(100%-20px)] h-[calc(65vh-24px)] overflow-hidden flex-col justify-center">
          <div
            className={`w-full h-[calc(65vh-24px)] group-hover:h-[calc(65vh-210px)] transition-all duration-500 bg-[url(/images/card/1.png)] bg-no-repeat bg-cover bg-center rounded-[34.38px] overflow-hidden flex justify-center items-center`}
          ></div>
          <div className="text-center text-[4vw] h-28 flex justify-center items-center">
            {title}
          </div>
          <div className="flex justify-between items-center px-1">
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
