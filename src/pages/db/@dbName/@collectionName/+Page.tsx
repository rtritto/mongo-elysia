import type { Component } from 'solid-js'
import { useData } from 'vike-solid/useData'

import Collection from '@/components/Collection'

const Page: Component<DataCollection> = () => {
  const data = useData<DataCollection>()
  return <Collection {...data} />
}

export default Page