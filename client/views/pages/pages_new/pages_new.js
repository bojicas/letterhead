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
    App.setAlert('New page created.', 'success');
    Router.go('pages.show', { _id: pageId});
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
