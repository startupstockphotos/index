export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Desctiption',
      type: 'text'
    },
    {
      name: 'featuredImage',
      title: 'Featured image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage'
    },
  }
}
