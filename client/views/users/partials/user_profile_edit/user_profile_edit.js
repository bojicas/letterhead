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

    Alerts.set('Saving profile', 'success');
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
