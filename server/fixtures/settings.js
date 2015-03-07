// Create a default empty settings document

if (Settings.find().count() === 0) {
  Settings.insert({});
}
