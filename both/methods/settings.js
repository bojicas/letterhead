/*****************************************************************************/
/* Settings Methods */
/*****************************************************************************/

Meteor.methods({
  updateSettings: function (settings) {
    if (Meteor.user()) {
      Settings.update({}, {
        $set: settings
      });
    }
  }
});
