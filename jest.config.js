module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
  testMatch: ['<rootDir>/packages/core/components/**/__tests__/index.spec.js']
};//packages\core\components\button\__tests__