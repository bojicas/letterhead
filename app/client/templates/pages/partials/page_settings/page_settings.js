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

    if (publishedOn.length > 0) {
      Pages.update({ _id: this._id }, {
        $set: { publishedOn: new Date(publishedOn) }
      });
      Alerts.set('Published on date is saved.', 'success');
    } else {
      Pages.update({ _id: this._id }, {
        $unset: { publishedOn: '' }
      });
      Alerts.set('Published on date is removed.', 'success');
    }

    Session.set('pagePublishedOn', undefined);
  },

  'click #editSlug': function (e, tmpl) {
    e.preventDefault();

    Alerts.set('You can now edit the page slug.', 'info');
    Session.set('pageSlug', this.slug);
  },

  'click #editPublished': function (e, tmpl) {
    e.preventDefault();

    Alerts.set('You can now edit the published on date.', 'info');
    Session.set('pagePublishedOn', this.publishedOn);
  },

  'click #calendar-button': function (e, tmpl) {
    publishedOn = new Date(this.publishedOn);
    if (!(Session.get('pagePublishedOn') && Session.get('pagePublishedOn').toUTCString() === publishedOn.toUTCString())) {
      e.preventDefault();
    }
    Alerts.set('Cannot change!');
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
  },

  'change #showPublishedOn': function (e) {
    if (e.target.checked) {
      Pages.update(this._id, { $set: { showPublishedOn: true } });
      Alerts.set('Show Published On Date', 'success');
    } else {
      Pages.update(this._id, {
        $unset: { showPublishedOn: '' }
      });
      Alerts.set('Hide Published On Date', 'success');
    }
  }

});

Template.PageSettings.helpers({
  disabledSlugInput: function () {
    if (Session.get('pageSlug') === this.slug) {
      return '';
    } else {
      return 'readonly';
    }
  },

  disabledPublishedInput: function () {
    if (!this.publishedOn) {
      return '';
    }
    publishedOn = new Date(this.publishedOn);
    if (Session.get('pagePublishedOn') && Session.get('pagePublishedOn').toUTCString() === publishedOn.toUTCString()) {
      return '';
    } else {
      return 'readonly';
    }
  },

  disabledPublishedButton: function () {
    if (!this.publishedOn) {
      return 'block';
    }
    publishedOn = new Date(this.publishedOn);
    if (Session.get('pagePublishedOn') && Session.get('pagePublishedOn').toUTCString() === publishedOn.toUTCString()) {
      return 'block';
    } else {
      return 'none';
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
  },

  showPublishedOn: function () {
    if (this.showPublishedOn) {
      return 'checked';
    } else {
      return '';
    }
  },

  publishedOnFormatted: function () {
    if (this.publishedOn) {
      return moment(this.publishedOn).format('llll');
    } else {
      return null;
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
  Session.set('pagePublishedOn', undefined);
  $('#datetimepicker').datetimepicker();
};

Template.PageSettings.destroyed = function () {
};
