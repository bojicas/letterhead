/*
 * Add query methods like this:
 *  Paragraphs.findPublic = function () {
 *    return Paragraphs.find({is_public: true});
 *  }
 */
Paragraphs.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return false;
  }
});

Paragraphs.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return true;
  }
});
