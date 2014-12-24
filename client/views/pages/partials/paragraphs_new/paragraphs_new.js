/*****************************************************************************/
/* ParagraphsNew: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ParagraphsNew.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit #new-paragraph-form': function (e, tmpl) {
    e.preventDefault();

    var pageId = this._id;

    var content = tmpl.find('#newParagraph').value;

    Paragraphs.insert({
      pageId: pageId,
      content: content
    });

    Session.set('newParagraph', null);
  }
});

Template.ParagraphsNew.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ParagraphsNew: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphsNew.created = function () {
};

Template.ParagraphsNew.rendered = function () {
};

Template.ParagraphsNew.destroyed = function () {
};
