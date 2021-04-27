/* eslint-disable no-undef */
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');

describe('Reddit posts page', () => {
  it('Top posts check title', () => {
    RedditListPostsPage.open();
    RedditListPostsPage.topPageCheckTitle();
  });

  it('Top posts check date', () => {
    RedditListPostsPage.open();
    RedditListPostsPage.topPageCheckDate();
  });

  it('Top posts check comments count', () => {
    RedditListPostsPage.open();
    RedditListPostsPage.topPageCommentsCount();
  });
});
