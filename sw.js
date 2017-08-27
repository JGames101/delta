// my custom service worker to get offline support working
var online = navigator.onLine;
var CACHE_VERSION = 1;
if (online == true)
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache) {
      return cache.addAll([
        '',
        '/angular/',
        '/javascript/',
        '/html5/',
        '/styles.css',
        '/photos/flowers.jpg',
        '/photos/',
        '/photos/images.css',
        '/photos/cactus.jpg',
        '/photos/dandelion.jpg',
		'/photos/snapdragon.jpg',
		'/global.js',
		'jsmissing.html'
      ]);
    })
  );
else {
	
}