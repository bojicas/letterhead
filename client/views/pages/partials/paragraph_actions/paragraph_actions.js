/*****************************************************************************/
/* ParagraphActions: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ParagraphActions.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .edit-paragraph-action': function (e) {
    e.preventDefault();

    Session.set('editParagraph', this._id);
  }
});

Template.ParagraphActions.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ParagraphActions: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphActions.created = function () {
};

Template.ParagraphActions.rendered = function () {
};

Template.ParagraphActions.destroyed = function () {
};
