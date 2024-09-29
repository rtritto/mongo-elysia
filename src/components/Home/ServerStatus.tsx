import { type Component, Suspense } from 'solid-js'

import StatsTable from '../common/StatsTable'

const ServerStatus: Component<Pick<DataHome, 'isAdminDb'>> = (props) => {
  return (
    <div class="mb-8">
      <Suspense fallback={<div class="flex justify-center text-center"><img alt="Loading" src="/src/assets/loading.gif" /></div>}>
        <StatsTable
          label="Server Status"
          isEnabled={props.isAdminDb}
          fallback={<p>Turn on admin in <b>config.js</b> to view server stats!</p>}
        />
      </Suspense>
    </div>
  )
}

export default ServerStatus