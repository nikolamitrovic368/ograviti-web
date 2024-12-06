import { ReactNode } from 'react'

export type ChildrenProps = {
  children: ReactNode
}

export type SlugProps = {
  params: { slug: string }
}

export type LocaleProps = {
  params: Promise<{ locale: string }>
}

export type SlugLocaleProps = {
  params: Promise<{ slug: string; locale: string }>
}
