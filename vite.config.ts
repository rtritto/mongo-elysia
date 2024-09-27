import vike from 'vike/plugin'
import vikeSolid from 'vike-solid/vite'
// import { vikeNode } from 'vike-node/plugin'
import { defineConfig, loadEnv } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'node:path'

import getGlobalConfig from './config.default'
import getMongo from '@/middlewares/db'


export default defineConfig(async ({ mode }) => {
  // Add ME_CONFIG_ env vars to process.env
  Object.assign(process.env, loadEnv(mode, process.cwd(), 'ME_CONFIG_'))

  global.config = getGlobalConfig()
  global.mongo = getMongo()
  await global.mongo.connect(global.config)

  return {
    cacheDir: '.vite',
    plugins: [
      vike(),
      vikeSolid()
      // vikeNode('./src/server/index.ts')
    ],
    server: {
      port: 3000
    },
    preview: {
      port: 3000
    },
    envPrefix: 'ME_CONFIG_',
    build: {
      target: 'esnext',
      outDir: '.vite/dist'
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    },
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, 'src')
      }
    }
  }
})