import { redirect } from 'vike/abort'
import type { DataAsync } from 'vike/types'

import { EP_DB } from '@/configs/endpoints'
import { isValidCollectionName, isValidDatabaseName } from '@/utils/validations'

export const data: DataAsync<DataCollection> = async (pageContext) => {
  const { dbName, collectionName } = pageContext.routeParams
  const validationDbRes = isValidDatabaseName(dbName)
  if ('error' in validationDbRes) {
    console.warn(validationDbRes.error)
    throw redirect('/')
  }
  if (global.mongo.databases.includes(dbName) === false) {
    console.warn(`Missing Database ${dbName}`)
    throw redirect('/')
  }
  const validationCollRes = isValidCollectionName(collectionName)
  if ('error' in validationCollRes) {
    console.warn(validationCollRes.error)
    throw redirect(`${EP_DB}/${dbName}`)
  }
  const collections = await global.mongo.getCollections(dbName)
  if (collections.includes(collectionName) === false) {
    console.warn(`Missing Collection ${collectionName}`)
    throw redirect(`${EP_DB}/${dbName}`)
  }
  return {
    databases: global.mongo.databases,
    collections,
    dbName,
    collectionName,
    title: `Collection: ${collectionName}`
  } satisfies DataCollection
}