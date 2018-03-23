// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firestoreConfig: {
    apiKey: 'AIzaSyBeF1bV9gGma-s21Ur29haZrfo2vKGhNNs',
    authDomain: 'abcfoundry-v1.firebaseapp.com',
    databaseURL: 'https://abcfoundry-v1.firebaseio.com',
    projectId: 'abcfoundry-v1',
    storageBucket: 'abcfoundry-v1.appspot.com',
    messagingSenderId: '536241713846'
  }
};
