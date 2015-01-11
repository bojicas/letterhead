/*****************************************************************************/
/* UsersEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UsersEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit form': function (e, tmpl) {
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
        Router.go('users.show', { _id: Meteor.userId() });
      });
    }

  }
});

Template.UsersEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* UsersEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersEdit.created = function () {
};

Template.UsersEdit.rendered = function () {
};

Template.UsersEdit.destroyed = function () {
};
