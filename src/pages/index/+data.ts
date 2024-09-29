import type { DataAsync } from 'vike/types'

export const data: DataAsync<DataHome> = async () => {
  return {
    databases: global.mongo.databases,
    options: global.config.options,
    isAdminDb: !!global.mongo.adminDb
  } satisfies DataHome
}