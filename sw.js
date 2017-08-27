// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v3::static';
var online = navigator.onLine;
if (online == true)
	window.location.reload(true);
	document.getElementById('offlinealert').style.display = 'none';

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/javascript/',
		'/html5/',
		'/photos/',
		'/angular/',
		'/updates/',
		'/photos/cactus.jpg',
		'/photos/dandelion.jpg',
		'/photos/flowers.jpg',
		'/photos/snapdragon.jpg',
		'/styles.css',
		'/global.js',
		'/jsmissing.html',
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
  event.respondWith(
    // ensure we check the *right* cache to match against
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});