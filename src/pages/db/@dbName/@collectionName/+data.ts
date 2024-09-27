import type { DataSync } from 'vike/types'

import { isValidCollectionName, isValidDatabaseName } from '@/utils/validations'

export const data: DataSync<DataCollection> = (pageContext) => {
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
    dbName,
    collectionName,
    title: `Collection: ${collectionName}`
  } satisfies DataCollection
}