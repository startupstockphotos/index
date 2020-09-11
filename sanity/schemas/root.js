export default {
  name: 'root',
  title: 'Root',
  type: 'document',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
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
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'text',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'metaImage'
    },
  }
}

