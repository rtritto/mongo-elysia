import { useSetAtom } from 'solid-jotai'
import { createSignal, type Component, For, Show, type JSXElement } from 'solid-js'

import { EP_API_DB } from '@/configs/endpoints'
import { messageErrorState } from '@/stores/globalAtoms'
import { SyncIcon } from '@/components/Icons'

type StatsTableFields = {
  label: string
  value: JSXElement
}[][]

const StatsTable: Component<{
  label: string
  isEnabled: boolean
  fallback: JSXElement
}> = (props) => {
  const [fields, setFields] = createSignal<StatsTableFields>([])
  const setError = useSetAtom(messageErrorState)
  return (
    <div class="overflow-x-auto rounded-lg bg-base-100 shadow-lg">
      <table class="table table-zebra table-sm">
        <thead class="flex">
          <tr>
            <th class="py-2 text-lg font-bold">
              <p class="label inline">{props.label}</p>
            </th>

            <th>
              <Show when={props.isEnabled === true} fallback={props.fallback}>
                <button
                  class="btn"
                  onClick={async () => {
                    await fetch(`${EP_API_DB}/stats`)
                      .then(async (res) => {
                        if (res.ok === true) {
                          setFields(await res.json() as StatsTableFields)
                        } else {
                          const { error } = await res.json()
                          setError(error)
                        }
                      }).catch((error) => { setError(error.message) })
                  }}
                >
                  <SyncIcon />Load
                </button>
              </Show>
            </th>
          </tr>
        </thead>

        <tbody>
          <For each={fields()}>{
            (field) => (
              <tr>
                <td class="p-2 text-right"><strong>{field[0].label}</strong></td>

                <td class="p-2">{field[0].value}</td>

                <td class="p-2 text-right"><strong>{field[1].label}</strong></td>

                <td class="p-2">{field[1].value}</td>
              </tr>
            )
          }</For>
        </tbody>
      </table>
    </div>
  )
}

export default StatsTable