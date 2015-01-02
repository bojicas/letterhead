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
  'submit #edit-paragraph-form': function (e, tmpl) {
    e.preventDefault();

    var content = tmpl.find('#editParagraph').value;

    Paragraphs.update({ _id: this._id },
      { $set: { content: content } }
    );

    Session.set('editParagraph', null);
  },

  'click #cancel-edit-paragraph': function (e) {
    e.preventDefault();

    Session.set('editParagraph', null);
  },

  'click #smart-editor-toggle': function (e) {
    e.preventDefault();

    if (Session.get('smartEditor')) {
      Session.set('smartEditor', false);
      App.setAlert('Text area editor enabled.', 'info');
    } else {
      Session.set('smartEditor', true);
      App.setAlert('Smart editor enabled.', 'info');
    }
  }
});

Template.ParagraphsEdit.helpers({
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
      tabMode: 'spaces',
      mode: 'htmlmixed'
    };
  },

  smartEditor: function () {
    if (Session.get('smartEditor')) {
      return true;
    } else {
      return false;
    }
  }
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
