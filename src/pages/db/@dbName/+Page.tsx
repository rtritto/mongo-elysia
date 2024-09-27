import type { Component } from 'solid-js'
import { useData } from 'vike-solid/useData'

import Database from '@/components/Database'

const Page: Component<DataDatabase> = () => {
  const data = useData<DataDatabase>()
  return <Database {...data} />
}

export default Page