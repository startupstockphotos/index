export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'metaTitle',
        maxLength: 96
      }
    },
    {
      name: 'metaDescription',
      title: 'Meta Desctiption',
      type: 'text'
    },
    {
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      media: 'metaImage'
    },
  }
}
