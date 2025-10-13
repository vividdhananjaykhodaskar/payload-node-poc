import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'mediaType',
      type: 'select',
      options: [
        {
          label: 'Logo',
          value: 'logo',
        },
        {
          label: 'Icon',
          value: 'icon',
        },
        {
          label: 'Background',
          value: 'background',
        },
        {
          label: 'General',
          value: 'general',
        },
      ],
      defaultValue: 'general',
    },
  ],
  upload: {
    crop: false,
    focalPoint: false,
  },
}