import { type Component } from 'solid-js'

import { EP_API_DB } from '@/configs/endpoints'
import StatsTable from '@/components/common/StatsTable'
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
        <StatsTable
          label="Server Status"
          isEnabled={props.isAdminDb}
          endpoint={`${EP_API_DB}/stats`}
          fallback={<p>Turn on admin in <b>config.js</b> to view server stats!</p>}
        />
      </div>
    </div>
  )
}

export default Home