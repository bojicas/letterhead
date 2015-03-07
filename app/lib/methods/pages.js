/*****************************************************************************/
/* Pages Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/pages/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
 pagesDelete: function (page) {
   check(Meteor.userId(), String);

   if (page.paragraphs === 0) {
     Pages.remove({ _id: page._id });
   } else {
     throw new Meteor.Error('can-not-delete', 'Page must be empty');
   }
 }
});
