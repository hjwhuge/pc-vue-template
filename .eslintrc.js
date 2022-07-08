module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'dist',
    'LICENSE*',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '!.github',
    '!.vscode',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
  },
  rules: {
    // Customize your rules
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/v-on-function-call': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
  },
}
