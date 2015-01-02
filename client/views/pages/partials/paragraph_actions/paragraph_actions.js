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
  },

  'click .delete-paragraph-action': function (e) {
    e.preventDefault();

    var deleteParagraph = confirm('Are you sure you want to delete this paragraph?');

    if (deleteParagraph) {
      Meteor.call('paragraphsDelete', this);
      // Paragraphs.remove({ _id: this._id });
    }
  },

  'click .move-up-paragraph-action': function (e) {
    e.preventDefault();

    if (this.rank > 1) {
      var swapId = Paragraphs.findOne({ rank: this.rank - 1 })._id;

      Paragraphs.update({ _id: this._id }, {
        $set: { rank: this.rank - 1 }
      });

      Paragraphs.update({ _id: swapId }, {
        $set: { rank: this.rank }
      });
    }
  },

  'click .move-down-paragraph-action': function (e) {
    e.preventDefault();

    if (this.rank < Paragraphs.find().count()) {
      var swapId = Paragraphs.findOne({ rank: this.rank + 1 })._id;

      Paragraphs.update({ _id: this._id }, {
        $set: { rank: this.rank + 1 }
      });

      Paragraphs.update({ _id: swapId }, {
        $set: { rank: this.rank }
      });
    }
  },

  'click .smart-editor-action': function (e) {
    e.preventDefault();

    if (Session.get('smartEditor')) {
      App.setAlert('Text area editor enabled.', 'info');
      Session.set('smartEditor', false);
    } else {
      App.setAlert('Smart editor enabled.', 'info');
      Session.set('smartEditor', true);
    }
  }

});

Template.ParagraphActions.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  showUpAction: function () {
    return this.rank > 1;
  },

  showDownAction: function () {
    return this.rank < Paragraphs.find().count();
  },

  showUpDownDivider: function () {
    return Paragraphs.find().count() > 1;
  },

  smartEditorToggle: function () {
    if (Session.get('smartEditor') === true) {
      return 'check';
    } else {
      return 'unchecked';
    }
  }
});

/*****************************************************************************/
/* ParagraphActions: Lifecycle Hooks */
/*****************************************************************************/
Template.ParagraphActions.created = function () {
};

Template.ParagraphActions.rendered = function() {
  if (Session.get('smartEditor') === undefined) {
    Session.set('smartEditor', true);
  }
};

Template.ParagraphActions.destroyed = function () {
};
