/*****************************************************************************/
/* ParagraphsEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ParagraphsEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #cancel-edit-paragraph': function (e) {
    e.preventDefault();

    Session.set('editParagraph', null);
  }
});

Template.ParagraphsEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ParagraphsEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphsEdit.created = function () {
};

Template.ParagraphsEdit.rendered = function () {
};

Template.ParagraphsEdit.destroyed = function () {
};
