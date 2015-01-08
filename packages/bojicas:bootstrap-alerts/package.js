Package.describe({
  name: 'bojicas:bootstrap-alerts',
  summary: 'Display application alerts',
  version: '1.0.0',
  git: 'https://github.com/bojicas/bootstrap-alerts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use('mongo');
  api.use([
    'twbs:bootstrap',
    'templating'
  ], 'client');

  api.addFiles([
    'bojicas:bootstrap-alerts.css',
    'bojicas:bootstrap-alerts.html',
    'bojicas:bootstrap-alerts.js'
  ], 'client');

  if (api.export) {
    api.export('Alerts');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bojicas:bootstrap-alerts');
  api.addFiles('bojicas:bootstrap-alerts-tests.js');
});
