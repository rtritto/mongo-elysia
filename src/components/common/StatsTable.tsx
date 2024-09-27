import { type Component, For } from 'solid-js'

import type { ServerStatusFields } from '@/utils/mappers/mapInfo'

const StatsTable: Component<{ label: string, fields: ServerStatusFields }> = (props) => {
  return (
    <div class="overflow-x-auto rounded-lg bg-base-100 shadow-lg">
      <table class="table w-full">
        <thead>
          <tr>
            <th colSpan={4} class="py-2 text-lg font-bold">
              {props.label}
            </th>
          </tr>
        </thead>

        <tbody>
          <For each={props.fields}>{
            (field) => (
              <tr class="odd:bg-gray-700 even:bg-gray-800">
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