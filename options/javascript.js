if (localStorage.getItem("backgroundImage") == undefined) {
	localStorage.setItem("backgroundImage", "3");
};
if (localStorage.getItem("theme") == "Greyscale") {
	document.getElementById('backgroundPhotoCard').style.display = "none";
} else if (localStorage.getItem("theme") == "colourful") {
	document.getElementById('backgroundPhotoCard').style.display = "none";
} else {
	document.getElementById('backgroundPhotoCard').style.display = "inline-table";
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
	console.log(document.getElementById('themeSelect').value);
	localStorage.setItem("theme", document.getElementById('themeSelect').value);
	location.reload();
}

function mbNavLoc() { // setting the location of the navbar on mobile
	console.log(document.getElementById('mobileNavLoc').value);
	localStorage.setItem("mobile.navLoc", document.getElementById('mobileNavLoc').value);
	location.reload();
}

document.getElementById('legacyTitle').innerHTML = "LEGACY <i class='material-icons'>keyboard_arrow_down</i>";
function expandLegacy() {
	if (document.getElementsByClassName('legacy')[0].style.display == 'none') {
		document.getElementsByClassName('legacy')[0].style.display = 'initial';
		document.getElementById('legacyTitle').innerHTML = "LEGACY <i class='material-icons'>keyboard_arrow_up</i>";
	} else {
		document.getElementsByClassName('legacy')[0].style.display = 'none';
		document.getElementById('legacyTitle').innerHTML = "LEGACY <i class='material-icons'>keyboard_arrow_down</i>";
	}
}