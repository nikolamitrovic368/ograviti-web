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
  _type == 'team' => {
    ...,
    members[]-> {
      ...,
      "name":  coalesce(name[_key == $locale][0].value, "Missing translation"),
      "role":  coalesce(role[_key == $locale][0].value, "Missing translation")
    }
  },
  _type == "companies" => @-> ${withImageProps},
  _type == "image-with-list" => ${withImageProps},
  _type == "testimonial-list" => { testimonialCards[]-> },
  _type == "gallery" => {
    images[] ${imageProps}
  },
  _type == "video" => {
    ...,
    type == "file" => {
      "url": file.asset->url
    }
  },
  _type == "contact-form" => @->{
    ...,
    "title":  coalesce(title[_key == $locale][0].value, "Missing translation"),
    "offices": offices[]{
      ...,
      "name":  coalesce(name[_key == $locale][0].value, "Missing translation"),
      "address":  coalesce(address[_key == $locale][0].value, "Missing translation"),
    }
  },
}
`
export const richTextQuery = (name: string = 'body') => groq`
  ${name}[] {
      ...,
    _type == "video" => {
      ...,
      type == "file" => {
        "url": file.asset->url
      }
    }
  }
`
