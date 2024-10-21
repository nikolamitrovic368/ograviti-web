'use client'

import { ReactNode } from 'react'
import { type DefaultTheme, ThemeProvider } from 'styled-components'

const theme: DefaultTheme = {
  colors: {},
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
