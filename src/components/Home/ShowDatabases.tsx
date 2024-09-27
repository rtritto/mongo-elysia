import { useSetAtom } from 'solid-jotai'
import { type Component, For, Show } from 'solid-js'

import { EP_DB } from '@/configs/endpoints'
import { VisibilityIcon } from './../Icons/index'
import CustomLink from '../common/CustomLink'
import CreateDatabase from './CreateDatabase'
import DeleteDatabase from './DeleteDatabase'
import { selectedDatabaseState } from '@/stores/globalAtoms'

const TableCellStyle = {
  // border: 1,
  p: 0.5
}

const ShowDatabases: Component<{
  databases: string[]
  show: {
    create: boolean
    delete: boolean
  }
}> = (props) => {
  const setSelectedDatabaseState = useSetAtom(selectedDatabaseState)

  return (
    <div class="overflow-x-auto rounded-lg bg-base-100 shadow-lg">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="py-2 text-left text-lg font-bold">
              Databases
            </th>

            <th class="py-2 text-right text-lg font-bold" colspan="2">
              <div class="flex justify-end">
                <Show when={props.show.create === true}>
                  CreateDatabase
                  {/* <CreateDatabase /> */}
                </Show>
              </div>
            </th>
          </tr>
        </thead>
      </table>

      <table class="table w-full">
        <tbody>
          <For each={props.databases}>
            {(database) => {
              const encodedDatabase = encodeURIComponent(database)
              const hrefView = `${EP_DB}/${encodedDatabase}`
              return (
                <tr class="container hover flex items-center justify-between">
                  <td class="w-1/6 p-2">
                    <a href={hrefView} class="btn btn-success w-full text-xs font-bold text-white">
                      <VisibilityIcon />

                      View
                    </a>
                  </td>

                  <td class="w-full p-2">
                    <a href={hrefView} class="text-lg font-semibold no-underline" onClick={() => setSelectedDatabaseState(database)}>
                      <button class="btn w-full">
                        {database}
                      </button>
                    </a>
                  </td>

                  <Show when={props.show.delete === true}>
                    <td class="w-1/6 p-2">
                      <DeleteDatabase database={database} />
                    </td>
                  </Show>
                </tr>
              )
            }}
          </For>
        </tbody>
      </table>
    </div>
  )
}

export default ShowDatabases