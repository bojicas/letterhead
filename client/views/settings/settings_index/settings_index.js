/*****************************************************************************/
/* SettingsIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.SettingsIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.SettingsIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* SettingsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.SettingsIndex.created = function () {
};

Template.SettingsIndex.rendered = function () {
  if (Session.get('hideAdminMenu')) {
    $('.lh-breadcrumb').hide();
  } else {
    $('.lh-breadcrumb').show();
  }
};

Template.SettingsIndex.destroyed = function () {
};
