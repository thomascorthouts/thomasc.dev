export default {
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // source: async job => {
        //   const company = await client.getDocument(job.company._ref)
        //   return `${job.title}-${company.name}`
        // },
        source: 'title',
        slugify: title =>
          title
            .toLowerCase()
            .replace(/,/g, '')
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'text',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string', // Can eventually become geopoint
    },
    {
      name: 'start_date',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
    {
      name: 'end_date',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
    },
    {
      name: 'accomplishments',
      title: 'Accomplishments',
      type: 'reference',
      to: [{ type: 'accomplishment' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      company: 'company.name',
      companyLogo: 'company.logoMark',
    },
    prepare(selection) {
      const { title, company, companyLogo } = selection
      return {
        title,
        subtitle: `at ${company}`,
        media: companyLogo,
      }
    },
  },
}
