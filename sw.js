// we'll version our cache (and learn how to delete caches in
// some other post)
const cacheName = 'v2::static';

// Event listener for retrieving data
self.addEventListener('fetch', function(event) {
    var req = event.request.clone();
    if (req.clone().method == "GET") {
        event.respondWith(  
         
	    // Get the response from the network
	    return fetch(req.clone()).then(function(response) {
	       // And store it in the cache for later
		return cache.put(req.clone(), response);
	    });	
        );
    }
});