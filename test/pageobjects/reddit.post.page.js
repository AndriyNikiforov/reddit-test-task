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
    return $$('//div[style="color: rgb(26, 26, 27);"]');
  }

  get commentDates() {
    return $$('//a[class="_1sA-1jNHouHDpgCp1fCQ_F"]');
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

  changeSortOption(element) {
    this.sortByButton.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t found a sort button',
    });

    this.sortByButton.click();
    element.click();
  }

  openFirstPost() {
    this.firstPost.waitForClickable({
      timeout: 8000,
    });
    this.firstPost.click();
  }

  checkTopComments() {
    this.sortByButton.scrollIntoView();
    this.changeSortOption(this.sortOptionTop);
    this.comment.waitForDisplayed({
      timeout: 9000,
    });

    const compareData = [];
    this.commentVotes.map((item) => compareData.push(item.getText()));
  }

  checkNewComments() {
    this.sortByButton.scrollIntoView();
    this.changeSortOption(this.sortOptionNew);
    this.comment.waitForDisplayed({
      timeout: 8000,
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
      timeout: 8000,
      timeoutMsg: 'Not ready',
    });

    this.replayButton.waitForDisplayed({
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
