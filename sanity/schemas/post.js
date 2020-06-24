export default {
  name: 'post',
  title: 'Post',
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
      name: 'user',
      title: 'User',
      type: 'reference',
      to: {type: 'user'}
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
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
      author: 'user.name',
      media: 'featuredImage'
    },
  }
}
