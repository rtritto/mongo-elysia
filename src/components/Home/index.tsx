import { type Component, Show } from 'solid-js'

import StatsTable from '../common/StatsTable'
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

      <div class="mb-8">
        <Show
          when={props.serverStatus}
          fallback={(
            <>
              <h4 class="mb-4 text-2xl font-bold">Server Status</h4>

              <p>Turn on admin in <b>config.js</b> to view server stats!</p>
            </>
          )}
        >
          <StatsTable label="Server Status" fields={props.serverStatus!} />
        </Show>
      </div>
    </div>
  )
}

export default Home