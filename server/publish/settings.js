/*****************************************************************************/
/* Settings Publish Functions
/*****************************************************************************/

Meteor.publish(null, function () {
  // you can remove this if you return a cursor
  // this.ready();
  return Settings.find();
});
