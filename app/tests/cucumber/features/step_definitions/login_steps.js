(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');

    this.When(/^I click on login dropdown list$/, function (callback) {
      var selector = '#login-dropdown-list a.dropdown-toggle';
      this.browser.
        waitForVisible(selector).
        click(selector).
        pause(300).
        call(callback);
    });

    this.When(/^I click on sign in button$/, function (callback) {
      this.browser.
        click('#login-buttons-password').
        pause(300).
        call(callback);
    });

  };

})();
