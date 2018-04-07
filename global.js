if (localStorage.getItem('options') == undefined) {
	if (localStorage.getItem("themeColour") != undefined) {
		var options = new Object();
		options.themeColour = localStorage.getItem("themeColour");
		options.theme = localStorage.getItem("theme");
		options.secondColour = localStorage.getItem("secondColour");
		localStorage.setItem("options", JSON.stringify(options));
	} else {
		var options = new Object();
		options.themeColour = "#1e88e5";
		options.theme = "colourful";
		options.navigation = "top";
		options.secondColour = "#ff9800";
		localStorage.setItem("options", JSON.stringify(options));
	};
}
if (localStorage.getItem('flags') == undefined) {
	setupFlags();
}
mobileIndicator();
document.getElementById('menuTitle').innerHTML = page();
variableSetup();

window.mySwipe = new Swipe(document.getElementById('slider'), {
	startSlide: 2,
	speed: 400,
	continuous: true,
	disableScroll: false,
	stopPropagation: false,
	callback: function(index, elem) {},
	transitionEnd: function(index, elem) {}
  });

$( document ).ready(function() {
	loadPageContent();
});

document.documentElement.style.setProperty('--mdc-theme-primary', getOption('themeColour'));
document.documentElement.style.setProperty('--mdc-theme-secondary',  getOption('secondColour'));
var menu = false;
var online = navigator.onLine;
// send user to setup?
if (localStorage.getItem("user") == undefined && page() != 'setup') {
	console.log("User visiting for the first time! Activating new user popup...");
	//setPage('/setup');
};

$('head').append('<meta name="theme-color" content="' + getOption('themeColour') + '" />');

// Calculate Cards
function calculateCardColumns() {
	/*
	if (getOption('theme') != "v0.8a" && getOption('theme') != "v1.0b") {
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
	*/
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
	console.log('themes being loaded');
	if (getOption('theme') == 'dark') {
		document.body.className = 'mdc-theme--dark';
		document.body.style.backgroundColor = '#222';
		$('.mdc-card').css('background-color', '#282828');
		$('p').css('color', 'white');
		$('h1').css('color', 'white');
		$('h2').css('color', 'white');
		$('h3').css('color', 'white');
		$('.material-icons').css('color', 'white');
		$('#newsStoryContainer').css('background-color', '#282828');
		$('#shadePage').css('background-color', 'rgba(0, 0, 0, 0.25)');
	} else if (getOption('theme') == 'light') {
		$('header').css('background-color', '#fafafa');
		$('#menuTitle').css('color', '#222');
		$('.mdc-tab__icon').css('color', '#222');
		$('.mdc-tab-bar__indicator').css('visibility', 'hidden');
		$('#moreButtonNav').css('color', '#222');
	};
	
};
// Global Functions

function setPage(newLocation) {
	if (page() == 'videos') {
		var popoutVideoId = getParameterByName('video');
		$('#videoPlayer').appendTo('#popoutVideo');
		document.getElementById('videoPlayer').id = 'videoPlayerPopout';
		document.getElementById('videoPlayerPopout').height = "100%";
		var popoutVideo = true;
		document.getElementById('popoutVideo').className = 'open';
	}
	window.history.pushState("setPageFunction", "James M", newLocation);
	mobileIndicator();
	document.getElementById('menuTitle').innerHTML = page();
	loadPageContent();
}

var selLink = 0;
while (selLink < document.getElementsByClassName('link').length) {
	document.getElementsByClassName('link')[selLink].addEventListener('click', function() {
		event.preventDefault();_href = $(this).attr("href");setPage(_href);
	});
	selLink += 1;
};

function closePopoutVideo() {
	$('#videoPlayerPopout').remove();
	document.getElementById('popoutVideo').className = 'close';
	var popoutVideo = false;
	document.getElementById('videoPlayer').src = '';
}
function fullVideoPlayer() {
	setPage('/videos/?video=' + popoutVideoId);
	closePopoutVideo();
}

// Colour Corrections at the end
$('.info').css('color', getOption('themeColour'));
$('.info').children().css('color', getOption('themeColour'));
$(".pinned").css("color", getOption('themeColour'));

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
	$(".mdc-tab--active").removeClass("mdc-tab--active");
	if (page() == 'javascript' || page() == 'code' || page() == 'JQuery' || page() == 'html5') {
		document.getElementsByClassName('mdc-tab')[1].className += ' mdc-tab--active';
	} else if (page() == 'media' || page() == 'videos') {
		document.getElementsByClassName('mdc-tab')[2].className += ' mdc-tab--active';
	} else {
		document.getElementsByClassName('mdc-tab')[0].className += ' mdc-tab--active';
	}
};

