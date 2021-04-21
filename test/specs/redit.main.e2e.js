const RedditMainPage = require('../pageobjects/reddit.main.page');

describe('Reddit main page', () => {
  it('Selected hot option', async () => {
    await RedditMainPage.open();
  });
});
