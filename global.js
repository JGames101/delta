document.getElementById('jsmissing').style.display = 'none';
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