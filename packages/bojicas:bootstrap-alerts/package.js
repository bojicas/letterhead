Package.describe({
  name: 'bojicas:bootstrap-alerts',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('bojicas:bootstrap-alerts.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:bootstrap-alerts');
  api.addFiles('bojicas:bootstrap-alerts-tests.js');
});
