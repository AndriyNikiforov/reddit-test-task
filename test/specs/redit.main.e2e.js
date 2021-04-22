/* eslint-disable no-undef */
const RedditMainPage = require('../pageobjects/reddit.main.page');
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');
const RedditPostPage = require('../pageobjects/reddit.post.page');

describe('Reddit main page', () => {
  // it('Selected hot option', async () => {
  //   await RedditMainPage.open();
  //   await RedditMainPage.hotPostsAction();

  //   expect(RedditMainPage.linkTopsGrowingCommunities).toBeDisabled();
  //   expect(RedditMainPage.filterCountry).toHaveTextContaining('Everywhere');
  // });

  // it('Selected top option', async () => {
  //   await RedditMainPage.open();
  //   await RedditMainPage.topPostsAction();
  // });

  // it('Change post view', async () => {
  //   await RedditListPostsPage.open();
  //   await RedditListPostsPage.topPageActions();
  // });

  it('Post actions', async () => {
    await RedditPostPage.open();
    await RedditPostPage.postActions();
  });
});
