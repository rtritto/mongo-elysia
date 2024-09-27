import { useAtomValue } from 'solid-jotai'
import { type Component, For, Show } from 'solid-js'
import { useData } from 'vike-solid/useData'

// import { darkModeState } from 'src/store/Theme/atoms'
import { EP_DATABASE, EP_DB } from '@/configs/endpoints'
import Link from './Link'
import NavCollections from './NavCollections'
import NavDatabases from './NavDatabases'
import { selectedCollectionState, selectedDatabaseState } from '@/stores/globalAtoms'
import { DataHome } from '@/types/Data'

const NavBar: Component = () => {
  const data = useData<DataHome>()
  const selectedDatabase = useAtomValue(selectedDatabaseState)
  const selectedCollection = useAtomValue(selectedCollectionState)
  return (
    // <div class="bg-base-300 relative">
    //   <div class="container mx-auto">
    //     <div class="navbar p-2">
    //       {/* Show only on large screens and above */}
    //       <div class="hidden md:flex items-center space-x-4">
    //         <nav class="flex items-center p-0">
    //           <a href="/" class="flex items-center m-3 p-0">
    //             <img src="/favicon.ico" height={24} width={24} alt="logo" />
    //           </a>

    //           <a
    //             href="/"
    //             class="px-3 py-2 text-gray-500 hover:text-white no-underline"
    //           >
    //             Mongo Express
    //           </a>

    //           <div aria-label="breadcrumb" class="text-sm breadcrumbs">
    //             <NavDatabases />

    //             <Show when={selectedDatabase()}>
    //               <NavCollections />
    //             </Show>
    //           </div>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="navbar rounded-box bg-base-300">
      <div class="flex-1 px-2 py-0 lg:flex-none">
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

                <For each={data.databases}>
                  {(database) => (
                    <option value={database} selected={selectedDatabase() === database} disabled={selectedDatabase() === database}>
                      {database}
                    </option>
                  )}
                </For>
              </select>
            </li>

            <Show when={selectedCollection()}>
              <li>
                <select class="select select-ghost w-full max-w-xs" onChange={(event) => window.location.href = `${EP_DATABASE(selectedDatabase()!)}/${event.currentTarget.value}`}>
                  <option disabled selected hidden>Collections</option>

                  <For each={data.databases}>
                    {(database) => (
                      <option value={database} selected={selectedCollection() === database} disabled={selectedCollection() === database}>
                        {database}
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

export default NavBar