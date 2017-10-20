jQuery.get('/menus/' + localStorage.getItem('navbar') + '.html', function(data) {
	document.getElementById('menu').innerHTML = data;
	if (localStorage.getItem('navbar') == 'mobile') {
		mobileIndicator();
	};
	document.getElementById('menuTitle').innerHTML = document.title;
	loadTheme();
	window.addEventListener('scroll', function(e) {
		if(window.scrollY>100) {
			$("#menu").removeClass("full").addClass("small");
		} else {
			$("#menu").removeClass("small").addClass("full");
		}
	});
});
var menu = false;
var online = navigator.onLine;
// send user to setup?
if (localStorage.getItem("user") == undefined) {
	console.log("User visiting for the first time! Opening new user page...");
	//window.location.href = "/setup/"
};

if (localStorage.getItem("backgroundImage") == undefined) {
	console.log("Missing background image settings.");
	localStorage.setItem("backgroundImage", 7)
} else {
	$('html').attr('id', 'htmlObj');
	$('body').append('<span class="webp"></span>');
	if (calculateLayout() != "phone") {
		if (document.getElementsByClassName('webp')[0].id == "htmlObj") {
			document.getElementById('htmlObj').style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.webp)';
		} else {
			document.getElementById('htmlObj').style.backgroundImage='url(/photos/' + localStorage.getItem("backgroundImage") + '.jpg)';
		};
	};
};
if (localStorage.getItem("themeColour") == undefined) {
	localStorage.setItem("themeColour", "#cb2c36");
	localStorage.setItem("backgroundImage", "7");
	localStorage.setItem("theme", "colourful");
	localStorage.setItem("navbar", "mobile");
};
if (localStorage.getItem("theme") == "Greyscale") {
	$('head').append('<meta name="theme-color" content="' + '#323232' + '" />');
} else if (localStorage.getItem("theme") == "light") {
	$('head').append('<meta name="theme-color" content="' + '#323232' + '" />');
} else {
	$('head').append('<meta name="theme-color" content="' + localStorage.getItem("themeColour") + '" />');
};

// Calculate Cards
function calculateCardColumns() {
	if (localStorage.getItem("theme") != "v0.8a" && localStorage.getItem("theme") != "v1.0b") {
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
function loadTheme() {
	if (localStorage.getItem("theme") == "light") {
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

	if (localStorage.getItem("theme") == "dark") {
		document.getElementById('menu').style.backgroundColor = '#333';
		$("*").css("color", "white");
		$("button").css("color", "black");
		$("select").css("color", "black");
		$("input").css("color", "black");
		$("option").css("color", "black");
		$("optgroup").css("color", "black");
		document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(40, 40, 40 ,0.9)';
		
	};
	
	if (localStorage.getItem("theme") == "smp-dark") {
		document.getElementById('menu').style.backgroundColor = '#333';
		$("*").css("color", "white");
		$("button").css("color", "black");
		$("select").css("color", "black");
		$("input").css("color", "black");
		$("option").css("color", "black");
		$("optgroup").css("color", "black");
		document.getElementsByClassName('colourBackground')[0].style.backgroundColor = 'rgba(40, 40, 40 ,0.9)';
		
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
	
	if (localStorage.getItem("theme") == 'colourful' || localStorage.getItem("theme") == 'simple') {
		document.getElementById('menu').style.backgroundColor = localStorage.getItem('themeColour');
	};
	
	$(".pinned").css("color", localStorage.getItem("themeColour"));
	// Functions for other content settings
};
// Global Functions
function toggleMenu() { //The commented code is for the page responding to when the menu is opened.
	if (document.getElementById('menu').className == 'open') {
		document.getElementById('menu').className = 'hidden';
		document.getElementById('menuTextBox').style.cursor = "initial";
		//document.getElementsByClassName('content')[0].id = 'initial';
		//document.getElementById('pageName').className = 'hidden';
		document.getElementById('menuButton').className = 'regular';
		} else {
		document.getElementById('menu').className = 'open';
		document.getElementById('menuTextBox').style.cursor = "pointer";
		//document.getElementsByClassName('content')[0].id = 'contentOpen';
		//document.getElementById('pageName').className = 'pageNameCondensed';
		document.getElementById('menuButton').className = 'reverse';
	};
};

function setPage(newLocation) {
	window.location.href = newLocation;
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

// Colour Corrections at the end
$('.info').css('color', localStorage.getItem("themeColour"));
$('.info').children().css('color', localStorage.getItem("themeColour"));
$(".pinned").css("color", localStorage.getItem("themeColour"));

//other stuff

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


function mobileIndicator() {
	if (screen.width < 601) {
		if (document.title == 'James M') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '0px';
		};
		if (document.title == 'Updates') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '72px';
		};
		if (document.title == 'JavaScript' || document.title == 'JQuery') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '144px';
		};
		if (document.title == 'Options') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '216px';
		};
		if (document.title == 'Videos') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '288px';
		};
	} else {
		if (document.title == 'James M') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '0px';
		};
		if (document.title == 'Updates') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '160px';
		};
		if (document.title == 'JavaScript' || document.title == 'JQuery') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '320px';
		};
		if (document.title == 'Options') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '480px';
		};
		if (document.title == 'Videos') {
			document.getElementsByClassName('mdc-tab-bar__indicator')[0].style.marginLeft = '640px';
		};
	};
};

function loadPageContent() {
	if (navigator.onLine) {
		jQuery.get('/page/' + document.title + '.html', function(data) {
			document.getElementsByClassName('content')[0].innerHTML = data;
			$(".pinned").css("color", localStorage.getItem("themeColour"));
			$.getScript( '/page/' + document.title + '.js' );
			calculateCardColumns();
			$(".pinned").css("color", localStorage.getItem("themeColour"));
		});
	} else {
		jQuery.get('/page/offline.html', function(data) {
			document.getElementsByClassName('content')[0].innerHTML = data;
		});
	}
};
$( document ).ready(function() {
loadPageContent();
});
