/* eslint-disable class-methods-use-this */
const Page = require('./page');

class RedditListPostsPage extends Page {
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

  getPostsData(element, waitElement, from) {
    this.buttonLayoutSwitch.click();
    element.waitForClickable({
      timeout: 8000,
    });

    element.click();

    waitElement.waitForClickable({
      timeout: 8000,
      timeoutMsg: 'Not loaded',
    });

    const elementsList = from;
    const tmpArray = [];

    elementsList.map((item) => tmpArray.push(item.getText()));

    return JSON.stringify(tmpArray);
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
    const compactPosts = this.getPosts(this.linkCompactOption, elementsCard[0], this.postTitles);
    const classicPosts = this.getPosts(this.linkClassicOption, elementsCard[0], this.postTitles);

    expect(compactPosts).toContain(classicPosts);
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
    const compactPosts = this.changePostView(
      this.linkCompactOption, elementsCard[0], this.dateValues,
    );
    const classicPosts = this.changePostView(
      this.linkClassicOption, elementsCard[0], this.dateValues,
    );

    expect(compactPosts).toContain(classicPosts);
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
    const compactPosts = this.changePostView(
      this.linkCompactOption, elementsCard[0], this.commentsCount,
    );
    const classicPosts = this.changePostView(
      this.linkCompactOption, elementsCard[0], this.commentsCount,
    );

    expect(compactPosts).toContain(classicPosts);
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditListPostsPage();
