function setTheme(themeId) {
	localStorage.setItem("theme", themeId);
	$(".themeChoice").css("color", "black");
	$(".themeChoice").css("background-color", "#fafafa");
	document.getElementById(themeId).style.backgroundColor = '#03a9f4';
	document.getElementById(themeId).style.color = 'white';
	if (themeId == colourful || themeId == light || themeId == dark) {
		localStorage.setItem("navbar", 'desktop');
	} else {
		localStorage.setItem("navbar", 'mobile');
	}
};
function setPhoto(photoId) {
	var suggestedColours = ["#ddad08", "#b4697d", "#e01453", "#d2cc2b", "#718181", "#acd56f", "#d32f2f", "#8098ae"];
	localStorage.setItem("backgroundImage", photoId);
	localStorage.setItem("themeColour", suggestedColours[photoId - 1]);
	$(".photoChoice").css("color", "black");
	$(".photoChoice").css("background-color", "#fafafa");
	document.getElementById(photoId).style.backgroundColor = '#03a9f4';
	document.getElementById(photoId).style.color = 'white';
};
function finish() {
	localStorage.setItem("user", 'true');
	window.location.href = "/";
};
function setColour(colour) {
	localStorage.setItem("themeColour", colour);
};