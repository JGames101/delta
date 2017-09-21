function setTheme(themeId) {
	localStorage.setItem("theme", themeId);
	$(".themeChoice").css("color", "black");
	$(".themeChoice").css("background-color", "#fafafa");
	document.getElementById(themeId).style.backgroundColor = '#03a9f4';
	document.getElementById(themeId).style.color = 'white';
};
function setPhoto(photoId) {
	var suggestedColours = ["#ddad08", "#b4697d", "#e01453", "#d2cc2b", "#718181", "#acd56f", "#cb2c36", "#8098ae"];
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