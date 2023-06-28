/** @type {import('eslint')} */
const config = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never']
  }
}

module.exports = config
