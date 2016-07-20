/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js',
      'sortablejs/Sortable.js',
      'angular-sortablejs/index.js',
      'angular-sortablejs/src/sortable.directive.js',
      'angular-sortablejs/src/sortable.directive.js.map',  
      'immutable/dist/immutable.min.js',
      'redux/dist/redux.js'
    ]
  });
};
