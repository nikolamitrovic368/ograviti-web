import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from '@/components/atoms/icons'

export default function Socials() {
  return (
    <div className="flex gap-7 py-4 md:gap-4 2xl:gap-7">
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary md:h-10 md:w-10 2xl:h-12 2xl:w-12"
      >
        <Linkedin className="h-auto w-[18px] md:w-4 2xl:w-[18px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary md:h-10 md:w-10 2xl:h-12 2xl:w-12"
      >
        <Facebook className="h-auto w-[13px] md:w-3 2xl:w-[13px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary md:h-10 md:w-10 2xl:h-12 2xl:w-12"
      >
        <Instagram className="h-auto w-[18px] md:w-4 2xl:w-[18px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary md:h-10 md:w-10 2xl:h-12 2xl:w-12"
      >
        <Youtube className="h-auto w-[18px] md:w-4 2xl:w-[18px]" />
      </a>
    </div>
  )
}
