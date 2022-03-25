import sanityClient from '@sanity/client'
import config from './config'

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: '2022-03-24', //added, might remove
  useCdn: true,
})

export default client
