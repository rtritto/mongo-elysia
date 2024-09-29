import { useAtom, useSetAtom } from 'solid-jotai'
import { createSignal } from 'solid-js'

import { EP_API_DB } from '@/configs/endpoints'
import { databasesState, messageErrorState, messageSuccessState } from '@/stores/globalAtoms'
import { isValidDatabaseName } from '@/utils/validations'
import { AddIcon } from './../Icons/index'

const CreateDatabase = () => {
  const [inputDatabase, setInputDatabase] = createSignal('')
  const [isDatabaseValid, setIsDatabaseValid] = createSignal(false)
  const [databaseValidationError, setDatabaseValidationError] = createSignal<string>()
  const [databases, setDatabases] = useAtom(databasesState)
  const setSuccess = useSetAtom(messageSuccessState)
  const setError = useSetAtom(messageErrorState)

  return (
    <>
      <form
        onSubmit={async () => {
          try {
            const res = await fetch(EP_API_DB, {
              method: 'POST',
              body: JSON.stringify({ database: inputDatabase() }),
              headers: { 'Content-Type': 'application/json' }
            })
            if (res.ok === true) {
              // Add database to global databases to update viewing databases
              setDatabases([...databases()!, inputDatabase()].sort())
              setSuccess(`Database "${inputDatabase()}" created!`)
              setInputDatabase('')  // Reset value
            } else {
              const { error } = await res.json()
              setError(error)
            }
          } catch (error) {
            setError((error as Error).message)
          }
        }}
      >
        <div class="join flex justify-between">
          <div class="join-item">
            <input
              type="text"
              class={`input input-sm input-bordered${databaseValidationError() === undefined ? '' : ' input-error'} join-item w-full`}
              onInput={(event) => {
                setInputDatabase(event.target.value)
                const { error } = isValidDatabaseName(event.target.value)
                if (error === undefined) {
                  setIsDatabaseValid(true)
                  setDatabaseValidationError()
                } else {
                  setIsDatabaseValid(false)
                  setDatabaseValidationError(error)
                }
              }}
              placeholder="Database name"
              value={inputDatabase()}
            />

            <div class="label pb-0 pt-1">
              <span class={`label-text-alt${databaseValidationError() === undefined ? '' : ' text-red-300'}`}>{databaseValidationError() || ' '}</span>
            </div>
          </div>

          <button class="btn join-item btn-sm bg-blue-600 hover:bg-blue-700" type="submit" disabled={inputDatabase() === '' || isDatabaseValid() === false}>
            <AddIcon />Create Database
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateDatabase