(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
      Paragraphs.remove({});
      Pages.remove({});
      Settings.remove({});
      Meteor.users.remove({});
      // create user
      Accounts.createUser({
        username: 'admin',
        password: 'admin',
        email: 'admin@example.com'
      });
      // add settings record
      Settings.insert({});
    }
  });

})();
