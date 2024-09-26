import { useAtomValue } from 'solid-jotai'

import { EP_DATABASE } from '@/configs/endpoints'
import SelectLink from '../common/SelectLink'
import { collectionsState, selectedCollectionState, selectedDatabaseState } from '@/stores/globalAtoms'

const NavCollections = () => {
  const collections = useAtomValue(collectionsState)
  const selectedDb = useAtomValue(selectedDatabaseState)

  return (
    <SelectLink
      baseUrl={EP_DATABASE(selectedDb())}
      entities={collections()[selectedDb()]}
      label="Collection"
      selectedState={selectedCollectionState}
    />
  )
}

export default NavCollections