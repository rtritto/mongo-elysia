// https://vike.dev/onBeforeRender

import type { PageContext } from 'vike'
import { isValidCollectionName, isValidDatabaseName } from '@/utils/validations'

async function onBeforeRender(pageContext: PageContext) {
  const { dbName, collectionName } = pageContext.routeParams
  const validationDbRes = isValidDatabaseName(dbName)
  if ('error' in validationDbRes) {
    throw new Error(validationDbRes.error)
  }
  const validationCollRes = isValidCollectionName(collectionName)
  if ('error' in validationCollRes) {
    throw new Error(validationCollRes.error)
  }
  return {
    pageContext: {
      pageProps: pageContext.routeParams,
      config: {
        title: `Viewing Collection: ${collectionName}`
      }
    }
  }
}

export default onBeforeRender