function loadPageContent() {
	if (navigator.onLine) {
		if (page() == '') {
			window.mySwipe = new Swipe(document.getElementById('slider'), {startSlide: 0});
			jQuery.get('page/James M.html', function(data) {
				document.getElementById('homeContent').innerHTML = data;
				loadTheme();
				$.getScript( '/delta/page/James M.js' );
				//calculateCardColumns();
				$(".pinned").css("color", getOption('themeColour'));
				document.getElementById('menuTitle').innerHTML = 'James M';
				var selLink = 0;
				while (selLink < document.getElementsByClassName('link').length) {
					document.getElementsByClassName('link')[selLink].addEventListener('click', function() {
						event.preventDefault();_href = $(this).attr("href");setPage(_href);
					});
					selLink += 1;
				};
				flagExperiments();
				optionExtras();
			});
		} else {
			jQuery.get('page/' + page() + '.html', function(data) {
				if (page() == 'javascript' || page() == 'code' || page() == 'JQuery' || page() == 'html5') {
					window.mySwipe = new Swipe(document.getElementById('slider'), {startSlide: 1});
					document.getElementById('codeContent').innerHTML = data;
				} else if (page() == 'media' || page() == 'videos') {
					window.mySwipe = new Swipe(document.getElementById('slider'), {startSlide: 2});
					document.getElementById('mediaContent').innerHTML = data;
				} else {
					window.mySwipe = new Swipe(document.getElementById('slider'), {startSlide: 0});
					document.getElementById('homeContent').innerHTML = data;
				};
				loadTheme();
				$(".pinned").css("color", getOption('themeColour'));
				$.getScript( '/delta/page/' + page() + '.js' );
				//calculateCardColumns();
				$(".pinned").css("color", getOption('themeColour'));
				var selLink = 0;
				while (selLink < document.getElementsByClassName('link').length) {
					document.getElementsByClassName('link')[selLink].addEventListener('click', function() {
						event.preventDefault();_href = $(this).attr("href");setPage(_href);
					});
					selLink += 1;
				};
				flagExperiments();
				optionExtras();
			});
		}	
	} else {
		jQuery.get('page/offline.html', function(data) {
			document.getElementsByClassName('content')[0].innerHTML = data;
			loadTheme();
			document.getElementById('menuTitle').innerHTML = 'Offline';
			var selLink = 0;
			while (selLink < document.getElementsByClassName('link').length) {
				document.getElementsByClassName('link')[selLink].addEventListener('click', function() {
					event.preventDefault();_href = $(this).attr("href");setPage(_href);
				});
				selLink += 1;
			};
			flagExperiments();
			optionExtras();
		});
	}
};

function toggleSection(section) {
	if (document.getElementById(section).style.display == 'none') {
		document.getElementById(section).style.display = 'initial';
		document.getElementById('icon-' + section).innerHTML = "<i class='material-icons'>keyboard_arrow_up</i>";
	} else {
		document.getElementById(section).style.display = 'none';
		document.getElementById('icon-' + section).innerHTML = "<i class='material-icons'>keyboard_arrow_down</i>";
	}
}

