module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'dist',
    'LICENSE*',
    'output',
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
    es2021: true,
    browser: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
  },
  rules: {
    // Customize your rules
    'no-undef': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
