/* eslint-disable no-undef */
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');
const RedditPostPage = require('../pageobjects/reddit.post.page');

describe('Reddit posts page', () => {
  // it('Top posts check title', () => {
  //   RedditListPostsPage.open();
  //   RedditListPostsPage.topPageCheckTitle();
  // });

  // it('Top posts check date', () => {
  //   RedditListPostsPage.open();
  //   RedditListPostsPage.topPageCheckDate();
  // });

  // it('Top posts check comments count', () => {
  //   RedditListPostsPage.open();
  //   RedditListPostsPage.topPageCommentsCount();
  // });

  it('Check new comments', () => {
    RedditPostPage.open();
    RedditPostPage.openFirstPost();
    RedditPostPage.checkNewComments();
  });

  it('Check top comments', () => {
    RedditPostPage.open();
    RedditPostPage.openFirstPost();
    RedditPostPage.checkTopComments();
  });

  // it('Replay action', () => {
  //   RedditPostPage.open();
  //   RedditPostPage.openFirstPost();
  //   RedditPostPage.openReplayModalWindow();

  //   expect(RedditPostPage.googleButton).toBeClickable();
  //   expect(RedditPostPage.appleButton).toBeClickable();
  // });
});
