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
      Meteor.call('updateUsername', user, function (error, result) {
        if (error) {
          return Alerts.set(error.reason);
        }
        Alerts.set('Username updated', 'success');
        Session.set('disabledUsernameInput', undefined);
      });
    }
  },

  'submit #email-edit': function (e, tmpl) {
    e.preventDefault();

    var email = tmpl.find('#email').value;


    var readyToSubmit = confirm('Are you sure you want to submit? Changes can affect your login!');

    if (readyToSubmit) {
      Meteor.call('updateEmail', email, function (error, result) {
        if (error) {
          return Alerts.set(error.reason);
        }
        Alerts.set('Email updated', 'success');
        Session.set('disabledEmailInput', undefined);
      });
    }
  },

  'click #editUsername': function (e) {
    e.preventDefault();

    Session.set('disabledUsernameInput', Meteor.user()._id);
  },

  'click #editEmail': function (e) {
    e.preventDefault();

    Session.set('disabledEmailInput', Meteor.user()._id);
  }
});

Template.UsernameEdit.helpers({
  disabledUsernameInput: function () {
    if (Session.get('disabledUsernameInput') === Meteor.user()._id) {
      return '';
    } else {
      return 'disabled';
    }
  },

  disabledEmailInput: function () {
    if (Session.get('disabledEmailInput') === Meteor.user()._id) {
      return '';
    } else {
      return 'disabled';
    }
  },

  currentUserEmail: function () {
    return Meteor.user().emails[0].address;
  }
});

/*****************************************************************************/
/* UsernameEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.UsernameEdit.created = function () {
};

Template.UsernameEdit.rendered = function () {
  Session.set('disabledUsernameInput', undefined);
  Session.set('disabledEmailInput', undefined);
};

Template.UsernameEdit.destroyed = function () {
};
