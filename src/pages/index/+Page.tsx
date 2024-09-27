import type { Component } from 'solid-js'
import { Provider } from 'solid-jotai'
import { useData } from 'vike-solid/useData'

import Home from '@/components/Home'
import HydrateAtoms from '@/components/HydrateAtoms'
import { databasesState } from '@/stores/globalAtoms'

const Page: Component = () => {
  // messageError?: string
  // messageSuccess?: string
  // options: {
  //   noDelete: boolean
  //   readOnly: boolean
  // }

  const data = useData<DataHome>()

  return (
    <Provider>
      <HydrateAtoms initialValues={[[databasesState, data.databases]]}>
        <Home {...data} />
      </HydrateAtoms>
    </Provider>
  )
}

export default Page