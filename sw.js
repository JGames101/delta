var CACHE_NAME = 'jm023'; //Version 2.1b-0001
var urlsToCache = [
  '/',
  '/index.html',
  '/page/offline.html',
  '/menus/mobile.html',
  '/menus/mobile.css',
  '/jquery-3.2.1.min.js',
  '/manifest.json',
  'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
  '/styles.css',
  '/global.js',
  '/page/News.css',
  '/news/index.html',
  '/page/News.html',
  '/page/News.js',
  '/options/index.html',
  '/javascript/index.html',
  '/updates/index.html',
  '/videos/index.html',
  '/jquery/index.html',
  '/html5/index.html',
  '/news/',
  '/page/',
  '/options/',
  '/javascript/',
  '/updates/',
  '/videos/',
  '/jquery/',
  '/html5/',
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
