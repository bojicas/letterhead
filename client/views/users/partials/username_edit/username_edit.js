/*****************************************************************************/
/* UsernameEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UsernameEdit.events({
  'submit #username-edit': function (e, tmpl) {
    e.preventDefault();

    var username = tmpl.find('#username').value;

    var user = {
      username: username
    };

    var readyToSubmit = confirm('Are you sure you want to submit? Changes can affect your login!');

    if (readyToSubmit) {
      Meteor.call('updateProfile', user, function (error, result) {
        if (error) {
          return Alerts.set(error.reason);
        }
        Alerts.set('Profile updated', 'success');
        Session.set('disabledUsernameInput', undefined);
      });
    }
  },

  'click #editUsername': function (e) {
    e.preventDefault();

    Session.set('disabledUsernameInput', Meteor.user()._id);
  }
});

Template.UsernameEdit.helpers({
  disabledUsernameInput: function () {
    if (Session.get('disabledUsernameInput') === Meteor.user()._id) {
      return '';
    } else {
      return 'disabled';
    }
  }
});

/*****************************************************************************/
/* UsernameEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.UsernameEdit.created = function () {
};

Template.UsernameEdit.rendered = function () {
  Session.set('disabledUsernameInput', undefined);
};

Template.UsernameEdit.destroyed = function () {
};
