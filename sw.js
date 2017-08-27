// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v5::static';
self.addEventListener('install', e => {
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
		'/javascript/javascript.js',
		'/manifest.json',
		'/images/icon/icon128',
		'/images/icon/icon144',
		'/images/icon/icon192',
		'/images/icon/icon512',
		'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,200',
      ]).then(() => self.skipWaiting());
    })
  );
});

// when the browser fetches a url, either response with
// the cached object or go ahead and fetch the actual url
self.addEventListener('fetch', event => {
var online = navigator.onLine;
if (online == true) {
    event.respondWith(
		fetch('https://jgames101.github.io/')
	);
} else { 
    event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
	})
	);
}
});