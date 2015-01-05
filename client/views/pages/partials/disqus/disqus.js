/*****************************************************************************/
/* Disqus: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Disqus.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Disqus.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Disqus: Lifecycle Hooks */
/*****************************************************************************/
Template.Disqus.created = function () {
};

Template.Disqus.rendered = function () {
  var settings = Settings.findOne();

  DISQUS_LOADER = function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + settings.disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  };

  if (Session.get('isDisqusLoaded') !== true) {
    DISQUS_LOADER();
    Session.set('isDisqusLoaded', true);
  }
  if (typeof(DISQUS) !== "undefined") {
    DISQUS.reset({
      reload: true,
      config: function () {
      }
    });
  }
};

Template.Disqus.destroyed = function () {
};
