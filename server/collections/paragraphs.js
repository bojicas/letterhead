/*
 * Add query methods like this:
 *  Paragraphs.findPublic = function () {
 *    return Paragraphs.find({is_public: true});
 *  }
 */
Paragraphs.allow({
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
