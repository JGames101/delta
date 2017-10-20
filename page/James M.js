var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myObj = JSON.parse(this.responseText);
		document.getElementById('latestVer').innerHTML = myObj.version;
	}
};
xmlhttp.open("GET", "/latest.json", true);
xmlhttp.send();
document.getElementById('pinned3').innerHTML = '<h2 class="pinned">OTHER</h2><div class="card wideCard card3"><iframe class="video" width="100%" height="315px" src="https://www.youtube.com/embed/z5XhoUH3sEc" frameborder="0" allowfullscreen></iframe><h2>BERLIN VR</h2><p>Some VR images from Berlin.</p></div>'