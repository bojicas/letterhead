/*****************************************************************************/
/* ParagraphsNewLink: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ParagraphsNewLink.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ParagraphsNewLink.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  newParagraph: function () {
    if (Meteor.user() && Session.get('newParagraph') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  hideAdminMenu: function () {
    return Session.get('hideAdminMenu');
  }
});

/*****************************************************************************/
/* ParagraphsNewLink: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphsNewLink.created = function () {
};

Template.ParagraphsNewLink.rendered = function () {
};

Template.ParagraphsNewLink.destroyed = function () {
};
