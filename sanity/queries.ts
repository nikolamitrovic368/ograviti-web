import { defineQuery } from 'next-sanity'

// utils
export const testimonialField = /* groq */ `
*[_type == "testimonial"][0] {
  ...,
  testimonialCards[]->
}`

export const modulesQuery = /* groq */ `
modules[]{ 
  ...,
  _type == 'blog-list' => { filteredCategory-> },
  _type == 'case-study-list' => { caseStudies[]->
    {
      _id,
      title,
      description,
      slug,
      image
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
  _type == "companies" => @->,
  _type == "testimonial-list" => { testimonialCards[]-> },
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

export const richTextQuery = /* groq */ `
body[] {
    ...,
  _type == "video" => {
    ...,
    type == "file" => {
      "url": file.asset->url
    }
  }
}
`

export const careerCardQuery = /* groq */ `
{
  _id, title, subtitle, slug
}
`
export const footerQuery = defineQuery(`
*[_type == 'footer'][0]`)

export const homeQuery = defineQuery(`
*[_type == "page" && slug.current == 'index' && language == $locale][0] {
  ...,
  ${modulesQuery}
}`)

export const pageQuery = defineQuery(`
*[_type == "page" && slug.current == $slug && language == $locale][0] {
  ...,
  ${modulesQuery}
}`)

export const globalSeoQuery = defineQuery(`
*[_type == "globalSeo" && language == $locale][0]
`)

export const careerQuery = defineQuery(`
*[_type == "career" && slug.current == $slug && language == $locale][0]
`)

export const blogPageQuery = defineQuery(`
*[_type == "blogPage" && language == $locale][0] {
  ...,
  blogs[]-> {
    _id,
    title,
    subtitle,
    slug,
    image
  },
}
`)

export const blogQuery = defineQuery(`
*[_type == "blog" && slug.current == $slug && language == $locale][0] {
  ...,
  relatedBlogs[]-> {
    _id,
    title,
    subtitle,
    image,
    slug,
    image
  },
  ${richTextQuery}
}
`)

export const contactUsPageQuery = defineQuery(`
*[_type == "contactUsPage" && language == $locale][0]
`)

export const careersPageQuery = defineQuery(`
*[_type == "careersPage" && language == $locale][0] {
  ...,
  careers[]-> ${careerCardQuery}
}
`)

export const caseStudyPageQuery = defineQuery(`
*[_type == "caseStudyPage" && language == $locale][0] {
  ...,
  caseStudies[]-> {
    _id,
    title,
    description,
    slug,
    image
  },
}
`)

export const caseStudyQuery = defineQuery(`
*[_type == "caseStudy" && slug.current == $slug && language == $locale][0] {
  ...,
  ${modulesQuery},
  relatedCaseStudies[]-> {
    _id,
    title,
    description,
    slug,
    image
  }
}
`)

export const servicesPageQuery = defineQuery(`
*[_type == "servicesPage" && language == $locale][0] {
  ...,
  ${modulesQuery},
}
`)
