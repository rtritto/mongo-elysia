import { mapServerStatus } from '@/utils/mappers/mapInfo'

const get = (app: ElysiaApp) => app.get('/', async ({ set }) => {
  if (global.mongo.adminDb === null) {
    set.status = 403
    return { message: 'No admin DB permission' }
  }
  return mapServerStatus((await global.mongo.adminDb.serverStatus()) as ServerStatus)
})

export default get