const RedditMainPage = require('../pageobjects/reddit.main.page');

describe('Reddit main page', () => {
  it('Selected hot option', async () => {
    await RedditMainPage.open();
    await RedditMainPage.mainPageActions();

    expect(RedditMainPage.linkTopsGrowingCommunities).toBeDisabled();
    expect(RedditMainPage.filterCountry).toHaveTextContaining('Everywhere');
  });
});
