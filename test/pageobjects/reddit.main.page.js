const Page = require('./page');

class RedditMainPage extends Page {
  get linkHot() {
    return $('//a[@href="/hot/"]/span[text()="Hot" and not(@class)]');
  }

  get linkTopsGrowingCommunities() {
    return $('=Today\'s Top Growing Communities');
  }

  get filterCountry() {
    return $('//button[@id="CountrySort--CountrySortPicker"]/span[text()="Everywhere"]');
  }

  async mainPageActions() {
    await (await this.linkHot).waitForDisplayed({
      timeout: 5000,
    });
    await (await this.linkHot).click();

    await (await this.linkTopsGrowingCommunities).waitForDisplayed({
      timeout: 5000,
    });
  }

  open() {
    return super.open('');
  }
}

module.exports = new RedditMainPage();
