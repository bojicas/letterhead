(function () {

  'use strict';

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

    this.Given(/^I am a new user$/, function (callback) {
      this.browser.
        setViewportSize({
          width: 1024,
          height: 768
        }, true).
        pause(300).
        call(callback);
      // no callbacks! DDP has been promisified so you can just return it
      // return this.ddp.callAsync('reset', []); // this.ddp is a connection to the mirror
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      this.browser. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.HOST, relativePath)). // process.env.HOST always points to the mirror
        pause(300).
        call(callback);
    });

    this.When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (field, value, callback) {
      var fieldId = 'input#' + field.replace(/\s/g, '-');
      this.browser.
        waitForVisible(fieldId).
        setValue(fieldId, value).
        call(callback);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" within "([^"]*)"$/, function (expectedText, selector, callback) {
      var selectorId = '#' + selector.replace(/\s/g, '-');
      this.browser.
        waitForVisible(selectorId).
        getText(selectorId).should.become(expectedText).and.notify(callback);
    });

  };

})();
