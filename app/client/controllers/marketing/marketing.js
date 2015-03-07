MarketingController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('marketing');
  },

  action: function () {
    var indexPage = Pages.findOne({ type: 'INDEX' });
    if (indexPage) {
      Router.go('pages.show', { _id: indexPage.slug || indexPage._id });
    } else {
      this.render();
    }
  }
});
