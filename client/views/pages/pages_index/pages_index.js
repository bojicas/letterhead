/*****************************************************************************/
/* PagesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PagesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PagesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  pages: function () {
    return Pages.find();
  },

  publishedOnFormatted: function () {
    if (this.publishedOn) {
      return moment(this.publishedOn).format('LLLL');
    } else {
      return null;
    }
  }
});

/*****************************************************************************/
/* PagesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.PagesIndex.created = function () {
};

Template.PagesIndex.rendered = function () {
};

Template.PagesIndex.destroyed = function () {
};
