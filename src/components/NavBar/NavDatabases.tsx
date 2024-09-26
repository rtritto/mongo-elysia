import { useAtomValue } from 'solid-jotai'

import { EP_DB } from '@/configs/endpoints'
import SelectLink from '../common/SelectLink'
import { databasesState, selectedDatabaseState } from '@/stores/globalAtoms'

const NavDatabases = () => {
  const databases = useAtomValue(databasesState)

  return (
    <SelectLink
      baseUrl={EP_DB}
      entities={databases()}
      label="Database"
      selectedState={selectedDatabaseState}
    />
  )
}

export default NavDatabases