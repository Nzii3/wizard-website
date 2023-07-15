// Create a schema for Sanity for the announcement collection with a text and link field

export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link',
    },
  },
}
