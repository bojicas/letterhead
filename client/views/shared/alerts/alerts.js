/*****************************************************************************/
/* Alerts: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Alerts.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Alerts.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  alerts: function () {
    return Alerts.find();
  }
});

/*****************************************************************************/
/* Alerts: Lifecycle Hooks */
/*****************************************************************************/
Template.Alerts.created = function () {
};

Template.Alerts.rendered = function () {
};

Template.Alerts.destroyed = function () {
};

/*****************************************************************************/
/* Alert: Lifecycle Hooks */
/*****************************************************************************/
Template.Alert.rendered = function () {
  var currentAlert = this.data;
  Meteor.setTimeout(function () {
    Alerts.remove(currentAlert._id);
  }, 3000);
};
