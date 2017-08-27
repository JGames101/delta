document.getElementById('jsmissing').style.display = 'none';
var online = navigator.onLine;
if (online == true)
	window.location.reload(true);
	document.getElementById('offlinealert').style.display = 'none';
else {
	console.log('Offline! Element of offline users being shown...');
	document.getElementById('offlinealert').style.display = 'block';
}