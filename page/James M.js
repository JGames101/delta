var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		document.getElementById('latestVer').innerHTML = myObj.version;
	}
};
xmlhttp.open("GET", "/latest.json", true);
xmlhttp.send();