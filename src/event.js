export default {
  name: 'event',
  type: 'document',
  fields: [
    {
      name: 'text',
      type: 'object',
      fields: [
        {
          name: 'headline',
          type: 'text'
        },
        {
          name: 'text',
          type: 'array',
          of: [
            {
              type: 'block'
            }
          ]
        }
      ]
    },
    {
      name: 'media',
      type: 'object',
      fields: [
        {
          name: 'image',
          type: 'image'
        },
        {
          name: 'externalMedia',
          type: 'url'
        },
        {
          name: 'caption',
          type: 'text'
        },
        {
          name: 'credit',
          type: 'string'
        }
      ]
    },
    {
      name: 'start_date',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'text.headline',
      subtitle: 'start_date',
      media: 'media.image'
    }
  }
}
