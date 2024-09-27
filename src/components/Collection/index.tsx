import type { Component } from 'solid-js'

const Database: Component<DataCollection> = (props) => {
  return (
    <>

      <h1>TEST</h1>

      {props.dbName} / {props.collectionName}

      <p>
        Demo using <code>vike</code> with Solid.
      </p>
    </>
  )
}

export default Database