import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'wqbygf45',
  dataset: 'production',
  useCdn: true,
})
