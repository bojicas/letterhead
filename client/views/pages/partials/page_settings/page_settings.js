/*****************************************************************************/
/* PageSettings: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.PageSettings.events({
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
      Alerts.set('The page slug is saved.', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { slug: '' }
      });
      Alerts.set('The page slug is removed.', 'success');
    }

    Session.set('pageSlug', undefined);
  },

  'submit #published-on': function (e, tmpl) {
    e.preventDefault();

    var publishedOn = tmpl.find('#publishedOn').value;

    Alerts.set('DATE/TIME IS CHANGED' + publishedOn, 'success');
  },

  'click #editSlug': function (e, tmpl) {
    e.preventDefault();

    Alerts.set('You can now edit the page slug.', 'info');
    Session.set('pageSlug', this.slug);
  },

  'change #paragraphsOrder': function (e) {
    if (e.target.checked) {
      Pages.update({ _id: this._id }, {
        $set: { paragraphsOrder: -1 }
      });
      Alerts.set('Live blogging enabled!', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { paragraphsOrder: '' }
      });
      Alerts.set('Live blogging disabled!', 'success');
    }
  },

  'change #disqusComments': function (e) {
    if (e.target.checked) {
      Pages.update({ _id: this._id }, {
        $set: { disqus: e.target.checked }
      });
      Alerts.set('Disqus comments enabled!', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { disqus: '' }
      });
      Alerts.set('Disqus comments disabled!', 'success');
    }
  }

});

Template.PageSettings.helpers({
  disabledSlugInput: function () {
    if (Session.get('pageSlug') === this.slug) {
      return '';
    } else {
      return 'disabled';
    }
  },

  disabledPublishedInput: function () {
    if (Session.get('pagePublishedOn') === this.publishedOn) {
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
  $('#datetimepicker').datetimepicker();
};

Template.PageSettings.destroyed = function () {
};
