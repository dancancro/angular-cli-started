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
      'ng2-dnd/ng2-dnd.js',
      'ng2-dnd/src/dnd.service.js',
      'ng2-dnd/src/dnd.draggable.js',
      'ng2-dnd/src/dnd.droppable.js',
      'ng2-dnd/src/dnd.sortable.js',
      'ng2-dnd/src/dnd.component.js',
      'ng2-dnd/src/dnd.config.js',
      'ng2-dragula/ng2-dragula.js',
      'ng2-dragula/src/app/directives/dragula.directive.js',
      'ng2-dragula/src/app/providers/dragula.provider.js',
      'dragula/dragula.js',
      'contra/contra.js',
      'contra/emitter.js',
      'contra/debounce.js',
      'atoa/atoa.js',
      'ticky/ticky.js',
      'crossvent/src/crossvent.js',
      'crossvent/src/eventmap.js',
      'custom-event/index.js'
    ]
  });
};
