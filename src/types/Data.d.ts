type DataHome = {
  databases: typeof global.mongo.databases,
  options: typeof global.config.options,
  serverStatus?: ReturnType<typeof import('@/utils/mappers/mapInfo').mapServerStatus>
}

type DataDatabase = {
  dbName: string
  title: string
}

type DataCollection = {
  dbName: string
  collectionName: string
  title: string
}