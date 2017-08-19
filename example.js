new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			// Here is where you create blocks.
		],
		url : '' // This is the URL for when someone clicks "learn more"
	};
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'}; // Returning status defines the colour of the light beside the blocks.
	};

	
	ScratchExtensions.register('NAME', descriptor, ext); // Name of the extension.
})();
