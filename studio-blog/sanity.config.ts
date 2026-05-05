import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Office Factory Blog',
  projectId: '8vhogdv7',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {types: schemaTypes},
})
