/* eslint-disable class-methods-use-this */
const { debug, log } = require('console');

const Page = require('./page');

class RedditListPostsPage extends Page {
  constructor() {
    super();
    this.cardPosts = [];
    this.classicPosts = [];
    this.compactPosts = [];
  }

  get buttonLayoutSwitch() {
    return $('#LayoutSwitch--picker');
  }

  get posts() {
    return $$('xpath', '//h3');
  }

  get linkTop() {
    return $('//a[@href="/top/" and @role="button"]');
  }

  get linkClassicOption() {
    return $('//span[contains(text(), "classic")]');
  }

  async changePostView(element) {
    await (await this.buttonLayoutSwitch).click();
    await (await element).waitForClickable({
      timeout: 5000,
    });

    await (await element).click();
  }

  async topPageActions() {
    browser.debug();
    await (await this.linkTop).waitForDisplayed({
      timeout: 5000,
    });
    await (await this.linkTop).click();

    await (await this.buttonLayoutSwitch).waitForClickable({
      timeout: 5000,
    });

    let elements = (await this.posts);
    log('Array', (await this.posts));

    await this.changePostView(this.linkClassicOption);
    // await (await this.posts).waitForDisplayed({
    //   timeout: 5000,
    // });

    elements = (await this.posts);
    elements.map((item) => this.classicPosts.push(item.getText()));
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditListPostsPage();
