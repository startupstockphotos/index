export default {
  name: 'photo',
  title: 'Photo',
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
      name: 'image',
      title: 'Image',
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
      name: 'description',
      title: 'Body',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'user.name',
      media: 'image'
    },
  }
}
