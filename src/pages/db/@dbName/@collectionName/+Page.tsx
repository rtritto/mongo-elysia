import type { Component } from 'solid-js'

const Page: Component<{
  collectionName: string
  dbName: string
}> = (props) => {
  // console.log('props: ', props);
  return (
    <>
      <h1>TEST2 - {props.collectionName}</h1>

      {props.dbName}

      <p>
        Demo using <code>vike</code> with Solid.
      </p>
    </>
  )
}

export default Page