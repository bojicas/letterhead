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
   Paragraphs.remove({ _id: paragraph._id });
   Paragraphs.update({ rank: { $gt: paragraph.rank } }, {
     $inc: { rank: -1 }
   }, {
     multi: true
   });
 }
});
