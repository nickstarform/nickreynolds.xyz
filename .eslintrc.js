module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs','@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  overrides: [
    {
      files: ['pages/index.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
  rules: {
    'no-console': 'warn',
    'vue/multi-word-component-names': 'warn',
    'vue/no-dupe-keys': 'warn',
  },
}
