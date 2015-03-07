/*
 * Add query methods like this:
 *  Pages.findPublic = function () {
 *    return Pages.find({is_public: true});
 *  }
 */
Pages.allow({
  insert: function (userId, doc) {
    return !!userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return !!userId;
  },

  remove: function (userId, doc) {
    return false;
  }
});
