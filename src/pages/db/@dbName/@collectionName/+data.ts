import type { DataAsync } from 'vike/types'

import { isValidCollectionName, isValidDatabaseName } from '@/utils/validations'

export const data: DataAsync<DataCollection> = async (pageContext) => {
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
    databases: global.mongo.databases,
    collections: await global.mongo.getCollections(dbName),
    dbName,
    collectionName,
    title: `Collection: ${collectionName}`
  } satisfies DataCollection
}