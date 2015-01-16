/*****************************************************************************/
/* UsersShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UsersShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit #edit-username': function (e, tmpl) {
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

Template.UsersShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* UsersShow: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersShow.created = function () {
};

Template.UsersShow.rendered = function () {
};

Template.UsersShow.destroyed = function () {
};
