import '@/styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'swiper/css'

import { Lato } from 'next/font/google'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { cn } from '@/utils/tailwind'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '100', '300', '700', '900'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={cn(lato.className, 'overflow-x-hidden')}>
        <Header />
        <div className="px-8 xl:px-16 2xl:px-28">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
