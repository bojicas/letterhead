/*****************************************************************************/
/* Paragraphs Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/paragraphs/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
 paragraphsDelete: function (paragraph) {
    Pages.update({ _id: paragraph.pageId }, {
      $inc: { paragraphs: -1 }
    });
   Paragraphs.remove({ _id: paragraph._id });
   Paragraphs.update({ pageId: paragraph.pageId, rank: { $gt: paragraph.rank } }, {
     $inc: { rank: -1 }
   }, {
     multi: true
   });
 }
});
