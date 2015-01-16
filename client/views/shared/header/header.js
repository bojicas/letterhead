/*****************************************************************************/
/* Header: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Header.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Header.helpers({
  hideAdminMenu: function () {
    return Session.get('hideAdminMenu');
  }
});

/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.created = function () {
};

Template.Header.rendered = function () {
};

Template.Header.destroyed = function () {
};
