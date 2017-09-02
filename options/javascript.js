if (localStorage.getItem("backgroundImage") == undefined) {
	localStorage.setItem("backgroundImage", "3");
}

document.getElementById('currentTheme').innerHTML = localStorage.getItem("themeColour");
document.getElementById('newColour').value = localStorage.getItem("themeColour");
document.getElementById('colourPicker').value = localStorage.getItem("themeColour");


function setBackground(backNum) {
	localStorage.setItem("backgroundImage", backNum);
	console.log(localStorage.getItem("backgroundImage"));
	document.body.style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
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