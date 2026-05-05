import {defineField} from 'sanity'

export const LOCALES = [{id: 'fr'}, {id: 'nl'}, {id: 'en'}] as const

export type LocaleId = (typeof LOCALES)[number]['id']

const localeIds = LOCALES.map((l) => l.id)

type LocaleStringValue = Partial<Record<LocaleId, string>>
type LocaleSlugValue = Partial<Record<LocaleId, {current?: string}>>
type DocWithI18nTitle = {title?: LocaleStringValue}

const FRENCH_REQUIRED = 'French version is required'
const FRENCH_SLUG_REQUIRED = 'French slug is required'

export interface I18nFieldOpts {
  name: string
  title: string
  group?: string
  description?: string
}

export interface I18nStringOpts extends I18nFieldOpts {
  max?: number
  required?: boolean
}

export interface I18nTextOpts extends I18nFieldOpts {
  max?: number
  rows?: number
  required?: boolean
}

export function i18nString(opts: I18nStringOpts) {
  return defineField({
    name: opts.name,
    title: opts.title,
    type: 'object',
    description: opts.description,
    group: opts.group,
    options: {collapsible: true, collapsed: false},
    fields: localeIds.map((id) =>
      defineField({
        name: id,
        title: id.toUpperCase(),
        type: 'string',
        validation: (Rule) => (opts.max ? Rule.max(opts.max) : Rule),
      }),
    ),
    validation: opts.required
      ? (Rule) =>
          Rule.custom((value) => {
            const v = value as LocaleStringValue | undefined
            const fr = v?.fr
            return typeof fr === 'string' && fr.trim() !== '' ? true : FRENCH_REQUIRED
          })
      : undefined,
  })
}

export function i18nText(opts: I18nTextOpts) {
  return defineField({
    name: opts.name,
    title: opts.title,
    type: 'object',
    description: opts.description,
    group: opts.group,
    options: {collapsible: true, collapsed: false},
    fields: localeIds.map((id) =>
      defineField({
        name: id,
        title: id.toUpperCase(),
        type: 'text',
        rows: opts.rows,
        validation: (Rule) => (opts.max ? Rule.max(opts.max) : Rule),
      }),
    ),
    validation: opts.required
      ? (Rule) =>
          Rule.custom((value) => {
            const v = value as LocaleStringValue | undefined
            const fr = v?.fr
            return typeof fr === 'string' && fr.trim() !== '' ? true : FRENCH_REQUIRED
          })
      : undefined,
  })
}

export function i18nSlug(opts: I18nFieldOpts) {
  return defineField({
    name: opts.name,
    title: opts.title,
    type: 'object',
    description: opts.description,
    group: opts.group,
    options: {collapsible: true, collapsed: false},
    fields: localeIds.map((id) =>
      defineField({
        name: id,
        title: id.toUpperCase(),
        type: 'slug',
        options: {
          source: (doc) => {
            const title = (doc as DocWithI18nTitle).title
            return title?.[id] ?? ''
          },
          maxLength: 96,
        },
      }),
    ),
    validation: (Rule) =>
      Rule.custom((value) => {
        const v = value as LocaleSlugValue | undefined
        return v?.fr?.current ? true : FRENCH_SLUG_REQUIRED
      }),
  })
}

export function i18nBody(opts: I18nFieldOpts) {
  return defineField({
    name: opts.name,
    title: opts.title,
    type: 'object',
    description: opts.description,
    group: opts.group,
    options: {collapsible: true, collapsed: false},
    fields: localeIds.map((id) =>
      defineField({
        name: id,
        title: id.toUpperCase(),
        type: 'blockContent',
      }),
    ),
  })
}
