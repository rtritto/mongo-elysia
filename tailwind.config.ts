import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

export default {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...themes['dark'],
          '.btn': {
            animation: 0
          }
        }
      }
    ]
  },
  plugins: [daisyui]
} satisfies Config