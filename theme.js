if (localStorage.getItem("theme") == "smp-light") {
	document.getElementById('menu').style.backgroundColor = '#fafafa';
	$("#angularIcon").attr("src","/images/angularJS.dark.png");
	$("#jqueryIcon").attr("src","/images/jquery.dark.png");
	//#555555 colour for menu icons menuToggle
	$(".menuIcon").css("color", "#555555");
	$(".menuItem").css("color", "#555555");
	$(".mdc-tab-bar__indicator").css("background-color", "#555555");
	$("#menuToggle").css("color", "#555555");
	$("#menuTitle").css("color", "#555555");
};

if (localStorage.getItem("theme") == "smp-dark") {
	console.log('dark theme selected.');
	document.getElementById('menu').style.backgroundColor = '#333';
	$("*").css("color", "white");
	$("button").css("color", "black");
	$("select").css("color", "black");
	$("input").css("color", "black");
	$("option").css("color", "black");
	$("optgroup").css("color", "black");
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgb(40, 40, 40)';
	$('p').addClass('darkText');
	$('h2').addClass('darkText');
	
};


if (localStorage.getItem("theme") == 'colourful' || localStorage.getItem("theme") == 'simple') {
	document.getElementById('menu').style.backgroundColor = localStorage.getItem('themeColour');
};

$(".pinned").css("color", localStorage.getItem("themeColour"));