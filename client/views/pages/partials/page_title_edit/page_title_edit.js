/*****************************************************************************/
/* PageTitleEdit: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PageTitleEdit.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit #page-title-edit': function (e, tmpl) {
    e.preventDefault();

    var title = tmpl.find('#pageTitle').value;

    Pages.update({ _id: this._id }, {
      $set: { title: title }
    });

    Session.set('editTitle', null);
  }
});

Template.PageTitleEdit.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PageTitleEdit: Lifecycle Hooks */
/*****************************************************************************/
Template.PageTitleEdit.created = function () {
};

Template.PageTitleEdit.rendered = function () {
};

Template.PageTitleEdit.destroyed = function () {
};
