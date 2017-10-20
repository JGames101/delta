if (localStorage.getItem("backgroundImage") == undefined) {
	localStorage.setItem("backgroundImage", "3");
};

if (localStorage.getItem('mobile.navLoc') == "bottom") {
	document.getElementById('mobileNavLoc').value = localStorage.getItem("mobile.navLoc");
};

var suggestedColours = ["#ddad08", "#b4697d", "#e01453", "#d2cc2b", "#718181", "#acd56f", "#cb2c36", "#8098ae"];
document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
document.getElementById('newColour').value = localStorage.getItem("themeColour");
document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
document.getElementById('suggestedPreview').style.color = suggestedColours[localStorage.getItem("backgroundImage") - 1];
document.getElementById('themeSelect').value = localStorage.getItem("theme");
document.getElementById('navSelect').value = localStorage.getItem("navbar");


function setBackground(backNum) {
	localStorage.setItem("backgroundImage", backNum);
	console.log(localStorage.getItem("backgroundImage"));
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
	document.getElementById('suggestedPreview').style.color = suggestedColours[localStorage.getItem("backgroundImage") - 1];
	localStorage.setItem("themeColour", suggestedColours[localStorage.getItem("backgroundImage") - 1]);
	location.reload();
}

function setColour() {
	var newColour = document.getElementById('newColour').value;
	localStorage.setItem("themeColour", newColour);
	console.log(localStorage.getItem("themeColour"));
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
	location.reload();
}

function setPickerColour() {
	var newColour = document.getElementById('colourPicker').value;
	localStorage.setItem("themeColour", newColour);
	console.log(localStorage.getItem("themeColour"));
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
	location.reload();
}

function resetColour() {
	localStorage.setItem("themeColour", "#486e89");
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
	location.reload();
}

function setSuggestedColour() {
	localStorage.setItem("themeColour", suggestedColours[localStorage.getItem("backgroundImage") - 1]);
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
	location.reload();
}

function changeTheme() { // themeSelect
	var themeId = document.getElementById('themeSelect').value;
	console.log(document.getElementById('themeSelect').value);
	localStorage.setItem("theme", document.getElementById('themeSelect').value);
	if (themeId == 'colourful' || themeId == 'light' || themeId == 'dark') {
		localStorage.setItem("navbar", 'desktop');
	} else if (themeId == 'v0.8a') {
		localStorage.setItem("navbar", 'v0.8a');
	} else if (themeId == 'v1.0b') {
		localStorage.setItem("navbar", 'v1.0b');
	} else if (themeId == 'v1.441b') {
		localStorage.setItem("navbar", 'v1.441b');
	} else {
		localStorage.setItem("navbar", 'mobile');
	}
	location.reload();
}

function changeNavbar() {
	var themeId = document.getElementById('navSelect').value;
	localStorage.setItem("navbar", themeId);
	location.reload();
}

document.getElementById('legacyTitle').innerHTML = "ADVANCED <i class='material-icons'>keyboard_arrow_down</i>";
function expandLegacy() {
	if (document.getElementsByClassName('legacy')[0].style.display == 'none') {
		document.getElementsByClassName('legacy')[0].style.display = 'initial';
		document.getElementById('legacyTitle').innerHTML = "ADVANCED <i class='material-icons'>keyboard_arrow_up</i>";
	} else {
		document.getElementsByClassName('legacy')[0].style.display = 'none';
		document.getElementById('legacyTitle').innerHTML = "ADVANCED <i class='material-icons'>keyboard_arrow_down</i>";
	}
}