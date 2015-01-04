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

  'submit #new-slug': function (e, tmpl) {
    e.preventDefault();
    
    var slug = tmpl.find('#pageSlug').value;

    Pages.update({ _id: this._id }, {
      $set: { slug: slug }
    });
    App.setAlert('Page slug created.', 'success');
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
