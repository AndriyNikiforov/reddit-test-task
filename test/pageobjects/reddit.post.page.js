/* eslint-disable class-methods-use-this */
const Page = require('./page');

class RedditPostPage extends Page {
  get firstPost() {
    return $('(//h3)[1]');
  }

  get viewAllComments() {
    return $('//button[starts-with(text(), "View Entire Discussion")]');
  }

  get comment() {
    return $('//div[@data-testid="comment-top-meta"]');
  }

  get sortByButton() {
    return $('//button[@id="CommentSort--SortPicker"]');
  }

  get sortOption() {
    return $('//button/span[contains(text(), "new")]');
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

  changeSortOption() {
    this.sortByButton.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t found a sort button',
    });

    this.sortByButton.click();
    this.sortOption.click();
  }

  compareData(elements) {
    const compareData = [];

    elements.map((item) => compareData.push(item.getText()));

    if (compareData[0] === compareData[compareData.length - 1]) {
      throw new Error('Similar items', {
        first: compareData[0],
        last: compareData[compareData.length - 1],
      });
    }
  }

  postActions() {
    this.firstPost.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t find a link to the first post',
    });
    this.firstPost.click();

    this.comment.waitForDisplayed({
      timeout: 9000,
      timeoutMsg: 'Can\'t find a comment',
    });

    this.viewAllComments.waitForClickable({
      timeout: 8000,
      timeoutMsg: 'Can\'t find a button to showing comments',
    });
    this.viewAllComments.click();

    this.changeSortOption();
    this.comment.waitForDisplayed({
      timeout: 7000,
    });

    this.comment.waitForDisplayed({
      timeout: 8000,
      timeoutMsg: 'Not ready',
    });

    this.compareData($$('a[class="_1sA-1jNHouHDpgCp1fCQ_F"]'));
    this.compareData($$('div[style="color: rgb(26, 26, 27);"]'));
  }

  openReplayModalWindow() {
    this.comment.waitForDisplayed({
      timeout: 8000,
      timeoutMsg: 'Not ready',
    });

    this.replayButton.waitForDisplayed({
      timeout: 9000,
      timeoutMsg: 'Not ready',
    });
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
