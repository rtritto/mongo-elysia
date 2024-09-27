import type { Component } from 'solid-js'
import { useData } from 'vike-solid/useData'

const Page: Component<DataCollection> = () => {
  const data = useData<DataCollection>()
  return (
    <>
      <h1>TEST2 - {data.collectionName}</h1>

      {data.dbName}

      <p>
        Demo using <code>vike</code> with Solid.
      </p>
    </>
  )
}

export default Page