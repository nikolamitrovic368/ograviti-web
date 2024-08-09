import { ReactNode } from 'react'

export type ChildrenProps = {
  children: ReactNode
}

export type SlugProps = {
  params: { slug: string }
}

export type LocaleProps = {
  params: { locale: string }
}
