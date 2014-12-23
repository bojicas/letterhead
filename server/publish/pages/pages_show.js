/*****************************************************************************/
/* PagesShow Publish Functions
/*****************************************************************************/

Meteor.publish('pages_show', function (pageId) {
  check(pageId, String);
  return Pages.find(pageId);
});
