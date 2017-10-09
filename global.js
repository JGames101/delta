var menu = false;
var online = navigator.onLine;
// send user to setup?
if (localStorage.getItem("user") == undefined) {
	console.log("User visiting for the first time! Opening new user page...");
	window.location.href = "/setup/"
};
calculateCardColumns();

if (localStorage.getItem("backgroundImage") == undefined) {
	console.log("Missing background image settings.");
	localStorage.setItem("backgroundImage", 7)
} else {
	$('html').attr('id', 'htmlObj');
	$('body').append('<span class="webp"></span>');
	if (document.getElementsByClassName('webp')[0].id == "htmlObj") {
		document.getElementById('htmlObj').style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.webp)';
	} else {
		document.getElementById('htmlObj').style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
	};
};
if (localStorage.getItem("themeColour") == undefined) {
	localStorage.setItem("themeColour", "#cb2c36");
	localStorage.setItem("backgroundImage", "5");
	localStorage.setItem("theme", "photoDef");
};
if (localStorage.getItem("theme") == "Greyscale") {
	$('head').append('<meta name="theme-color" content="' + '#323232' + '" />');
} else if (localStorage.getItem("theme") == "light") {
	$('head').append('<meta name="theme-color" content="' + '#323232' + '" />');
} else {
	$('head').append('<meta name="theme-color" content="' + localStorage.getItem("themeColour") + '" />');
};
document.getElementById('menu').style.backgroundColor = localStorage.getItem("themeColour");

// Calculate Cards
function calculateCardColumns() {
	if (localStorage.getItem("theme") != "v0.8a" || localStorage.getItem("theme") != "v1.0b") {
		if (screen.width > "1024") {
			cardsDesktop();
			var layout = "desktop";
		} else if (screen.width > "767") {
			cardsTablet();
			var layout = "tablet";
		}	else if (screen.width > screen.height) {
			cardsTablet();
			var layout = "tablet";
		} else {
			cardsPhone();
			var layout = "phone";
		};
	};
}

function cardsDesktop() {
	console.log("desktop");
	cardColumns(3);
};
function cardsTablet() {
	console.log("tablet");
	cardColumns(2);
};
function cardsPhone() {
	console.log("phone");
	cardColumns(1);
};
function cardColumns(colCount) {
	console.log(colCount);
	var type = 1;
	if ($(".pinned").length == "0") {
		while (type < colCount+1) {
			$('.content').append('<div id="column' + type + '" class="column"></div>');
			console.log(type)
			type += 1;
		};
		var type = 1;
		var cardVal = 0;
		while (cardVal < $( ".card" ).length) {
			console.log('Card: ' + cardVal + ' type: ' + type);
			document.getElementsByClassName('card')[0].style.width = '100%';
			document.getElementById('column' + type).appendChild(document.getElementsByClassName('card')[0]);
			
			if (type > colCount-1) {
				type = 1;
			} else {
				type += 1;
			};
			cardVal += 1;
		};
	} else {
		var pinNum = 1;
		var type = 1;
		while (pinNum < $(".pinnedDiv").length+1) {
			while (type < colCount+1) {
				$('#pinned' + pinNum).append('<div id="column' + type + '-' + pinNum + '" class="column"></div>');
				console.log(type + "-" + pinNum);
				type += 1;
			};
			pinNum += 1;
			type = 1;
		}
		var pinNum = 1;
		while (pinNum < $( ".pinned" ).length+2) {
			var cardVal = 0;
			var type = 1;
			while (cardVal < $(".card" + pinNum).length) {
				document.getElementsByClassName('card' + pinNum)[0].style.width = '100%';
				document.getElementById('column' + type + '-' + pinNum).appendChild(document.getElementsByClassName('card' + pinNum)[0]);
				if (type > colCount-1) {
					type = 1;
				} else {
					type += 1;
				};
				cardVal += 1;
			};
			pinNum += 1;
		};
	};
};
// Theme Stuff
if (localStorage.getItem("theme") == "light") {
	document.getElementById('menu').style.backgroundColor = '#fafafa';
	$("#angularIcon").attr("src","/images/angularJS.dark.png");
	$("#javascriptIcon").attr("src","/images/javascript.dark.png");
	$("#jqueryIcon").attr("src","/images/jquery.dark.png");
	//#555555 colour for menu icons menuToggle
	$(".menuIcon").css("color", "#555555");
	$(".menuItem").css("color", "#555555");
	$("#menuToggle").css("color", "#555555");
	var infoBtnCount = document.getElementsByClassName('pinned').length;
	var colourNum = 0;
	while (colourNum < infoBtnCount) {
		document.getElementsByClassName('pinned')[colourNum].style.color = localStorage.getItem("themeColour");
		colourNum += 1;
	};
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = '#fafafa';
	
};

