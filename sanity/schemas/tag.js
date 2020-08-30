export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
    fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        // add a button to generate slug from the title field
        source: 'title'
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
