export type Image = {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
}

export type Slug = {
  current: string
  _type: 'slug'
}

export type CommonSection = {
  title: string
  subtitle: string
  _key?: string
}

export type TeamMember = {
  instagram: string
  linkedin: string
  _updatedAt: string
  youtube: string
  image: Image
  _createdAt: string
  _type: teamMember
  _id: string
  role: string
  facebook: string
  _rev: string
  name: string
}

export type TeamMembers = TeamMember[]
