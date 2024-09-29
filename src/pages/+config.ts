import type { Config } from 'vike/types'
import vikeSolid from 'vike-solid/config'
import vikeSolidQuery from 'vike-solid-query/config'

// Default config (can be overridden by pages)
export default {
  // title: 'Mongo Elysia App', // <title>
  // description: 'Demo showcasing Vike + Solid', // <meta name='description'>
  // bodyAttributes: {
  //   class: 'dark'
  // },
  extends: [
    vikeSolid,
    vikeSolidQuery
  ],
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
} satisfies Config