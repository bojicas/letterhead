(function () {

  'use strict';

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Before(function () {
      return global.ddp.call('reset', []);
    });

    this.Given(/^I am a new user$/, function () {
      return this.browser.
        setViewportSize({
          width: 1024,
          height: 768
        }, true).
        url(url.resolve(process.env.HOST, 'sign-out')).
        pause(300);
      // no callbacks! DDP has been promisified so you can just return it
      // return this.ddp.callAsync('reset', []); // this.ddp is a connection to the mirror
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      return this.browser. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.HOST, relativePath)). // process.env.HOST always points to the mirror
        pause(300);
    });

    this.When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (field, value) {
      var fieldId = 'input#' + field.replace(/\s/g, '-');
      return this.browser.
        waitForVisible(fieldId).
        setValue(fieldId, value);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle) {
      // you can use chai-as-promised in step definitions also
      return this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle);
    });

    this.Then(/^I should see "([^"]*)" within "([^"]*)"$/, function (expectedText, selector, callback) {
      var selectorId = '#' + selector.replace(/\s/g, '-');
      return this.browser.
        waitForVisible(selectorId).
        getText(selectorId).should.become(expectedText);
    });

  };

})();
