/* eslint-disable class-methods-use-this */
const Page = require('./page');

class RedditPostPage extends Page {
  get firstPost() {
    return $('(//h3)[1]');
  }

  get viewAllComments() {
    return $('//button[starts-with(text(), "View Entire Discussion")]');
  }

  get sortByButton() {
    return $('//span[contains(text(), "best")]');
  }

  get sortOption() {
    return $('//button/span[contains(text(), "new")]');
  }

  get commentsTime() {
    return browser.findElements('xpath', '//a[@id]');
  }

  async postActions() {
    await (await this.firstPost).waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Can\'t find a link to the first post',
    });
    await (await this.firstPost).click();

    await (await this.viewAllComments).waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t find a button to showing comments',
    });

    await (await this.viewAllComments).click();

    await (await this.sortByButton).click();
    await (await this.sortOption).click();

    const timesComment = (await this.commentsTime);
    console.debug('GGG', timesComment[0].getText());
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditPostPage();
