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

  'submit #page-slug': function (e, tmpl) {
    e.preventDefault();

    var slug = tmpl.find('#pageSlug').value;

    if (slug.length > 0) {
      Pages.update({ _id: this._id }, {
        $set: { slug: slug }
      });
      App.setAlert('The page slug is saved.', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { slug: '' }
      });
      App.setAlert('The page slug is removed.', 'success');
    }

    Session.set('pageSlug', undefined);
  },

  'click #editSlug': function (e, tmpl) {
    e.preventDefault();

    App.setAlert('You can now edit the page slug.', 'info');
    Session.set('pageSlug', this.slug);
  }
});

Template.PageSettings.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  disabledInput: function () {
    if (Session.get('pageSlug') === this.slug) {
      return '';
    } else {
      return 'disabled';
    }
  }
});

/*****************************************************************************/
/* PageSettings: Lifecycle Hooks */
/*****************************************************************************/
Template.PageSettings.created = function () {
};

Template.PageSettings.rendered = function () {
  Session.set('pageSlug', undefined);
};

Template.PageSettings.destroyed = function () {
};
