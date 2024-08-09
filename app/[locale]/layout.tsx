import '@/styles/globals.css'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { draftMode } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import { fetchGlobalSeoData } from '@/sanity/services/globalSeo.service'
import { fetchFooterData } from '@/sanity/services/layout.service'

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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)

  const messages = await getMessages()

  const footer = await fetchFooterData()

  return (
    <html lang={locale}>
      <body className={lato.className}>
        <NextIntlClientProvider messages={messages}>
          <Header footer={footer} />
          <div className="px-8 xl:px-16 2xl:px-28">{children}</div>
          <Footer data={footer} />
          {draftMode().isEnabled && <VisualEditing />}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
