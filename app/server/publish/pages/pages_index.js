/*****************************************************************************/
/* PagesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('pages_index', function () {
  // you can remove this if you return a cursor
  // this.ready();
  return Pages.find();
});
