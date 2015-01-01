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

    Pages.update({ _id: pageId }, {
      $inc: { paragraphs: 1 }
    });

    Paragraphs.insert({
      pageId: pageId,
      content: content,
      rank: Paragraphs.find().count() + 1
    });

    Session.set('newParagraph', null);
  },

  'click #cancel-new-paragraph': function (e) {
    e.preventDefault();

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
  editorOptions: function () {
    return {
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2,
      mode: 'htmlmixed'
    };
  }
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
