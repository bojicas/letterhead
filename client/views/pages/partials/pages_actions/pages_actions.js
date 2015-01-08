/*****************************************************************************/
/* PagesActions: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PagesActions.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .lh-make-index': function (e) {
    e.preventDefault();

    var oldIndex = Pages.findOne({ type: 'INDEX' });
    if (oldIndex) {
      Pages.update({ _id: oldIndex._id }, {
        $unset: { type: '' }
      });
    }
    Pages.update({ _id: this._id }, {
      $set: { type: 'INDEX' }
    });
    Alerts.set('Index page changed.', 'success');
  }
});

Template.PagesActions.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  indexPage: function () {
    return this.type === 'INDEX';
  }
});

/*****************************************************************************/
/* PagesActions: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesActions.created = function () {
};

Template.PagesActions.rendered = function () {
};

Template.PagesActions.destroyed = function () {
};
