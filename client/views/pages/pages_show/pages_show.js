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
  'click #new-paragraph-action': function (e) {
    e.preventDefault();

    Session.set('newParagraph', this._id);
  },

  'click .edit-paragraph-action': function (e) {
    e.preventDefault();

    Session.set('editParagraph', this._id);
  }
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
  },

  newParagraph: function () {
    if (Meteor.user() && Session.get('newParagraph') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  editParagraph: function () {
    if (Meteor.user() && Session.get('editParagraph') === this._id) {
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
  Session.set('newParagraph', null);
  Session.set('editParagraph', null);
};

Template.PagesShow.destroyed = function () {
};
