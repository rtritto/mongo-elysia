import { useAtomValue } from 'solid-jotai'
import { type Component, For, Show } from 'solid-js'

import { EP_DATABASE, EP_DB } from '@/configs/endpoints'
import { collectionsState, databasesState, selectedCollectionState, selectedDatabaseState } from '@/stores/globalAtoms'

const NavBarDesktop: Component = () => {
  const databases = useAtomValue(databasesState)
  const collections = useAtomValue(collectionsState)
  const selectedDatabase = useAtomValue(selectedDatabaseState)
  const selectedCollection = useAtomValue(selectedCollectionState)
  return (
    <div class="navbar rounded-box bg-base-300">
      <div class="px-2 py-0 lg:flex-none">
        <button>
          <a href="/" class="flex items-center p-2 text-lg text-gray-500 no-underline hover:text-white">
            <img src="/src/assets/favicon.ico" height={24} width={24} alt="logo" />

            <p class="px-2">Mongo Elysia</p>
          </a>
        </button>
      </div>

      {/* <div class="flex flex-1 justify-end px-2"> */}
      <div class="flex items-stretch">
        <div class="breadcrumbs text-sm">
          <ul>
            <li>
              <select class="select select-ghost w-full max-w-xs" onChange={(event) => window.location.href = `${EP_DB}/${event.currentTarget.value}`}>
                <option disabled selected hidden>Database</option>

                <For each={databases()}>
                  {(database) => (
                    <option value={database} selected={selectedDatabase() === database} disabled={selectedDatabase() === database}>
                      {database}
                    </option>
                  )}
                </For>
              </select>
            </li>

            <Show when={selectedDatabase()}>
              <li>
                <select class="select select-ghost w-full max-w-xs" onChange={(event) => window.location.href = `${EP_DATABASE(selectedDatabase()!)}/${event.currentTarget.value}`}>
                  <option disabled selected hidden>Collections</option>

                  <For each={collections()}>
                    {(collection) => (
                      <option value={collection} selected={selectedCollection() === collection} disabled={selectedCollection() === collection}>
                        {collection}
                      </option>
                    )}
                  </For>
                </select>
              </li>
            </Show>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default NavBarDesktop