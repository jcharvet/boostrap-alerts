Package.describe({
  name: 'jcharvet:bootstrap-alerts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Display bootstrap alerts',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jcharvet/boostrap-alerts.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
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

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jcharvet:bootstrap-alerts');
  api.addFiles('bootstrap-alerts-tests.js');
});