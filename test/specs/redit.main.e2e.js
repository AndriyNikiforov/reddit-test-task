/* eslint-disable no-undef */
const RedditMainPage = require('../pageobjects/reddit.main.page');
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');
const RedditPostPage = require('../pageobjects/reddit.post.page');

describe('Reddit main page', () => {
  // it('Selected hot option', () => {
  //   RedditMainPage.open();
  //   RedditMainPage.hotPostsAction();

  //   expect(RedditMainPage.linkTopsGrowingCommunities).toBeDisplayed();
  //   expect(RedditMainPage.filterCountry).toHaveTextContaining('Everywhere');
  // });

  // it('Selected top option', () => {
  //   RedditMainPage.open();
  //   RedditMainPage.topPostsAction();
  // });

  // it('Change post view', () => {
  //   RedditListPostsPage.open();

  //   RedditListPostsPage.topPageCheckTitle();
  //   RedditListPostsPage.topPageCheckDate();
  //   RedditListPostsPage.topPageCommentsCount();
  // });

  it('Post actions', () => {
    RedditPostPage.open();
    RedditPostPage.postActions();
    RedditPostPage.openReplayModalWindow();

    // expect(RedditPostPage.appleButton).toBeDisplayed();
    // expect(RedditPostPage.emailField).toBeDisplayed();
  });
});
