/* eslint-disable class-methods-use-this */
const Page = require('./page');

class RedditPostPage extends Page {
  get firstPost() {
    return $('(//h3)[1]');
  }

  get viewAllComments() {
    return $('//button[contains(text(), "View Entire Discussion")]');
  }

  get comment() {
    return $('//div[@data-testid="comment-top-meta"]');
  }

  get sortByButton() {
    return $('//button[@id="CommentSort--SortPicker"]');
  }

  get sortOptionNew() {
    return $('//button/span[contains(text(), "new")]');
  }

  get sortOptionTop() {
    return $('//button/span[contains(text(), "top")]');
  }

  get commentVotes() {
    return $$('(//div[@style="color: rgb(26, 26, 27);" and contains(@class, "_1rZYMD_4xY3gRcSS3p8ODO ")])[position() < 10]');
  }

  get commentDates() {
    return $$('a[class="_1sA-1jNHouHDpgCp1fCQ_F"]');
  }

  get replayButton() {
    return $$('//button[contains(text(), "Reply")]')[1];
  }

  get modalWindow() {
    return $('//body/div[@id="2x-container"]/div[1]/div[2]/div[4]/div[2]/div[1]');
  }

  get googleButton() {
    return $('#google-sso');
  }

  get appleButton() {
    return $('.Sso__appleIdContainer');
  }

  get emailButton() {
    return $('//button[@data-step="email"]');
  }

  get linkTop() {
    return $('//a[@href="/top/" and @role="button"]');
  }

  changeSortOption(element) {
    this.sortByButton.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t found a sort button',
    });

    this.sortByButton.click();
    element.click();
  }

  openFirstPost() {
    this.linkTop.waitForDisplayed({
      timeout: 5000,
    });
    this.linkTop.click();

    this.firstPost.waitForClickable({
      timeout: 7000,
    });
    this.firstPost.click();
  }

  checkTopComments() {
    this.sortByButton.waitForClickable({
      timeout: 6000,
    });
    this.comment.waitForDisplayed({
      timeout: 8000,
    });
    const elements = this.commentVotes;
    const compareData = [];

    elements.map((item) => compareData.push(item.getText()));

    if (compareData[0] === compareData[compareData.length - 1]) {
      throw new Error({
        first: compareData[0],
        last: compareData[compareData.length - 1],
      });
    }
  }

  checkNewComments() {
    this.sortByButton.scrollIntoView();
    this.changeSortOption(this.sortOptionNew);
    this.viewAllComments.waitForDisplayed({
      timeout: 9000,
    });
    const compareData = [];

    this.commentDates.map((item) => compareData.push(item.getText()));

    if (compareData[0] === compareData[compareData.length - 1]) {
      throw new Error('Similar items', {
        first: compareData[0],
        last: compareData[compareData.length - 1],
      });
    }
  }

  openReplayModalWindow() {
    this.comment.waitForDisplayed({
      timeout: 9000,
      timeoutMsg: 'Not ready',
    });

    this.comment.scrollIntoView();
    this.replayButton.click();

    this.modalWindow.waitForDisplayed({
      timeout: 8000,
      timeoutMsg: 'Not found',
    });

    const iframe = this.modalWindow.$('<iframe />');
    browser.switchToFrame(iframe);

    this.googleButton.waitForDisplayed({
      timeout: 6000,
    });
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditPostPage();