if (localStorage.getItem("theme") == "dark") {
	document.getElementById('menu').style.backgroundColor = '#333';
	$("*").css("color", "white");
	$("button").css("color", "black");
	$("select").css("color", "black");
	$("input").css("color", "black");
	$("option").css("color", "black");
	$("optgroup").css("color", "black");
	$(".card").css("background-color", "#333");
	var infoBtnCount = document.getElementsByClassName('pinned').length;
	var colourNum = 0;
	while (colourNum < infoBtnCount) {
		document.getElementsByClassName('pinned')[colourNum].style.color = localStorage.getItem("themeColour");
		colourNum += 1;
	};
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = '#222';
	
};

if (localStorage.getItem("theme") == "photo dark") {
	$("*").css("color", "white");
	$("button").css("color", "black");
	$("select").css("color", "black");
	$("input").css("color", "black");
	$("option").css("color", "black");
	$("optgroup").css("color", "black");
	$(".card").css("background-color", "#333");
	
};

if (localStorage.getItem("theme") == "v0.8a") {
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(43, 53, 56, 0.75)';
	document.getElementById('menu').id = "classicMenu";
	document.getElementById('menuIconBox').style.display = "none";
};

if (localStorage.getItem("theme") == "v1.0b") {
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(43, 53, 56, 0.75)';
	document.getElementById('menu').style.backgroundColor = '#486e89';
	document.getElementById('menu').style.boxShadow = '0px 0px 0px black';
	
};

if (localStorage.getItem("theme") == "colourful") {
	document.body.style.backgroundImage='url(/photos/none.jpg)';
	document.body.style.backgroundColor = localStorage.getItem("themeColour");
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

if (localStorage.getItem("theme") == "Greyscale") {
	document.body.style.WebkitFilter="grayscale(100%)";
	document.getElementById('menu').style.WebkitFilter="grayscale(100%)";
	document.body.style.filter="grayscale(100%)";
	document.getElementById('menu').style.filter="grayscale(100%)";
	document.body.style.backgroundImage='url(/photos/none.jpg)';
	document.body.style.backgroundColor = 'grey';
	document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
};

if (localStorage.getItem("theme") == "Blur") {
	document.getElementById('menu').style.WebkitBackdropFilter="blur(72px)";
	document.getElementById('menu').style.backdropFilter="blur(72px)";
	document.getElementById('menu').style.backgroundColor = "rgba(0, 0, 0, 0)";
	document.getElementById('menu').style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0), 0 6px 20px 0 rgba(0,0,0,0)";
};

// Functions for other content settings
if (localStorage.getItem('mobile.navLoc') == "bottom") {
	document.getElementById("menu").className += "menuBottom";
	document.getElementById("menuButton").className = "menuBtnBottom";
	document.getElementById("menuIconBox").className = "barOnBottom";
	console.log('menu loaded to bottom.');
};
// Global Functions
function toggleMenu() { //The commented code is for the page responding to when the menu is opened.
	if (localStorage.getItem("theme") == "v0.8a") {
		toggleMenuOldTheme();
	} else {
	if (menu == true) {
		document.getElementById('menu').className = 'hidden';
		document.getElementById('menuTextBox').style.cursor = "initial";
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById('menuButton').className = 'menuBtnBottom regular';
		} else {
			document.getElementById('menuButton').className = 'regular';
		};
		//document.getElementsByClassName('content')[0].id = 'initial';
		//document.getElementById('pageName').className = 'hidden';
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById("menu").className += " menuBottom";
		};
		menu = false;
		} else {
		document.getElementById('menu').className = 'open';
		document.getElementById('menuTextBox').style.cursor = "pointer";
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById('menuButton').className = 'menuBtnBottom reverse';
		} else {
			document.getElementById('menuButton').className = 'reverse';
		};
		//document.getElementsByClassName('content')[0].id = 'contentOpen';
		//document.getElementById('pageName').className = 'pageNameCondensed';
		if (localStorage.getItem('mobile.navLoc') == "bottom") {
			document.getElementById("menu").className += " menuBottom";
		};
		menu = true;
	};
	}
}

