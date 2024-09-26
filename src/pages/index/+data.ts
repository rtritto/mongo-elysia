import { mapServerStatus } from '@/utils/mappers/mapInfo'

const data = () => {
  const { config, mongo } = global
  return {
    databases: mongo.databases,
    options: config.options,
    ...mongo.adminDb !== null && {
      serverStatus: mapServerStatus(await mongo.adminDb.serverStatus() as ServerStatus)
    }
  }
}

export default data