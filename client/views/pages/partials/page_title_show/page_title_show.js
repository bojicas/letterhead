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
  }
});

Template.PageTitleShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
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
