/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .lh-close-popup': function (e) {
    e.preventDefault();

    $('.lh-navbar-block').hide();
    $('.lh-breadcrumb').hide();
    Session.set('hideAdminMenu', true);

    Alerts.set('Hide the admin menu.', 'info');
  },

  'click .lh-show-popup': function (e) {
    e.preventDefault();

    $('.lh-navbar-block').show();
    $('.lh-breadcrumb').show();
    Session.set('hideAdminMenu', undefined);

    Alerts.set('Show the admin menu.', 'info');
  }
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  hideAdminMenu: function () {
    return Session.get('hideAdminMenu');
  }
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
  Session.set('hideAdminMenu', undefined);
};

Template.MasterLayout.destroyed = function () {
};
