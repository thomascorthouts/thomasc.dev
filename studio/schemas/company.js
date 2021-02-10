export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200),
      },
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'description',
      title: 'Company Description',
      type: 'text',
    },
    {
      name: 'logo',
      title: 'logo',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
