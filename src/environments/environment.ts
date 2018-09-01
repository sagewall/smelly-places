// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAI8ldMMhtrrB5NxJ3RL_1FP_zcQswEhLA',
    authDomain: 'smelly-places.firebaseapp.com',
    databaseURL: 'https://smelly-places.firebaseio.com',
    projectId: 'smelly-places',
    storageBucket: '',
    messagingSenderId: '950658953015'
  },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoic2FnZXdhbGwiLCJhIjoiY2psamw1eG1pMGQzMzNxa21raXh2YmJlZyJ9.Qdmx1V4Zt0eoer-giVLOgQ',
    style: 'mapbox://styles/sagewall/cjljl2poh1u3b2rkaq91jdaun'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
