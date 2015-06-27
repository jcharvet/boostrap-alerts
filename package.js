Package.describe({
  name: 'jcharvet:bootstrap-alerts',
  summary: 'Display bootstrap alerts',
  version: '0.1',
  git: 'https://github.com/jcharvet/boostrap-alerts.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');

  api.use('mongo');
  api.use([
    'twbs:bootstrap@3.3.1_2',
    'templating'
  ], 'client');

  api.addFiles([
    'bootstrap-alerts.css',
    'bootstrap-alerts.html',
    'bootstrap-alerts.js'
  ], 'client');

  if (api.export) {
    api.export('Alerts');
  }
});

