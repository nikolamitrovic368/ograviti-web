import '@/styles/globals.css'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { draftMode } from 'next/headers'
import { VisualEditing } from 'next-sanity'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { fetchGlobalSeoData } from '@/sanity/services/globalSeo.service'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '100', '300', '700', '900'],
})

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchGlobalSeoData()
  return {
    title: data.globalSeoTitle,
    description: data.globalSeoDescription,
    openGraph: {
      images: [data.globalSeoImage.src],
    },
    keywords: data.globalKeywords,
  }
}

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
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
