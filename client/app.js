/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {});

App.helpers = {
  pluralize: function (n, thing) {
    if (n === 1) {
      return '1 ' + thing;
    } else {
      return n + ' ' + thing + 's';
    }
  },

  hideAdminMenu: function () {
    return Session.get('hideAdminMenu');
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

