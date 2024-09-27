import { DataHome } from '@/types/Data'
import { mapServerStatus } from '@/utils/mappers/mapInfo'

const data = async () => {
  const { config, mongo } = global
  return {
    databases: mongo.databases,
    options: config.options,
    ...mongo.adminDb !== null && {
      serverStatus: mapServerStatus((await mongo.adminDb.serverStatus()) as ServerStatus)
    }
  } satisfies DataHome
}

export default data