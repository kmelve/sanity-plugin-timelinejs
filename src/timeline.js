export default {
  name: 'timeline',
  type: 'document',
  title: 'Timeline',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'media',
          type: 'image',
          fields: [
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
          name: 'title',
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
        }
      ]
    },
    {
      name: 'events',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'event'
            }
          ]
        }
      ]
    }
  ]
}
