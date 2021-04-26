/* eslint-disable no-undef */
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');
const RedditPostPage = require('../pageobjects/reddit.post.page');

describe('Reddit posts page', () => {
  // it('Change post list view', () => {
  //   RedditListPostsPage.open();

  //   RedditListPostsPage.topPageCheckTitle();
  //   RedditListPostsPage.topPageCheckDate();
  //   RedditListPostsPage.topPageCommentsCount();
  // });

  it('Post page actions', () => {
    RedditPostPage.open();
    RedditPostPage.postActions();
    RedditPostPage.openReplayModalWindow();

    expect(RedditPostPage.googleButton).toBeClickable();
    expect(RedditPostPage.appleButton).toBeClickable();
  });
});
