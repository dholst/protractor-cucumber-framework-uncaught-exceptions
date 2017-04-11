module.exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  baseUrl: 'http://localhost:8881',
  ignoreUncaughtExceptions: true,

  cucumberOpts: {
    require: ['features/step-definitions/**/*.js'],
    strict: true
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature'
  }
};

