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

    browser.waitUntil(() => {
      const state = browser.execute(() => document.readyState);

      return state === 'complete';
    }, {
      timeout: 60000,
      timeoutMsg: 'Oops! Check your internet connection',
    });

    const commentElements = browser.custom$$('jsQuery');
    console.debug('GG', commentElements);
    const timePosts = [];
    commentElements.map((item) => timePosts.push(item.getText()));

    // if (timePosts[0] === timePosts[timePosts.length - 1]) {
    //   throw new Error('Similar time', {
    //     first: timePosts[0],
    //     last: timePosts[timePosts.length - 1],
    //   });
    // }
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditPostPage();
