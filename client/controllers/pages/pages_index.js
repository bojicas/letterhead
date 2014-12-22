PagesIndexController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('pages_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
