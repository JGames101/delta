document.getElementById('jsmissing').style.display = 'none';
document.getElementById('menuButton').style.display = 'block';
var imgNum = 1;
var menu = false;
var online = navigator.onLine;
if (online == true) {
    document.getElementById('connecmissing').style.display = 'none';
} else {
    document.getElementById('connecmissing').style.display = 'block';
}

function toggleMenu() {
	if (menu == true) {
		document.getElementById('menu').style.display = 'none';
		menu = false;
	} else {
		document.getElementById('menu').style.display = 'block';
		menu = true;
	}
}
function setPage(newLocation) {
	window.location.href = "https://jgames101.github.io" + newLocation;
}
function nextImg() {
	imgNum = imgNum + 1;
	if (imgNum = 5) {
		imgNum = 0;
	}
	document.getElementById("photo").src = "imgNum" + .jpg;
}
function prevImg() {
	imgNum = imgNum - 1;
	if (imgNum = 0) {
		imgNum = 4;
	}
	document.getElementById("photo").src = "imgNum" + .jpg;
}