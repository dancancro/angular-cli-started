/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    'ng2-toasty':                 'vendor/ng2-toasty',
    'ng2-dnd':                    'vendor/ng2-dnd',
    'dragula':                    'https://npmcdn.com/dragula',
    'ng2-dragula':                'vendor/ng2-dragula',
    'contra':                     'vendor/contra',
    'atoa':                       'vendor/atoa',
    'ticky':                      'vendor/ticky',
    'crossvent':                  'vendor/crossvent/src',
    'custom-event':               'vendor/custom-event'
};

/** User packages configuration. */
const packages: any = {
    'ng2-toasty':                 { defaultExtension: 'js' },
    'ng2-dnd':                    { defaultExtension: 'js' },
    'ng2-dragula':                { defaultExtension: 'js' },
    'dragula': { main: 'dragula.js', defaultExtension: 'js' },
    'contra': { main: 'contra.js', defaultExtension: 'js' },
    'atoa': { main: 'atoa.js', defaultExtension: 'js' },
    'ticky': { main: 'ticky.js', defaultExtension: 'js' },
     'crossvent': { main: 'crossvent.js', defaultExtension: 'js' },
     'custom-event': { main: 'index.js', defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+list',
  'app/objection',
  'app/rebuttal',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {
};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
