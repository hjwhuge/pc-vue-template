module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'ci', 'feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'pref', 'revert', 'build', 'safe'],
    ],
  },
}
