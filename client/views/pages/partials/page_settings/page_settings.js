/*****************************************************************************/
/* PageSettings: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PageSettings.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #cancel-page-settings': function (e) {
    e.preventDefault();

    Session.set('pageSettings', null);
  },

  'submit #new-slug': function (e) {
    e.preventDefault();

    alert('new slug submitted');
  }
});

Template.PageSettings.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PageSettings: Lifecycle Hooks */
/*****************************************************************************/
Template.PageSettings.created = function () {
};

Template.PageSettings.rendered = function () {
};

Template.PageSettings.destroyed = function () {
};
