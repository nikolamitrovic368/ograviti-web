import { Typography } from '@/components/atoms/typography'

const PortableCareerComponent = {
  types: {},
  block: {
    h2: ({ children }: any) => <Typography variant="h2">{children}</Typography>,
  },
  list: {
    bullet: ({ children }: any) => (
      <Typography variant="subtitle2">
        <ul className="flex list-disc flex-col gap-1 pl-4">{children}</ul>
      </Typography>
    ),
    number: ({ children }: any) => (
      <Typography variant="subtitle2">
        <ol className="flex list-decimal flex-col gap-1 pl-4">{children}</ol>
      </Typography>
    ),
  },
}

export default PortableCareerComponent
