import { Brandings } from '@/sanity/queries/pages/home.query'

export const mapSteps = (data: Brandings) => [
  {
    title: 'Branding',
    subtitle: data.brandingSubtitle,
    image: 'branding',
    width: 50,
    height: 146,
    className: 'top-[46%] left-[-8%]',
    deg: 0,
  },
  {
    title: 'Data Analysis',
    subtitle: data.dataAnalysisSubtitle,
    image: 'data-analysis',
    width: 166,
    height: 202,
    className: 'top-[4%] left-[-6%]',
    deg: 41,
  },
  {
    title: 'UI & UX',
    subtitle: data.uiuxSubtitle,
    image: 'ui-ux',
    width: 96,
    height: 34,
    className: 'top-[-7%] left-[42.5%]',
    deg: 95,
  },
  {
    title: 'Development',
    subtitle: data.developmentSubtitle,
    image: 'development',
    width: 155,
    height: 178,
    className: 'top-[4%] left-[84%]',
    deg: 148,
  },
  {
    title: 'Digital Marketing',
    subtitle: data.digitalMarketingSubtitle,
    image: 'digital-marketing',
    width: 56,
    height: 239,
    className: 'top-[36%] left-[101%]',
    deg: 188,
  },
]
