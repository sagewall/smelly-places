// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAl1WD9OcNnrH_VdKcIqDfbjHKF2i6xEBk',
    authDomain: 'smelly-places-dev.firebaseapp.com',
    databaseURL: 'https://smelly-places-dev.firebaseio.com',
    projectId: 'smelly-places-dev',
    storageBucket: 'smelly-places-dev.appspot.com',
    messagingSenderId: '759609983473'
  },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiY2psamw1eG1pMGQzMzNxa21raXh2YmJlZyJ9.Qdmx1V4Zt0eoer-giVLOgQ',
    style: 'mapbox://styles/sagewall/cjljl2poh1u3b2rkaq91jdaun'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
