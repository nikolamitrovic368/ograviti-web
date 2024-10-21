import { groq } from 'next-sanity'

export const imageProps = groq`
{
  ...asset-> {
    "src": url,
    ...metadata { ...dimensions { width, height }} 
  }
}
`

export const withImageProps = groq`
{
  ...,
  image ${imageProps}
}
`
export const seo = groq`seo ${withImageProps}`

export const modulesQuery = groq`
modules[]{ 
  ...,
  _type == 'blog-list' => { filteredCategory-> },
  _type == 'case-study-list' => { caseStudies[]->
    {
      _id,
      title,
      description,
      slug,
      image ${imageProps}
    }
  },
  _type == "companies" => @-> ${withImageProps},
  _type == "testimonial-list" => { testimonialCards[]-> },
  _type == "gallery" => {
    images[] ${imageProps}
  },
  _type == "video" => {
    ...,
    type == "file" => {
      "url": file.asset->url
    }
  }
}
`
