(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^I am on the home page$/, function (callback) {
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        call(callback);
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

    this.Then(/^I should see the title of "([^"]*)"$/, function (expectedTitle, callback) {

      helper.world.browser.
        title(function (err, res) {
          assert.equal(res.value, expectedTitle);
          callback();
        });
    });



  };

})();