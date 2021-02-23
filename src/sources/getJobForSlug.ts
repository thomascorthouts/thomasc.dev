import client from 'client'

export type Job = {
  title: string
  slug: Sanity.Slug
  description: string
  location: string
  startDate: Date
  endDate?: Date
  company: string
}

const getJobForSlug = async (slug: string): Promise<Job> => {
  const jobData = await client.fetch(
    `
    *[_type == "job" && slug.current == $job]{
      "company": company->name,
      ...
    }[0]
  `,
    { job: slug }
  )

  return jobData
}

export default getJobForSlug
