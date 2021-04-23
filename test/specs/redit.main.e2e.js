/* eslint-disable no-undef */
const RedditMainPage = require('../pageobjects/reddit.main.page');

describe('Reddit main page', () => {
  it('Selected hot option', () => {
    RedditMainPage.open();
    RedditMainPage.hotPostsAction();

    expect(RedditMainPage.linkTopsGrowingCommunities).toBeDisplayed();
    expect(RedditMainPage.filterCountry).toHaveTextContaining('Everywhere');
  });

  it('Selected top option', () => {
    RedditMainPage.open();
    RedditMainPage.topPostsAction();
  });
});
