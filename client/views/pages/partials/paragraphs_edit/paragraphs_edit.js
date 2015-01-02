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
    Session.set('editParagraphContent', null);
  },

  'click #cancel-edit-paragraph': function (e) {
    e.preventDefault();

    Session.set('editParagraph', null);
    Session.set('editParagraphContent', null);
  },

  'click #smart-editor-toggle': function (e, tmpl) {
    e.preventDefault();

    var content = tmpl.find('#editParagraph').value;
    console.log(content);
    Session.set('editParagraphContent', content);

    if (Session.get('smartEditor')) {
      Session.set('smartEditor', false);
      App.setAlert('Text area editor enabled.', 'info');
      Meteor.setTimeout(function () {
        $('.edit-paragraph-text-area').autosize();
      }, 50);
    } else {
      Session.set('smartEditor', true);
      App.setAlert('Smart editor enabled.', 'info');
      Meteor.setTimeout(function () {
        $('.edit-paragraph-text-area').trigger('autosize.destroy');
      }, 50);
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
  paragraphContent: function () {
    return Session.get('editParagraphContent') || this.content;
  },

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
  Session.set('editParagraphContent', null);
  if (!Session.get('smartEditor')) {
    $('.edit-paragraph-text-area').autosize();
  } else {
    $('.edit-paragraph-text-area').trigger('autosize.destroy');
  }
};

Template.ParagraphsEdit.destroyed = function () {
};
