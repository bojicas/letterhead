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
