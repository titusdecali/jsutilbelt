module.exports = {
  root: true,

  env: {
    node: true
  },

  plugins: ['vue', 'prettier'],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'vue/require-default-prop': 0,
    'vue/no-unused-components': [
      'warn',
      {
        ignoreWhenBindingPresent: true
      }
    ],
    // 'no-undefined': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ]
}
