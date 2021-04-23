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
    return $('//button[@id="CommentSort--SortPicker"]');
  }

  get sortOption() {
    return $('//button/span[contains(text(), "new")]');
  }

  get replayButton() {
    return $$('//button[contains(text(), "Reply")]')[0];
  }

  get googleButton() {
    return $('#google-sso');
  }

  get appleButton() {
    return $('.Sso__appleIdContainer');
  }

  get emailField() {
    return $('[name="email"]');
  }

  postActions() {
    this.firstPost.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Can\'t find a link to the first post',
    });
    this.firstPost.click();

    this.viewAllComments.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t find a button to showing comments',
    });

    this.viewAllComments.click();

    this.sortByButton.scrollIntoView();
    this.sortByButton.waitForClickable({
      timeout: 7000,
      timeoutMsg: 'Can\'t found a sort button',
    });
    this.sortByButton.click();
    this.sortOption.click();

    $('//div[@data-testid="comment-top-meta"]').waitForDisplayed({
      timeout: 8000,
      timeoutMsg: 'Not ready',
    });

    const commentElements = $$('a[class="_1sA-1jNHouHDpgCp1fCQ_F"]');
    const timeComments = [];
    commentElements.map((item) => timeComments.push(item.getText()));

    if (timeComments[0] === timeComments[timeComments.length - 1]) {
      throw new Error('Similar time', {
        first: timeComments[0],
        last: timeComments[timeComments.length - 1],
      });
    }

    // const ratingElements = $$();
    // const ratingComments = [];
    // //ratingElements
  }

  openReplayModalWindow() {
    $('//div[@data-testid="comment-top-meta"]').waitForDisplayed({
      timeout: 7000,
      timeoutMsg: 'Not ready',
    });

    this.replayButton.waitForClickable({
      timeout: 5000,
      timeoutMsg: 'Not ready',
    });

    this.replayButton.click();

    const divModal = $('//body/div[@id="2x-container"]/div[1]/div[2]/div[4]/div[2]/div[1]');
    divModal.waitForDisplayed({
      timeout: 7000,
      timeoutMsg: 'Not found',
    });

    const iframe = divModal.$('<iframe />');
    browser.switchToFrame(iframe);

    this.googleButton.waitForDisplayed({
      timeout: 6000,
    });

    this.appleButton.waitForDisplayed({
      timeout: 6000,
    });

    this.emailField.waitForDisplayed({
      timeout: 6000,
    });
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditPostPage();
