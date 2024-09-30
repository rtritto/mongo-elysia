import tseslint from 'typescript-eslint'
import solidPugin from 'eslint-plugin-solid/configs/typescript'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default tseslint.config(
  {
    files: ['**/*.{ts,tsx}'],
    ...solidPugin
  },
  {
    ignores: ['**/dist/', '**/.yarn/', '**/.vite/']
  },
  ...tseslint.configs.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  ...tailwindcss.configs['flat/recommended'],
  {
    rules: {
      'comma-dangle': [1, 'never'],
      'semi': [1, 'never'],

      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],

      'unicorn/empty-brace-spaces': 0,
      'unicorn/filename-case': 0,
      'unicorn/no-empty-file': 0,
      'unicorn/no-keyword-prefix': 0,
      'unicorn/no-null': 0,
      'unicorn/numeric-separators-style': 0,
      'unicorn/prefer-node-protocol': 0,
      'unicorn/prevent-abbreviations': 0,

      'tailwindcss/no-custom-classname': [1, {
        whitelist: ['btn-group', 'collapse-close']
      }]
    }
  }
)