function toggleMenuOldTheme() { //The commented code is for the page responding to when the menu is opened.
	if (menu == true) {
		document.getElementById('menuTextBox').style.color = 'transparent';
		document.getElementById('classicMenu').className = 'noshow';
		document.getElementById('menuTextBox').style.cursor = "initial";
		document.getElementById('menuToggle').innerHTML = 'keyboard_arrow_right';
		//document.getElementsByClassName('content')[0].id = 'initial';
		//document.getElementById('pageName').className = 'hidden';
		menu = false;
	} else {
		document.getElementById('menuTextBox').style.color = 'white';
		document.getElementById('classicMenu').className = 'open';
		document.getElementById('menuTextBox').style.cursor = "pointer";
		document.getElementById('menuToggle').innerHTML = 'keyboard_arrow_left';
		//document.getElementsByClassName('content')[0].id = 'contentOpen';
		//document.getElementById('pageName').className = 'pageNameCondensed';
		menu = true;
	}
}

function setPage(newLocation) {
	window.location.href = newLocation;
}

function simulateOverlay() {
	document.getElementById('jsmissing').style.display = 'block';
}

function getAllUrlParams(url) {
  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
};

function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  var min_x = 30;  //min x swipe for horizontal swipe
  var max_x = 30;  //max x difference for vertical swipe
  var min_y = 50;  //min y swipe for vertical swipe
  var max_y = 60;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if(swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if(swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if(typeof func == 'function') func(el,direc);
    }
    direc = "";
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  },false);  
}

// Colour Corrections at the end
$('.info').css('color', localStorage.getItem("themeColour"));
$('.info').children().css('color', localStorage.getItem("themeColour"));

//other stuff
detectswipe('menu',calculateSwipe);

function calculateSwipe(el,d) {
	console.log('swipe: ' + d);
	if (calculateLayout() == "desktop" && d == "r" && document.getElementById('menu').className.includes("open") == false) {
		toggleMenu();
	} else if (calculateLayout() == "desktop" && d == "l" && document.getElementById('menu').className.includes("open") == true) {
		toggleMenu();
	} else if (calculateLayout() == "tablet") {
		if (screen.width > screen.height) {
			if (d == "l" && document.getElementById('menu').className.includes("open") == true || d == "r" && document.getElementById('menu').className.includes("open") == false) {
				toggleMenu();
			};
		} else if (screen.width < screen.height) {
			if (d == "d" && document.getElementById('menu').className.includes("open") == true || d == "u" && document.getElementById('menu').className.includes("open") == false) {
				toggleMenu();
			};
		}
	} else if (calculateLayout() == "phone") {
		if (screen.width > screen.height) {
			if (d == "l" && document.getElementById('menu').className.includes("open") == true || d == "r" && document.getElementById('menu').className.includes("open") == false) {
				toggleMenu();
			};
		} else {
			if (localStorage.getItem('mobile.navLoc') == "bottom") {
				if (d == "d" && document.getElementById('menu').className == "open menuBottom" || d == "u" && document.getElementById('menu').className != "open menuBottom") {
					toggleMenu();
				}
			} else if (d == "u" && document.getElementById('menu').className == "open" || d == "d" && document.getElementById('menu').className != "open") {
				toggleMenu();
			};
		};
	};
};

function calculateLayout() {
	if (screen.width > "1024") {
		return "desktop";
	} else if (screen.width > "767") {
		return "tablet";
	}	else if (screen.width > screen.height) {
		return "tablet";
	} else {
		return "phone";
	};
}