/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-toasty': 'vendor/ng2-toasty',
  'angular-sortablejs': 'vendor/angular-sortablejs',
  'sortablejs': 'vendor/sortablejs/Sortable.js',
  'immutable': 'vendor/immutable/dist/immutable.min.js',
  'redux': 'vendor/redux/dist/redux.js'
};

/** User packages configuration. */
const packages: any = {
  'ng2-toasty': { defaultExtension: 'js' },
  'angular-sortablejs': { main: 'index.js', defaultExtension: 'js' }
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
  '@angular/forms',
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
