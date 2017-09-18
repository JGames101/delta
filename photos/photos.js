var imgNum = 1;
var increment = 1;
var inFullscreen = true;

function previousPhoto() {
	imgNum = parseInt(imgNum) - 1;
	if (imgNum < 1) {
		var imgNum = 8;	
	}
	$("#photo").attr("src", imgNum + ".jpg");
};

function nextPhoto() {
	if((imgNum=parseInt(imgNum)-1)<1)var imgNum=8;$("#photo").attr("src",imgNum+".jpg");
};

function fullscreen() {
	if (document.webkitFullscreenElement == undefined) {
		inFullscreen = true;
		console.log('fullscreen clicked');
		console.log(inFullscreen);
		var elem = document.getElementById("page");
		elem.webkitRequestFullscreen();
		document.getElementById('fullscreenIcon').innerHTML = 'fullscreen_exit';
	} else {
		inFullscreen = false;
		var elem = document.getElementById("page");
		document.webkitExitFullscreen();
		document.getElementById('fullscreenIcon').innerHTML = 'fullscreen';
	};
};