// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBwS3JhfDgzHL0w92YvPdv0TZsSDZgj7Fg',
    authDomain: 'wdw-ti-tracker.firebaseapp.com',
    databaseURL: 'https://wdw-ti-tracker.firebaseio.com',
    projectId: 'wdw-ti-tracker',
    storageBucket: 'wdw-ti-tracker.appspot.com',
    messagingSenderId: '234802525016'
  }
};
