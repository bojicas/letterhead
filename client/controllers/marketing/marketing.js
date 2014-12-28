MarketingController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('pages_index');
  },

  action: function () {
    var indexPage = Pages.findOne({ type: 'INDEX' });
    if (indexPage) {
      Router.go('pages.show', { _id: indexPage._id });
    } else {
      this.render();
    }
  }
});
