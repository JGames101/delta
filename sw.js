var CACHE_NAME = 'jm031'; //Version 3.1d
var urlsToCache = [
  '/',
  '/index.html',
  '/page/offline.html',
  '/jquery-3.2.1.min.js',
  '/manifest.json',
  'node_modules/material-components-web/dist/material-components-web.css',
  '/styles.css',
  '/global.js',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {  
  event.respondWith(
      caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
              return response;
          }
          return fetch(event.request);
      })
  );
});
