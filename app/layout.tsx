import '@/styles/globals.css'

import { Lato } from 'next/font/google'
import { Suspense } from 'react'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { cn } from '@/utils/tailwind'

import Loading from './loading'

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
        <Suspense fallback={<Loading />}>
          <Header />
          <div className="px-8 xl:px-16 2xl:px-28">{children}</div>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
