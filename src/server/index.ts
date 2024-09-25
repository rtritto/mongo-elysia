import { Elysia } from 'elysia'
import { vike } from 'vike-node/elysia'
import { cors } from '@elysiajs/cors'

const port = +(process.env.PORT || 3000)

const app = new Elysia()
app
  .use(cors())
  .use(vike())
  .listen(port, () => console.log(`Server running at http://localhost:${port}`))