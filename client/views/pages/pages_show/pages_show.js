/*****************************************************************************/
/* PagesShow: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PagesShow.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click #new-paragraph-action': function (e) {
    e.preventDefault();

    Session.set('newParagraph', this._id);
  }
});

Template.PagesShow.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

  paragraphs: function () {
    var paragraphsOrder = this.paragraphsOrder || 1;
    return Paragraphs.find({}, { sort: { rank: paragraphsOrder } });
  },

  editTitle: function () {
    if (Meteor.user() && Session.get('editTitle') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  editParagraph: function () {
    if (Meteor.user() && Session.get('editParagraph') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  showComments: function () {
    var settings = Settings.findOne();
    var page = Pages.findOne();

    if (settings.disqusShortname && page.disqus) {
      return true;
    } else {
      return false;
    }
  },

  liveBlogging: function () {
    var page = Pages.findOne();

    if (page.paragraphsOrder === -1) {
      return true;
    } else {
      return false;
    }
  }
});

/*****************************************************************************/
/* PagesShow: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesShow.created = function () {
};

Template.PagesShow.rendered = function () {
  if (Session.get('hideAdminMenu')) {
    $('.lh-breadcrumb').hide();
  } else {
    $('.lh-breadcrumb').show();
  }

  Session.set('editTitle', null);
  Session.set('newParagraph', null);
  Session.set('editParagraph', null);
  Session.set('pageSettings', null);

  if (Session.get('smartEditor') === undefined) {
    Session.set('smartEditor', true);
  }

  // set up Google Analytics for pages
  var settings = Settings.findOne();
  var controller = Iron.controller();

  if (settings.googleTrackingId && !Meteor.user()) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', settings.googleTrackingId, 'auto');
    ga('send', 'pageview', {
      'page': '/pages/' + controller.params._id
    });
  }

};

Template.PagesShow.destroyed = function () {
};
