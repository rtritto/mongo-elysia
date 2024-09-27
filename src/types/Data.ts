export type DataHome = {
  databases: typeof global.mongo.databases,
  options: typeof global.config.options,
  serverStatus?: ReturnType<typeof import('@/utils/mappers/mapInfo').mapServerStatus>
}