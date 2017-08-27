document.getElementById('jsmissing').style.display = 'none';
var online = navigator.onLine;
if (online == true) {
    document.getElementById('connecmissing').style.display = 'none';
} else {
    document.getElementById('connecmissing').style.display = 'block';
}