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
  'submit #general-settings': function (e, tmpl) {
    e.preventDefault();

    var branding = tmpl.find('#branding').value;
    var disqusShortname = tmpl.find('#disqusShortname').value;
    var googleTrackingId = tmpl.find('#googleTrackingId').value;

    var settings = {
      branding: branding,
      disqusShortname: disqusShortname,
      googleTrackingId: googleTrackingId
    };

    Meteor.call('updateSettings', settings, function (error, result) {
      if (error) {
        return Alerts.set(error.reason);
      }
      Alerts.set('Settings updated', 'success');
    });
  }
});

Template.SettingsIndex.helpers({
  activeSection: function (section) {
    if (Session.get('appSettings') === section) {
      return 'active';
    } else {
      return '';
    }
  },

  settings: function () {
    return Settings.findOne();
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
