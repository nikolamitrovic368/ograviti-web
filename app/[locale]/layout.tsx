import '@/styles/globals.css'

import { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { VisualEditing } from 'next-sanity'
import { Toaster } from 'sonner'

import DraftModeToast from '@/components/DraftModeToast'
import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import ClientLayout from '@/components/providers/client-layout'
import StyledComponentsRegistry from '@/components/providers/styled-components-registry'
import { routing } from '@/i18n/routing'
import { sanityFetch } from '@/sanity/client'
import { SanityLive } from '@/sanity/live'
import { footerQuery, globalSeoQuery } from '@/sanity/queries'
import { resolveOpenGraphImage } from '@/sanity/utils'
import { TRPCReactProvider } from '@/trpc/react'
import { LocaleProps } from '@/types'

import { handleError } from './client-utils'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '100', '300', '700', '900'],
})

export async function generateMetadata(props: LocaleProps): Promise<Metadata> {
  const params = await props.params

  const { locale } = params

  const data = await sanityFetch({
    query: globalSeoQuery,
    tags: ['globalSeo'],
    params: { locale },
  })
  const ogImage = resolveOpenGraphImage(data?.globalSeoImage)
  return {
    title: {
      template: `%s | ${data?.globalSeoTitle}`,
      default: data?.globalSeoTitle ?? 'Ograviti',
    },
    description: data?.globalSeoDescription,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
    keywords: data?.globalKeywords,
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
  const { isEnabled: isDraftMode } = await draftMode()

  const footer = await sanityFetch({
    query: footerQuery,
    tags: ['footer'],
  })

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
        </TRPCReactProvider>
        <Toaster />
        <SanityLive onError={handleError} />
        {isDraftMode && (
          <>
            <DraftModeToast />
            {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  )
}
