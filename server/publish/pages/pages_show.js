/*****************************************************************************/
/* PagesShow Publish Functions
/*****************************************************************************/

Meteor.publish('pages_show', function (pageId) {
  check(pageId, String);
  return [
    Pages.find(pageId),
    Paragraphs.find({ pageId: pageId }, { sort: { rank: 1 } })
  ];
});
