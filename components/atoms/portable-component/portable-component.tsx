import { PortableTextReactComponents } from 'next-sanity'

import { Typography } from '../typography'

export const PortableTitleWithBoldComponent: Partial<PortableTextReactComponents> =
  {
    marks: {
      strong: ({ children }) => (
        <strong className="text-primary">{children}</strong>
      ),
    },
    block: {
      normal: ({ children }) => (
        <Typography variant="h1" className="first text-center">
          {children}
        </Typography>
      ),
    },
  }
