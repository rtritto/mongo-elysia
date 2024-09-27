import { DataHome } from '@/types/Data'

import { EP_DB } from '@/configs/endpoints'
import SelectLink from '../common/SelectLink'
import { databasesState, selectedDatabaseState } from '@/stores/globalAtoms'

const NavDatabases = () => {
  const data = useData<DataHome>()

  return (
    <SelectLink
      baseUrl={EP_DB}
      entities={data.databases()}
      label="Database"
      selectedState={selectedDatabaseState}
    />
  )
}

export default NavDatabases