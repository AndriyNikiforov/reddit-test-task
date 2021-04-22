/* eslint-disable no-undef */
const RedditMainPage = require('../pageobjects/reddit.main.page');
const RedditListPostsPage = require('../pageobjects/reddit.list.posts.page');
const RedditPostPage = require('../pageobjects/reddit.post.page');

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

  it('Change post view', () => {
    RedditListPostsPage.open();

    RedditListPostsPage.topPageCheckTitle();
    RedditListPostsPage.topPageCheckDate();
    RedditListPostsPage.topPageCommentsCount();
  });

  // it('Post actions', () => {
  //   browser.addLocatorStrategy('jsQuery', () => {
  //     const xPathResult = document.evaluate('//a[contains(@id, "CommentTopMeta--Created")]', document.body, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
  //     const nodes = [];
  //     let node = xPathResult.iterateNext();

  //     while (node) {
  //       nodes.push(node);
  //       node = xPathResult.iterateNext();
  //     }

  //     return (nodes.length === 0) ? 'GG' : nodes;
  //   });

  //   RedditPostPage.open();
  //   RedditPostPage.postActions();
  //   browser.pause(1000000);
  // });
});
