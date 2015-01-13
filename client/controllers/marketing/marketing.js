MarketingController = RouteController.extend({
  waitOn: function () {},

  action: function () {
    var indexPage = Pages.findOne();
    if (indexPage) {
      Router.go('pages.show', { _id: indexPage.slug || indexPage._id });
    } else {
      this.render();
    }
  }
});
