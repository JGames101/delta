document.getElementById('jsmissing').style.display = 'none';
var online = navigator.onLine;
if (online == true)
	document.getElementById('offlinealert').style.display = 'none';
else {
	console.log('Offline! Element of offline users being shown...');
	document.getElementById('offlinealert').style.display = 'block';
}