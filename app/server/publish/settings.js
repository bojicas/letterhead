/*****************************************************************************/
/* Settings Publish Functions
/*****************************************************************************/

Meteor.publish(null, function () {
  return Settings.find();
});