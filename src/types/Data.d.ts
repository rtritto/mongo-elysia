type DataHome = {
  databases: typeof global.mongo.databases
  options: typeof global.config.options
  isAdminDb: boolean
}

type DataDatabase = {
  databases: typeof global.mongo.databases
  collections: typeof global.mongo.collections
  dbName: string
  title: string
}

type DataCollection = {
  databases: typeof global.mongo.databases
  collections: typeof global.mongo.collections
  dbName: string
  collectionName: string
  title: string
}

type DataLayout = {
  databases: typeof global.mongo.databases
  collections: typeof global.mongo.collections
  dbName?: string
  collectionName?: string
  title: string
}