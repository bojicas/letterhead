/*****************************************************************************/
/* PagesShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PagesShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PagesShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  paragraphs: function () {
    return Paragraphs.find();
  },

  editTitle: function () {
    if (Meteor.user() && Session.get('editTitle') === this._id) {
      return true;
    } else {
      return false;
    }
  }
});

/*****************************************************************************/
/* PagesShow: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesShow.created = function () {
};

Template.PagesShow.rendered = function () {
  Session.set('editTitle', null);
};

Template.PagesShow.destroyed = function () {
};
