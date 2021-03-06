/*****************************************************************************/
/* PagesNew: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PagesNew.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var title = tmpl.find('#pageTitle').value;

    var pageId = Pages.insert({
      title: title,
      paragraphs: 0
    });
    Alerts.set('New page created.', 'success');
    Router.go('pages.show', { _id: pageId});
  },

  'click #cancel-new-page': function (e) {
    e.preventDefault();

    Router.go('pages.index');
  }
});

Template.PagesNew.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PagesNew: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesNew.created = function () {
};

Template.PagesNew.rendered = function () {
};

Template.PagesNew.destroyed = function () {
};
