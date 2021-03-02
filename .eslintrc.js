module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-self-closing': 'off',

    semi: ['error', 'never'],

    'arrow-parens': ['error', 'as-needed'],

    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],

    'newline-before-return': 'error',

    'import/newline-after-import': ['error', { count: 1 }],
  },
}
