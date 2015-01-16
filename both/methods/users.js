/*****************************************************************************/
/* Users Methods */
/*****************************************************************************/

Meteor.methods({
  updateUsername: function (user) {
    Meteor.users.update({ _id: this.userId }, {
      $set: { username: user.username }
    });
  },

  updateProfile: function (profile) {
    Meteor.users.update({ _id: this.userId }, {
      $set: { profile: profile }
    });
  }
});
