import type { DataSync } from 'vike/types'

import { isValidDatabaseName } from '@/utils/validations'

export const data: DataSync<DataDatabase> = (pageContext) => {
  const { dbName } = pageContext.routeParams
  const validationRes = isValidDatabaseName(dbName)
  if ('error' in validationRes) {
    throw new Error(validationRes.error)
  }
  return {
    databases: global.mongo.databases,
    dbName,
    title: `Database: ${dbName}`
  } satisfies DataDatabase
}