function shareMenu() {
	if (navigator.share) {
	  navigator.share({
		  text: 'Check out this really cool site:',
		  url: window.location.href,
	  })
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
};

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function page() {
	return window.location.pathname.slice(1, window.location.pathname.length + 6).replace('/', '')
}

function mousePoisition(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
};

document.oncontextmenu = function() {
	openMenu('moreMenuHeader');
	return false;
};
// Popout Video Stuff
var popoutVideo = false;
var popoutVideoId = '00000000000';

// Popstate stuff
window.onpopstate = function(event) {
	mobileIndicator();
	document.getElementById('menuTitle').innerHTML = page();
	loadPageContent();
};

function openMenu(id) {
	if ($('#' + id).is('.mdc-simple-menu--open')) {
		$('#' + id).removeClass("mdc-simple-menu--open");
	} else {
		$('#' + id).addClass("mdc-simple-menu--open");
	}
};

function setupFlags() {
	var flags = new Object();
	flags.advancedOptions = true;
	flags.hideToolbar = false;
	localStorage.setItem("flags", JSON.stringify(flags));
}
function loadFlags() {
	var flags = JSON.parse(localStorage.getItem("flags"));
}

function getFlag(flag) {
	var flags = JSON.parse(localStorage.getItem("flags"));
	return eval('flags.' + flag);
}

function loadOptions() {
	var options = JSON.parse(localStorage.getItem("options"));
}

function getOption(option) {
	var options = JSON.parse(localStorage.getItem("options"));
	return eval('options.' + option);
}

// Set Flag And Options

function flagExperiments() {
	if (getFlag('hideToolbar')) {
		document.getElementById('titleBar').style.display = 'none';
	}
	if (getFlag('flagsSearch')) {
		document.getElementById('searchBox').style.display = 'block';
	}
}

function optionExtras() {
	if (getOption('navigation') == 'bottom') {
		$('header').addClass('bottomNavigation');
		document.getElementsByClassName('content')[0].style.marginTop = '0px';
	}
};

function variableSetup() {
	var page = new Object();
	page.home = 'none';
	page.code = 'none';
	page.media = 'none';
	var currentPage = 0;
};

function getContainer() {
	if (page() == 'javascript' || page() == 'code' || page() == 'jquery' || page() == 'html5') {
		return '#codeContent';
	} else if (page() == 'media' || page() == 'videos') {
		return '#mediaContent';
	} else {
		return '#homeContent';
	};
}

function Swipe(n,t){"use strict";function e(){w=x.children,m=w.length,w.length<2&&(t.continuous=!1),f.transitions&&t.continuous&&w.length<3&&(x.appendChild(w[0].cloneNode(!0)),x.appendChild(x.children[1].cloneNode(!0)),w=x.children),E=new Array(w.length),p=n.getBoundingClientRect().width||n.offsetWidth,x.style.width=w.length*p+"px";for(var e=w.length;e--;){var i=w[e];i.style.width=p+"px",i.setAttribute("data-index",e),f.transitions&&(i.style.left=e*-p+"px",a(e,b>e?-p:b<e?p:0,0))}t.continuous&&f.transitions&&(a(s(b-1),-p,0),a(s(b+1),p,0)),f.transitions||(x.style.left=b*-p+"px"),n.style.visibility="visible"}function i(){t.continuous?r(b-1):b&&r(b-1)}function o(){t.continuous?r(b+1):b<w.length-1&&r(b+1)}function s(n){return(w.length+n%w.length)%w.length}function r(n,e){if(b!=n){if(f.transitions){var i=Math.abs(b-n)/(b-n);if(t.continuous){var o=i;(i=-E[s(n)]/p)!==o&&(n=-i*w.length+n)}for(var r=Math.abs(b-n)-1;r--;)a(s((n>b?n:b)-r-1),p*i,0);n=s(n),a(b,p*i,e||g),a(n,0,e||g),t.continuous&&a(s(n-i),-p*i,0)}else n=s(n),c(b*-p,n*-p,e||g);b=n,h(t.callback&&t.callback(b,w[b]))}}function a(n,t,e){u(n,t,e),E[n]=t}function u(n,t,e){var i=w[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(i)var o=+new Date,s=setInterval(function(){var r=+new Date-o;if(r>i)return x.style.left=e+"px",L&&d(),t.transitionEnd&&t.transitionEnd.call(event,b,w[b]),void clearInterval(s);x.style.left=(e-n)*(Math.floor(r/i*100)/100)+n+"px"},4);else x.style.left=e+"px"}function d(){T=setTimeout(o,L)}function l(){L=0,clearTimeout(T)}var v=function(){},h=function(n){setTimeout(n||v,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var w,E,p,m,x=n.children[0];t=t||{};var b=parseInt(t.startSlide,10)||0,g=t.speed||300;t.continuous=void 0===t.continuous||t.continuous;var T,y,L=t.auto||0,k={},D={},M={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":h(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":h(this.transitionEnd(n));break;case"resize":h(e)}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,D={},x.addEventListener("touchmove",this,!1),x.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y},void 0===y&&(y=!!(y||Math.abs(D.x)<Math.abs(D.y))),y||(n.preventDefault(),l(),t.continuous?(u(s(b-1),D.x+E[s(b-1)],0),u(b,D.x+E[b],0),u(s(b+1),D.x+E[s(b+1)],0)):(D.x=D.x/(!b&&D.x>0||b==w.length-1&&D.x<0?Math.abs(D.x)/p+1:1),u(b-1,D.x+E[b-1],0),u(b,D.x+E[b],0),u(b+1,D.x+E[b+1],0)))}},end:function(n){var e=+new Date-k.time,i=Number(e)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,o=!b&&D.x>0||b==w.length-1&&D.x<0;t.continuous&&(o=!1);var r=D.x<0;y||(i&&!o?(r?(t.continuous?(a(s(b-1),-p,0),a(s(b+2),p,0)):a(b-1,-p,0),a(b,E[b]-p,g),a(s(b+1),E[s(b+1)]-p,g),b=s(b+1)):(t.continuous?(a(s(b+1),p,0),a(s(b-2),-p,0)):a(b+1,p,0),a(b,E[b]+p,g),a(s(b-1),E[s(b-1)]+p,g),b=s(b-1)),t.callback&&t.callback(b,w[b])):t.continuous?(a(s(b-1),-p,g),a(b,0,g),a(s(b+1),p,g)):(a(b-1,-p,g),a(b,0,g),a(b+1,p,g))),x.removeEventListener("touchmove",M,!1),x.removeEventListener("touchend",M,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==b&&(L&&d(),t.transitionEnd&&t.transitionEnd.call(n,b,w[b]))}};return e(),L&&d(),f.addEventListener?(f.touch&&x.addEventListener("touchstart",M,!1),f.transitions&&(x.addEventListener("webkitTransitionEnd",M,!1),x.addEventListener("msTransitionEnd",M,!1),x.addEventListener("oTransitionEnd",M,!1),x.addEventListener("otransitionend",M,!1),x.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),r(n,t)},prev:function(){l(),i()},next:function(){l(),o()},stop:function(){l()},getPos:function(){return b},getNumSlides:function(){return m},kill:function(){l(),x.style.width="",x.style.left="";for(var n=w.length;n--;){var t=w[n];t.style.width="",t.style.left="",f.transitions&&u(n,0,0)}f.addEventListener?(x.removeEventListener("touchstart",M,!1),x.removeEventListener("webkitTransitionEnd",M,!1),x.removeEventListener("msTransitionEnd",M,!1),x.removeEventListener("oTransitionEnd",M,!1),x.removeEventListener("otransitionend",M,!1),x.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}(window.jQuery||window.Zepto)&&function(n){n.fn.Swipe=function(t){return this.each(function(){n(this).data("Swipe",new Swipe(n(this)[0],t))})}}(window.jQuery||window.Zepto);

function search() {
	var container = getContainer();
	var name = document.getElementById("searchBox").value;
	var pattern = name.toLowerCase();
	var targetId = "";

	var elements = document.querySelectorAll("p, h2");
	var results = new Array();

	var i = 0;
	while (i < elements.length) {
		console.log(elements[i].innerHTML + ', ' + i);
		if (false) {
			results.push("Lemon");  
		}
		i += 1;
	};
}

function openVideo(videoId) {
	document.getElementById('videoPlayer').className = 'screen';
	document.getElementById('popoutVideo').className = 'screen';
	document.getElementById('videoInformation').className = 'screen';
	document.getElementById('popoutVideoOverlay').style.display = 'none';
	jQuery.get('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=AIzaSyAA_UsLtqF-c8dPaXc9PAlbBiDKerDmodA&part=snippet,contentDetails,statistics,status', function(data) {
		console.log(data);
		document.getElementById('videoPlayer').src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
		document.getElementById('videoTitle').innerHTML = data.items[0].snippet.title;
		document.getElementById('videoDescription').innerHTML = data.items[0].snippet.description;
		document.getElementById('username').innerHTML = data.items[0].snippet.channelTitle;
		document.getElementById('views').innerHTML = ' ' + data.items[0].statistics.viewCount + ' ';
		document.getElementById('likes').innerHTML = ' ' + data.items[0].statistics.likeCount + ' ';
		document.getElementById('dislikes').innerHTML = ' ' + data.items[0].statistics.dislikeCount + ' ';
		document.getElementById('comments').innerHTML = ' ' + data.items[0].statistics.commentCount + ' ';
	});
}

function expandVideo() {
	document.getElementById('videoPlayer').className = 'screen';
	document.getElementById('popoutVideo').className = 'screen';
	document.getElementById('videoInformation').className = 'screen';
	document.getElementById('popoutVideoOverlay').style.display = 'none';
}

function colapseVideo() {
	document.getElementById('videoPlayer').className = 'open';
	document.getElementById('popoutVideo').className = 'open';
	document.getElementById('videoInformation').className = 'open';
	document.getElementById('popoutVideoOverlay').style.display = 'block';
}
function playVideo(videoId) {
	var state = document.getElementById('popoutVideo').className;
	if (state == 'screen') {
		colapseVideo();
	} else if (state == 'open') {
		expandVideo();
	} else {
		openVideo(videoId);
	}
}
