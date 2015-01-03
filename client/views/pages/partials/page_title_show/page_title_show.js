/*****************************************************************************/
/* PageTitleShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PageTitleShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #page-title-edit-action': function (e) {
    e.preventDefault();

    Session.set('editTitle', this._id);
  },

  'click #delete-page-action': function (e) {
    e.preventDefault();

    var deletePage = confirm('Are you sure you want to delete this page?');

    if (deletePage) {
      Meteor.call('pagesDelete', this, function (error, result) {
        if (error) {
          return App.setAlert(error.reason, 'danger');
        } 

        App.setAlert('Page deleted.', 'success');
        Router.go('pages.index');
      });
    }
  },

  'click #settings-page-action': function (e) {
    e.preventDefault();

    alert('Page Settings for ' + this._id);
    Session.set('pageSettings', this._id);
  }
});

Template.PageTitleShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  disabledDeletePage: function () {
    if (this.paragraphs > 0) {
      return 'disabled';
    } else {
      return '';
    }
  },

  emptyPage: function () {
    return this.paragraphs === 0;
  },

  pageSettings: function () {
    return Session.get('pageSettings') === this._id;
  },

  titleBorder: function () {
    if (Session.get('pageSettings') === this._id) {
      return 'title-border';
    }
  }
});

/*****************************************************************************/
/* PageTitleShow: Lifecycle Hooks */
/*****************************************************************************/
Template.PageTitleShow.created = function () {
};

Template.PageTitleShow.rendered = function () {
};

Template.PageTitleShow.destroyed = function () {
};
