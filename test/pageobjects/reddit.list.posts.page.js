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

  get dateValues() {
    return $$('(//a[contains(@data-click-id, "timestamp")])[position()  >= 1 and position() < 9]');
  }

  get commentsCount() {
    return $$('(//a[contains(@data-click-id,"comments")]/span)[position()  >= 1 and position() < 9]');
  }

  get postTitle() {
    return $('<h3 />');
  }

  get postTitles() {
    return $$('(//h3)[position()  >= 1 and position() < 9]');
  }

  get linkTop() {
    return $('//a[@href="/top/" and @role="button"]');
  }

  get linkClassicOption() {
    return $('//span[contains(text(), "classic")]');
  }

  get linkCompactOption() {
    return $('//span[contains(text(), "compact")]');
  }

  changePostView(element, waitElement) {
    this.buttonLayoutSwitch.click();
    element.waitForClickable({
      timeout: 8000,
    });

    element.click();

    waitElement.waitForClickable({
      timeout: 8000,
      timeoutMsg: 'Not loaded',
    });
  }

  topPageCheckTitle() {
    this.linkTop.waitForDisplayed({
      timeout: 5000,
    });
    this.linkTop.click();

    this.postTitle.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    this.buttonLayoutSwitch.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    const elementsCard = this.postTitles;
    elementsCard.map((item) => this.cardPosts.push(item.getText()));

    this.changePostView(this.linkCompactOption, elementsCard[0]);
    const elementsCompact = this.postTitles;
    elementsCompact.map((item) => this.compactPosts.push(item.getText()));

    this.changePostView(this.linkClassicOption, elementsCard[0]);
    const elementsClassic = this.postTitles;
    elementsClassic.map((item) => this.classicPosts.push(item.getText()));

    if (JSON.stringify(this.classicPosts) !== JSON.stringify(this.compactPosts)) {
      throw new Error('Not equal');
    }
  }

  topPageCheckDate() {
    this.linkTop.waitForDisplayed({
      timeout: 5000,
    });
    this.linkTop.click();

    this.postTitle.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    this.buttonLayoutSwitch.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    const elementsCard = this.dateValues;
    elementsCard.map((item) => this.cardPosts.push(item.getText()));

    this.changePostView(this.linkCompactOption, elementsCard[0]);
    const elementsCompact = this.dateValues;
    elementsCompact.map((item) => this.compactPosts.push(item.getText()));

    this.changePostView(this.linkClassicOption, elementsCard[0]);
    const elementsClassic = this.dateValues;
    elementsClassic.map((item) => this.classicPosts.push(item.getText()));

    if (JSON.stringify(this.classicPosts) !== JSON.stringify(this.compactPosts)) {
      throw new Error('Not equal');
    }
  }

  topPageCommentsCount() {
    this.linkTop.waitForDisplayed({
      timeout: 5000,
    });
    this.linkTop.click();

    this.postTitle.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    this.buttonLayoutSwitch.waitForDisplayed({
      timeout: 5000,
      timeoutMsg: 'Not loaded',
    });

    const elementsCard = this.commentsCount;
    elementsCard.map((item) => this.cardPosts.push(item.getText()));

    this.changePostView(this.linkCompactOption, elementsCard[0]);
    const elementsCompact = this.commentsCount;
    elementsCompact.map((item) => this.compactPosts.push(item.getText()));

    this.changePostView(this.linkClassicOption, elementsCard[0]);
    const elementsClassic = this.commentsCount;
    elementsClassic.map((item) => this.classicPosts.push(item.getText()));
    this.classicPosts.forEach((item, index) => {
      this.classicPosts[index] = this.classicPosts[index].replace(' Comments', '');
    });

    if (JSON.stringify(this.classicPosts) !== JSON.stringify(this.compactPosts)) {
      throw new Error('Not equal');
    }
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditListPostsPage();
