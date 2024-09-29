import { type Component } from 'solid-js'

import ServerStatus from './ServerStatus'
import ShowDatabases from './ShowDatabases'
import { messageErrorState, messageSuccessState } from '@/stores/globalAtoms'

const Home: Component<DataHome> = (props) => {
  return (
    <div class="container mx-auto p-4">
      <h4 class="mb-4 text-2xl font-bold">Mongo Express</h4>

      <div class="divider my-6" />

      <ShowDatabases
        show={{
          create: props.options.readOnly === false,
          delete: props.options.noDelete === false && props.options.readOnly === false
        }}
      />

      <ServerStatus isAdminDb={props.isAdminDb} />
    </div>
  )
}

export default Home