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
  'click #user-settings-username': function (e) {
    e.preventDefault();

    Session.set('userSettings', 'username');
  },

  'click #user-settings-profile': function(e) {
    e.preventDefault();

    Session.set('userSettings', 'profile');
  }
});

Template.UsersShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  activeSection: function (section) {
    if (Session.get('userSettings') === section) {
      return 'active';
    } else {
      return '';
    }
  }
});

/*****************************************************************************/
/* UsersShow: Lifecycle Hooks */
/*****************************************************************************/
Template.UsersShow.created = function () {
};

Template.UsersShow.rendered = function () {
  Session.set('userSettings', 'username');
  if (Session.get('hideAdminMenu')) {
    $('.lh-breadcrumb').hide();
  } else {
    $('.lh-breadcrumb').show();
  }
};

Template.UsersShow.destroyed = function () {
};
