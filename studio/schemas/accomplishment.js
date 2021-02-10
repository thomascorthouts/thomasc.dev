export default {
  name: 'accomplishment',
  title: 'Major Accomplishment',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      description: 'description',
    },
  },
}
