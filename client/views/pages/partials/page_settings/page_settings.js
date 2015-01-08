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
  },

  'change #paragraphsOrder': function (e) {
    if (e.target.checked) {
      Pages.update({ _id: this._id }, {
        $set: { paragraphsOrder: -1 }
      });
      App.setAlert('Live blogging enabled!', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { paragraphsOrder: '' }
      });
      App.setAlert('Live blogging disabled!', 'success');
    }
  },

  'change #disqusComments': function (e) {
    if (e.target.checked) {
      Pages.update({ _id: this._id }, {
        $set: { disqus: e.target.checked }
      });
      App.setAlert('Disqus comments enabled!', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { disqus: '' }
      });
      App.setAlert('Disqus comments disabled!', 'success');
    }
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
  },

  checkedParagraphsOrder: function () {
    if (this.paragraphsOrder === -1) {
      return 'checked';
    } else {
      return '';
    }
  },

  disqusEnabled: function () {
    if (this.disqus) {
      return 'checked';
    } else {
      return '';
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
