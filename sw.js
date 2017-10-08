var CACHE_NAME = 'jm014401';
var urlsToCache = [
  '/index.html',
  '/styles.css',
  '/global.js',
  '/404.html',
  '/jsmissing.html',
  '/updates/index.html',
  '/photos/1.webp',
  '/photos/2.webp',
  '/photos/3.webp',
  '/photos/4.webp',
  '/photos/5.webp',
  '/photos/6.webp',
  '/photos/7.webp',
  '/photos/8.webp',
  '/options/index.html',
  '/photos/javascript.js',
  '/latest.json',
  '/modernizr-webp.js',
  '/jquery.ui.touch-punch.min.js',
  '/jquery-3.2.1.min.js',
  '/angular/index.html',
  '/javascript/index.html',
  '/javascript/javascript.js',
  '/angular/index.html',
  '/jquery/index.html',
  '/jquery/javascript.js',
  '/html5/index.html',
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

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');

  const title = 'Update out!';
  const options = {
    body: 'Visit the site for some new features!',
    icon: '/images/icon/icon128.png',
    badge: 'images/icon/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://jgames101.github.io/')
  );
});
