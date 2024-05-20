import '@/styles/globals.css'

import { Lato } from 'next/font/google'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'

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
      <body className={lato.className}>
        <Header />
        <div className="px-8 xl:px-16 2xl:px-28">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
