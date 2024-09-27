import type { DataAsync } from 'vike/types'

import { mapServerStatus } from '@/utils/mappers/mapInfo'

export const data: DataAsync<DataHome> = async () => {
  return {
    databases: global.mongo.databases,
    options: global.config.options,
    ...global.mongo.adminDb !== null && {
      serverStatus: mapServerStatus((await global.mongo.adminDb.serverStatus()) as ServerStatus)
    }
  } satisfies DataHome
}