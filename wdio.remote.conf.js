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

  maxInstance: 2,

  capabilities: [{
    browserName: 'chrome',
  }],

  framework: 'mocha',
  reports: ['allure'],
};
