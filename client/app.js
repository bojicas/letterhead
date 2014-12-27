/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
  setAlert: function (message, type) {
    Alerts.insert({
      message: message,
      type: type
    });
  }
});

App.helpers = {
  pluralize: function (n, thing) {
    if (n === 1) {
      return '1 ' + thing;
    } else {
      return n + ' ' + thing + 's';
    }
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

