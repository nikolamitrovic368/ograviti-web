import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from '@/components/atoms/icons'

export default function Socials() {
  return (
    <div className="flex gap-7 py-4">
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary"
      >
        <Linkedin className="h-auto w-[18px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary"
      >
        <Facebook className="h-auto w-[13px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary"
      >
        <Instagram className="h-auto w-[18px]" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#5c5c5c] transition-all duration-500 hover:border-primary"
      >
        <Youtube className="h-auto w-[18px]" />
      </a>
    </div>
  )
}
