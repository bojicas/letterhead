/*****************************************************************************/
/* Users Methods */
/*****************************************************************************/

Meteor.methods({
  updateProfile: function (user) {
    Meteor.users.update({ _id: this.userId }, {
      $set: { username: user.username }
    });
  }
});
