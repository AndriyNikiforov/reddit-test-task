/* eslint-disable class-methods-use-this */
module.exports = class Page {
  screenshot(fileName) {
    return browser.saveScreenshot(`./screenshots/${fileName}.png`);
  }

  open(path) {
    return browser.url(`https://reddit.com/${path}`);
  }
};
