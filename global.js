var menu = false;
var online = navigator.onLine;
if (localStorage.getItem("backgroundImage") == undefined) {
	console.log("Missing background image settings.");
} else {
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
};
if (localStorage.getItem("themeColour") == undefined) {
	localStorage.setItem("themeColour", "#cb2c36");
};
$('head').append('<meta name="theme-color" content="' + localStorage.getItem("themeColour") + '" />');
document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");

function toggleMenu() {
	if (menu == true) {
		document.getElementById('menuTextBox').style.color = 'transparent';
		document.getElementById('menu').className = 'hidden';
		document.getElementById('menuTextBox').style.cursor = "initial";
		menu = false;
	} else {
		document.getElementById('menuTextBox').style.color = 'white';
		document.getElementById('menu').className = 'open';
		document.getElementById('menuTextBox').style.cursor = "pointer";
		menu = true;
	}
}
function setPage(newLocation) {
	window.location.href = "https://jgames101.github.io" + newLocation;
}

function simulateOverlay() {
	document.getElementById('jsmissing').style.display = 'block';
}