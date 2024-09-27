import { redirect } from 'vike/abort'
import type { DataSync } from 'vike/types'

import { isValidDatabaseName } from '@/utils/validations'

export const data: DataSync<DataDatabase> = (pageContext) => {
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
    dbName,
    title: `Database: ${dbName}`
  } satisfies DataDatabase
}