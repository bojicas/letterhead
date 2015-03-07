/*****************************************************************************/
/* Users Methods */
/*****************************************************************************/

Meteor.methods({
  updateUsername: function (user) {
    Meteor.users.update({ _id: this.userId }, {
      $set: { username: user.username }
    });
  },

  updateEmail: function (email) {
    Meteor.users.update({ _id: this.userId, "emails.address": Meteor.user().emails[0].address }, {
      $set: { "emails.$.address" : email }
    });
  },

  updateProfile: function (profile) {
    Meteor.users.update({ _id: this.userId }, {
      $set: { profile: profile }
    });
  }
});
