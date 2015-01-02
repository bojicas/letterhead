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
  },

  'click #new-smart-editor-toggle': function (e, tmpl) {
    e.preventDefault();

    var content = tmpl.find('#newParagraph').value;
    Session.set('newParagraphContent', content);

    if (Session.get('smartEditor')) {
      Session.set('smartEditor', false);
      App.setAlert('Text area editor enabled.', 'info');
      Meteor.setTimeout(function () {
        $('.new-paragraph-text-area').autosize();
      }, 50);
    } else {
      Session.set('smartEditor', true);
      App.setAlert('Smart editor enabled.', 'info');
      Meteor.setTimeout(function () {
        $('.new-paragraph-text-area').trigger('autosize.destroy');
      }, 50);
    }
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
  },

  content: function () {
    return Session.get('newParagraphContent');
  }
});

/*****************************************************************************/
/* ParagraphsNew: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphsNew.created = function () {
};

Template.ParagraphsNew.rendered = function () {
  Session.set('newParagraphContent', null);
  if (!Session.get('smartEditor')) {
    $('.new-paragraph-text-area').autosize();
  } else {
    $('.new-paragraph-text-area').trigger('autosize.destroy');
  }
};

Template.ParagraphsNew.destroyed = function () {
};
