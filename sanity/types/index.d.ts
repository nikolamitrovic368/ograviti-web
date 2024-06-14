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
