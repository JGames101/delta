$('head').append('<meta name="theme-color" content="' + localStorage.getItem("themeColour") + '" />');
document.getElementById('jsmissing').style.display = 'none';
var menu = false;
var online = navigator.onLine;
if (online == true) {
    document.getElementById('connecmissing').style.display = 'none';
} else {
    document.getElementById('connecmissing').style.display = 'block';
};
if (localStorage.getItem("backgroundImage") == undefined) {
	console.log("Missing background image settings.");
} else {
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
};
if (localStorage.getItem("themeColour") == undefined) {
	localStorage.setItem("themeColour", "#486e89");
};
document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");

function toggleMenu() {
	if (menu == true) {
		document.getElementById('menuTextBox').style.color = 'transparent';
		document.getElementById('menu').className = 'hidden';
		menu = false;
	} else {
		document.getElementById('menuTextBox').style.color = 'white';
		document.getElementById('menu').className = 'open';
		menu = true;
	}
}
function setPage(newLocation) {
	window.location.href = "https://jgames101.github.io" + newLocation;
}

function simulateOverlay() {
	document.getElementById('jsmissing').style.display = 'block';
}