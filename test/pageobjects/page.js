module.exports = class Page {
  open(path) {
    return browser.url(`https://reddit.com/${path}`)
  }
}
