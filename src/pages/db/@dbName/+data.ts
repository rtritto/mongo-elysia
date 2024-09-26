import type { PageContext } from 'vike'
import { isValidDatabaseName } from '../../../utils/validations'

const data = (pageContext: PageContext) => {
  const { dbName } = pageContext.routeParams
  const validationRes = isValidDatabaseName(dbName)
  if ('error' in validationRes) {
    throw new Error(validationRes.error)
  }
  return {
    pageProps: pageContext.routeParams,
    config: {
      title: `${dbName} - Mongo Express`
    }
  }
}

export default data