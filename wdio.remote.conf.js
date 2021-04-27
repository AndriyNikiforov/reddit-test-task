exports.config = {
  port: 4444,
  path: '/wd/hub',
  host: 'hub',
  protocol: 'http',
  hostname: 'localhost',

  runner: 'local',

  specs: [
    './test/specs/*.js',
  ],

  maxInstance: 1,

  capabilities: [{
    browserName: 'chrome',
  }],

  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  framework: 'mocha',
  reports: ['allure'],

  after(result, capabilities, specs) {
    browser.closeWindow();
  },
};
