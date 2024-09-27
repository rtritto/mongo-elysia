import type { Component } from 'solid-js'
import { Provider } from 'solid-jotai'
import { useData } from 'vike-solid/useData'

import Database from '@/components/Database'
import HydrateAtoms from '@/components/HydrateAtoms'
import { databasesState, selectedDatabaseState } from '@/stores/globalAtoms'

const Page: Component<DataDatabase> = () => {
  const data = useData<DataDatabase>()
  return (
    <Provider>
      <HydrateAtoms initialValues={[[databasesState, data.databases], [selectedDatabaseState, data.dbName]]}>
        <Database {...data} />
      </HydrateAtoms>
    </Provider>
  )
}

export default Page