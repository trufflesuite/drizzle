// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](dist|node_modules)[/\\\\]'],

  // The test environment that will be used for testing
  testEnvironment: '<rootDir>/test/environments/ganache-environment.js',

  transform: {
    '^.+\\.js': '<rootDir>/jest.transform.js'
  }
}
