import type { Component } from 'solid-js'
import { useData } from 'vike-solid/useData'

import Home from '@/components/Home'

const Page: Component = () => {
  // messageError?: string
  // messageSuccess?: string
  // options: {
  //   noDelete: boolean
  //   readOnly: boolean
  // }

  const data = useData<DataHome>()

  return <Home {...data} />
}

export default Page