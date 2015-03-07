/*****************************************************************************/
/* Marketing Publish Functions
/*****************************************************************************/

Meteor.publish('marketing', function () {
  return Pages.find({ type: 'INDEX' });
});
