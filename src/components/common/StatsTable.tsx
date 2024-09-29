import { createQuery } from '@tanstack/solid-query'
import { type Component, For, Show, type JSXElement } from 'solid-js'
import { QueryBoundary } from 'vike-solid-query'

import { messageErrorState } from '@/stores/globalAtoms'
import { SyncIcon } from '@/components/Icons'

type StatsTableFields = {
  label: string
  value: JSXElement
}[][]

const StatsTable: Component<{
  label: string
  isEnabled: boolean
  endpoint: string
  fallback: JSXElement
}> = (props) => {
  // TODO
  // const setError = useSetAtom(messageErrorState)
  const query = createQuery<StatsTableFields>(() => ({
    initialData: [],
    enabled: false,
    queryKey: [`${props.label}_stats`],
    queryFn: async () => {
      return fetch(props.endpoint).then((res) => res.json())
    }
  }))

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
                <button class="btn" onClick={() => query.refetch()}>
                  <SyncIcon />Load
                </button>
              </Show>
            </th>
          </tr>
        </thead>

        <Show when={props.isEnabled === true}>
          <QueryBoundary
            query={query}
          // TODO
          // loadingFallback={<div class="flex justify-center text-center"><img alt="Loading" src="/src/assets/loading.gif" /></div>}
          >
            {(dataDoc) => (
              <tbody>
                <For each={dataDoc}>{
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
            )}
          </QueryBoundary>
        </Show>
      </table>
    </div>
  )
}

export default StatsTable