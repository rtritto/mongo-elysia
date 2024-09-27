import type { Component } from 'solid-js'
import { useData } from 'vike-solid/useData'

const Page: Component<DataDatabase> = () => {
  const data = useData<DataDatabase>()
  return (
    <>

      <h1>TEST</h1>

      {data.dbName}

      <p>
        Demo using <code>vike</code> with Solid.
      </p>
    </>
  )
}

export default Page