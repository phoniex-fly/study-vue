module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    // 'indent': ["error", "tab"], // 强制使用一致的缩进
    'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
    'semi': [2, 'never'], // 要求或禁止使用分号代替 ASI
    'quotes': [2, 'single']  // 强制使用一致的反勾号、双引号或单引号
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
