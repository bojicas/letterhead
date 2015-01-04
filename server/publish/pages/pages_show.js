/*****************************************************************************/
/* PagesShow Publish Functions
/*****************************************************************************/

Meteor.publish('pages_show', function (pageId) {
  check(pageId, String);
  var page = Pages.findOne({ $or: [ { _id: pageId }, { slug: pageId } ]});
  return [
    Pages.find({ $or: [ { _id: pageId }, { slug: pageId } ]}),
    Paragraphs.find({ pageId: page._id }, { sort: { rank: 1 } })
  ];
});
