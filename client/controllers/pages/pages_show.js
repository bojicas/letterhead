PagesShowController = RouteController.extend({
  waitOn: function () {
    return Meteor.subscribe('pages_show', this.params._id);
  },

  data: function () {
    return Pages.findOne({ _id: this.params._id });
  },

  action: function () {
    this.render();
  }
});
