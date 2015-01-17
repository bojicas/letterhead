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
  activeSection: function (section) {
    if (Session.get('appSettings') === section) {
      return 'active';
    } else {
      return '';
    }
  }
});

/*****************************************************************************/
/* SettingsIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.SettingsIndex.created = function () {
};

Template.SettingsIndex.rendered = function () {
  Session.set('appSettings', 'general');
};

Template.SettingsIndex.destroyed = function () {
};
