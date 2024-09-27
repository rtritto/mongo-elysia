import { redirect } from 'vike/abort'
import type { DataAsync } from 'vike/types'

import { isValidDatabaseName } from '@/utils/validations'

export const data: DataAsync<DataDatabase> = async (pageContext) => {
  const { dbName } = pageContext.routeParams
  const validationDbRes = isValidDatabaseName(dbName)
  if ('error' in validationDbRes) {
    console.warn(validationDbRes.error)
    throw redirect('/')
  }
  if (global.mongo.databases.includes(dbName) === false) {
    console.warn(`Missing Database ${dbName}`)
    throw redirect('/')
  }
  return {
    databases: global.mongo.databases,
    collections: await global.mongo.getCollections(dbName),
    dbName,
    title: `Database: ${dbName}`
  } satisfies DataDatabase
}