import {defineField, defineType} from 'sanity'
import {i18nBody, i18nSlug, i18nString, i18nText} from './i18n'

type CoverImageValue = {asset?: {_ref?: string}}

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    i18nString({name: 'title', title: 'Title', max: 120, required: true, group: 'content'}),
    i18nSlug({name: 'slug', title: 'Slug', group: 'content'}),
    i18nText({
      name: 'excerpt',
      title: 'Excerpt',
      max: 240,
      rows: 3,
      required: true,
      group: 'content',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      description: 'Image is shared across languages — alt text is per-language.',
      options: {hotspot: true},
      fields: [i18nString({name: 'alt', title: 'Alternative text', max: 160})],
      validation: (Rule) =>
        Rule.custom((value) => {
          const v = value as CoverImageValue | undefined
          return v?.asset?._ref ? true : 'Cover image is required'
        }),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      description: 'Label is translated per locale on the public site.',
      options: {
        list: [
          {title: 'Guides', value: 'guides'},
          {title: 'Legal', value: 'legal'},
          {title: 'Brussels', value: 'local'},
          {title: 'News', value: 'news'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule) => Rule.required(),
    }),
    i18nBody({name: 'body', title: 'Body', group: 'content'}),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readingTimeMinutes',
      title: 'Reading time (minutes)',
      type: 'number',
      group: 'meta',
      validation: (Rule) => Rule.positive().integer(),
    }),
    i18nString({name: 'seoTitle', title: 'SEO title', max: 60, group: 'seo'}),
    i18nText({name: 'seoDescription', title: 'SEO description', max: 160, rows: 2, group: 'seo'}),
  ],
  orderings: [
    {
      title: 'Published date, new',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      titleFr: 'title.fr',
      titleNl: 'title.nl',
      titleEn: 'title.en',
      coverImage: 'coverImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {titleFr, titleNl, titleEn, coverImage, publishedAt} = selection as {
        titleFr?: string
        titleNl?: string
        titleEn?: string
        coverImage?: React.ReactNode
        publishedAt?: string
      }
      const title = titleFr || titleNl || titleEn || '(untitled)'
      const subtitle = publishedAt ? new Date(publishedAt).toISOString().slice(0, 10) : ''
      return {title, subtitle, media: coverImage}
    },
  },
})
