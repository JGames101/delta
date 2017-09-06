// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v1.18-release::static';
var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			caches.delete('v1.17-release::static');
		}
	};
xmlhttp.open("GET", "/latest.json", true);
xmlhttp.send();

self.addEventListener('install', e => {
  // once the SW is installed, go ahead and fetch the resources
  // to make this work offline
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/updates/',
		'/angular/',
		'/javascript/',
		'/jquery/',
		'/html5/',
		'/options/',
		'/photos/',
		'/styles.css',
		'/global.js',
		'/javascript/javascript.js',
		'/options/javascript.js',
		'/photos/1.jpg',
		'/photos/1btn.jpg',
		'/photos/2.jpg',
		'/photos/3.jpg',
		'/photos/4.jpg',
		'/photos/5.jpg',
		'/photos/6.jpg',
		'/photos/7.jpg',
		'/photos/8.jpg',
		'/images/home.png',
		'/images/updates.png',
		'/images/javascript.png',
		'/images/angularJS.png',
		'/images/jquery.png',
		'/images/html.png',
		'/images/options.png',
		'/images/doubleclick.png',
		'/images/file.png',
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