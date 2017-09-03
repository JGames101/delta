if (localStorage.getItem("backgroundImage") == undefined) {
	localStorage.setItem("backgroundImage", "3");
}

var suggestedColours = ["#ddad08", "#b4697d", "#e01453", "#d2cc2b", "#718181", "#acd56f", "#cb2c36", "#8098ae"];
document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
document.getElementById('newColour').value = localStorage.getItem("themeColour");
document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
document.getElementById('suggestedPreview').style.color = suggestedColours[localStorage.getItem("backgroundImage") - 1];


function setBackground(backNum) {
	localStorage.setItem("backgroundImage", backNum);
	console.log(localStorage.getItem("backgroundImage"));
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
	document.getElementById('suggestedPreview').style.color = suggestedColours[localStorage.getItem("backgroundImage") - 1];
}

function setColour() {
	var newColour = document.getElementById('newColour').value;
	localStorage.setItem("themeColour", newColour);
	console.log(localStorage.getItem("themeColour"));
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
}

function setPickerColour() {
	var newColour = document.getElementById('colourPicker').value;
	localStorage.setItem("themeColour", newColour);
	console.log(localStorage.getItem("themeColour"));
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
}

function resetColour() {
	localStorage.setItem("themeColour", "#486e89");
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
}

function setSuggestedColour() {
	localStorage.setItem("themeColour", suggestedColours[localStorage.getItem("backgroundImage") - 1]);
	document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
	document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementById('newColour').value = localStorage.getItem("themeColour");
	document.getElementById('colourPicker').value = localStorage.getItem("themeColour");
}