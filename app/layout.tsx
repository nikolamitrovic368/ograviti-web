import './globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Header from '@/components/organisms/header'
import { cn } from '@/utils/tailwind'
import { Lato } from 'next/font/google'

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
      <body className={cn(lato.className, 'px-28')}>
        <Header />
        {children}
      </body>
    </html>
  )
}
