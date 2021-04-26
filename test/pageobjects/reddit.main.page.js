/* eslint-disable class-methods-use-this */
const Page = require('./page');

class RedditMainPage extends Page {
  get linkHot() {
    return $('//a[@href="/hot/"][span[text()="Hot" and not(@class)]]');
  }

  get linkTopsGrowingCommunities() {
    return $('=View All');
  }

  get filterCountry() {
    return $('//button[@id="CountrySort--CountrySortPicker"]/span[text()="Everywhere"]');
  }

  get linkTop() {
    return $('//a[@href="/top/" and @role="button"]');
  }

  get postsVote() {
    return $$('xpath', '//div[@style="color:rgb(26, 26, 27);"]');
  }

  hotPostsAction() {
    this.linkHot.waitForDisplayed({
      timeout: 7000,
    });
    this.linkHot.click();

    this.linkTopsGrowingCommunities.waitForDisplayed({
      timeout: 7000,
    });
  }

  topPostsAction() {
    this.linkTop.waitForDisplayed({
      timeout: 5000,
    });
    this.linkTop.click();

    const elements = this.postsVote;

    if (Number(elements[0]) < Number(elements[1])) {
      throw new Error('Second element biggest than first.');
    }
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditMainPage();
