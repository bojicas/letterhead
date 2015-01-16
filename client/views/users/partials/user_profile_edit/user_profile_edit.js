/*****************************************************************************/
/* UserProfileEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.UserProfileEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit #profile-edit': function (e, tmpl) {
    e.preventDefault();

    var displayName = tmpl.find('#displayName').value;
    var bio = tmpl.find('#bio').value;

    var profile = {
      displayName: displayName,
      bio: bio
    };

    Meteor.call('updateProfile', profile, function (error, result) {
      if (error) {
        return Alerts.set(error.reason);
      }
      Alerts.set('Profile updated', 'success');
    });
  }
});

Template.UserProfileEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* UserProfileEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.UserProfileEdit.created = function () {
};

Template.UserProfileEdit.rendered = function () {
};

Template.UserProfileEdit.destroyed = function () {
};
