(function () {

  'use strict';

  module.exports = function () {

    var url = require('url');

    this.When(/^I click on login dropdown list$/, function () {
      var selector = '#login-dropdown-list a.dropdown-toggle';
      return this.browser.
        waitForVisible(selector).
        click(selector).
        pause(300);
    });

    this.When(/^I click on sign in button$/, function () {
      return this.browser.
        click('#login-buttons-password').
        pause(300);
    });

  };

})();
