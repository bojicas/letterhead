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

    Pages.insert({ title: title });
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
