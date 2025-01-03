import '@/styles/globals.css'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'

import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import ClientLayout from '@/components/providers/client-layout'
import StyledComponentsRegistry from '@/components/providers/styled-components-registry'
import { routing } from '@/i18n/routing'
import { fetchGlobalSeoData } from '@/sanity/services/globalSeo.service'
import { fetchFooterData } from '@/sanity/services/layout.service'
import { TRPCReactProvider } from '@/trpc/react'
import { LocaleProps } from '@/types'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '100', '300', '700', '900'],
})

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params

  const { locale } = params

  const data = await fetchGlobalSeoData(locale)
  return {
    title: data.globalSeoTitle,
    description: data.globalSeoDescription,
    openGraph: {
      images: [data.globalSeoImage.src],
    },
    keywords: data.globalKeywords,
  }
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
  }>,
) {
  const params = await props.params

  const { locale } = params

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  const { children } = props

  const messages = await getMessages()

  const footer = await fetchFooterData()

  return (
    <html lang={locale}>
      <body className={lato.className}>
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages}>
            <StyledComponentsRegistry>
              <ClientLayout>
                <Header footer={footer} />
                <div className="px-8 xl:px-16 2xl:px-28">{children}</div>
                <Footer data={footer} />
              </ClientLayout>
            </StyledComponentsRegistry>
          </NextIntlClientProvider>
          {(await draftMode()).isEnabled && <VisualEditing />}
        </TRPCReactProvider>
      </body>
    </html>
  )
}
