import path from 'node:path'
import { Elysia } from 'elysia'
import { vike } from 'vike-node/elysia'
import { cors } from '@elysiajs/cors'
import { autoload } from 'elysia-autoload'

const port = +(process.env.PORT || 3000)

const app = new Elysia({ prefix: '/api' })
app
  .use(cors())
  .use(vike())
  .use(await autoload({ dir: path.join(import.meta.dirname, '../api') }))
  .listen(port, () => console.log(`Server running at http://localhost:${port}`))

export type ElysiaApp = typeof app