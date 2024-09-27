import type { Component, JSXElement } from 'solid-js'
import type { WritableAtom } from 'jotai'
import { Provider } from 'solid-jotai'
import { useData } from 'vike-solid/useData'

import '@/layouts/styles.css'
import NavBar from '@/components/NavBar'
import HydrateAtoms from '@/components/HydrateAtoms'
import { databasesState, selectedCollectionState, selectedDatabaseState } from '@/stores/globalAtoms'

export const Layout: Component<{ children: JSXElement }> = (props) => {
  const data = useData<DataLayout>()
  return (
    <div class="container mx-auto max-w-screen-xl px-6">
      <Provider>
        <HydrateAtoms
          initialValues={(() => {
            const values = [[databasesState, data.databases]] as [WritableAtom<unknown, any[], any>, unknown][]
            if ('dbName' in data) {
              values.push([selectedDatabaseState, data.dbName!])
            }
            if ('collectionName' in data) {
              values.push([selectedCollectionState, data.collectionName!])
            }
            return values
          })()}
        >
          <NavBar />
        </HydrateAtoms>
      </Provider>

      <main class="relative">
        {props.children}
      </main>
    </div>
  )
}