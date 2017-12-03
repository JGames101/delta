loadOptions();

function setColour(colour) {
	setOption('themeColour', colour);
	location.reload();
};

function setSecondaryColour(colour) {
	setOption('secondColour', colour);
	location.reload();
};

function setTheme(themeId) {
	setOption('theme', themeId);
	$(".themeChoice").css("color", "black");
	$(".themeChoice").css("background-color", "#fafafa");
	document.getElementById(themeId).style.backgroundColor = '#03a9f4';
	document.getElementById(themeId).style.color = 'white';
	location.reload();
};

function navbarLocation(location) {
	setOption('navigation', location);
	if (getOption('navigation') == 'bottom') {
		$('header').addClass('bottomNavigation');
		document.getElementsByClassName('content')[0].style.marginTop = '0px';
	} else {
		$('header').removeClass('bottomNavigation');
		document.getElementsByClassName('content')[0].style.marginTop = '144px';
	}
}

function loadOptions() {
	var options = JSON.parse(localStorage.getItem("options"));
}

function getOption(option) {
	var options = JSON.parse(localStorage.getItem("options"));
	return eval('options.' + option);
}

function setOption(option, value) {
	var options = JSON.parse(localStorage.getItem("options"));
	eval('options.' + option + ' = "' + value + '"');
	localStorage.setItem("options", JSON.stringify(options));
}