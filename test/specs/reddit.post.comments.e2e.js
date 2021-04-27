/* eslint-disable no-undef */
const RedditPostPage = require('../pageobjects/reddit.post.page');

describe('Reddit posts page', () => {
  it('Check top comments', () => {
    RedditPostPage.open();
    RedditPostPage.openFirstPost();
    RedditPostPage.checkTopComments();
  });

  it('Check new comments', () => {
    RedditPostPage.open();
    RedditPostPage.openFirstPost();
    RedditPostPage.checkNewComments();
  });

  it('Replay action', () => {
    RedditPostPage.open();
    RedditPostPage.openFirstPost();
    RedditPostPage.openReplayModalWindow();

    expect(RedditPostPage.googleButton).toBeClickable();
    expect(RedditPostPage.appleButton).toBeClickable();
  });
});
