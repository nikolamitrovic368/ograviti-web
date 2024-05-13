import Image from 'next/image'
import Link from 'next/link'

export default function Socials() {
  return (
    <div className="flex gap-7">
      <Link href="https://linkedin.com">
        <Image
          src="/images/logos/linkedin.svg"
          width={45}
          height={45}
          alt="linkedin"
        />
      </Link>
      <Link href="https://linkedin.com">
        <Image
          src="/images/logos/facebook.svg"
          width={45}
          height={45}
          alt="facebook"
        />
      </Link>
      <Link href="https://linkedin.com">
        <Image
          src="/images/logos/instagram.svg"
          width={45}
          height={45}
          alt="instagram"
        />
      </Link>
      <Link href="https://linkedin.com">
        <Image
          src="/images/logos/youtube.svg"
          width={45}
          height={45}
          alt="youtube"
        />
      </Link>
    </div>
  )
}
