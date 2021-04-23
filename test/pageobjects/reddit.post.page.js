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

  get replayButton() {
    return $$('//i[@cl]')[1];
  }

  get googleButton() {
    return $('#google-sso');
  }

  get appleButton() {
    return $('#appleid-signin');
  }

  get emailField() {
    return $('#regEmail-prevent');
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
      timeout: 5000,
      timeoutMsg: 'Can\'t found a sort button',
    });
    this.sortByButton.click();
    this.sortOption.click();

    $('<p />').waitForDisplayed({
      timeout: 7000,
      timeoutMsg: 'Not ready',
    });

    $('//span[contains(text(),"Stickied comment")]').waitForDisplayed({
      timeout: 7000,
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
    $('<p />').waitForDisplayed({
      timeout: 7000,
      timeoutMsg: 'Not ready',
    });

    this.replayButton.click();

    this.googleButton.waitForClickable({
      timeout: 6000,
    });
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditPostPage();
