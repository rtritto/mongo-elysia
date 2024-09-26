import { atom } from 'solid-jotai'

export const databasesState = atom<Mongo['databases']>([])
export const collectionsState = atom<Mongo['collections']>({})
export const columnsState = atom<MongoDocument[]>([])
export const documentsState = atom<MongoDocument[]>([])
export const documentCountState = atom<number>(0)
// eslint-disable-next-line unicorn/no-useless-undefined
export const selectedDatabaseState = atom<string | undefined>(undefined)
// eslint-disable-next-line unicorn/no-useless-undefined
export const selectedCollectionState = atom<string | undefined>(undefined)
export const databaseStatsState = atom<object>({})  /* TODO type */
// eslint-disable-next-line unicorn/no-useless-undefined
export const messageSuccessState = atom<string | undefined>(undefined)
// eslint-disable-next-line unicorn/no-useless-undefined
export const messageErrorState = atom<string | undefined>(undefined)