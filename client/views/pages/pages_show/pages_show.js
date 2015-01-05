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
    return Paragraphs.find({}, { sort: { rank: 1 } });
  },

  editTitle: function () {
    if (Meteor.user() && Session.get('editTitle') === this._id) {
      return true;
    } else {
      return false;
    }
  },

  newParagraph: function () {
    if (Meteor.user() && Session.get('newParagraph') === this._id) {
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
  }
});

/*****************************************************************************/
/* PagesShow: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesShow.created = function () {
};

Template.PagesShow.rendered = function () {
  Session.set('editTitle', null);
  Session.set('newParagraph', null);
  Session.set('editParagraph', null);
  Session.set('pageSettings', null);

  if (Session.get('smartEditor') === undefined) {
    Session.set('smartEditor', true);
  }

  // Add disqus comments
  var settings = Settings.findOne();
  var page = Pages.findOne();
  console.dir(settings);
  console.dir(page);
  console.log(settings.disqusShortname );
  console.log(page.disqus);

  if (settings.disqusShortname && page.disqus) {
    console.log('I am here');
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + settings.disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }
};

Template.PagesShow.destroyed = function () {
};
