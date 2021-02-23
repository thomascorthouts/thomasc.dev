import client from 'client'
import { Job } from './getJobForSlug'

export type Company = {
  name: string
  slug: Sanity.Slug
  website: string
  description: string
  logo: string
  roles: Job[]
}

const getCompanyForSlug = async (slug: string): Promise<Company> => {
  const companyData = await client.fetch(
    `
    *[_type == "company" && slug.current == $company][0]{
      ...,
      "roles": *[ _type == "job" && company._ref == ^._id ],
      "logo": logo.asset->url
    }
  `,
    { company: slug }
  )

  return companyData
}

export default getCompanyForSlug
