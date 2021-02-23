namespace Sanity {
  type Slug = {
    _type: 'slug'
    current: string
  }

  type Image = {
    _type: 'image'
    asset: {
      url: string
    }
  }
}
