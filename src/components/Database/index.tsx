import type { Component } from 'solid-js'

const Database: Component<DataDatabase> = (props) => {
  return (
    <>

      <h1>TEST</h1>

      {props.dbName}

      <p>
        Demo using <code>vike</code> with Solid.
      </p>
    </>
  )
}

export default Database