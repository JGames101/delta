function showText() {
	document.getElementById('javaScript1').innerHTML = "You made text appear! YAY!";
}
function toCelsius() {
	var fahrenheit = document.getElementById("input2").value;
    document.getElementById("answer2").innerHTML = (5/9) * (fahrenheit-32);
}
function popup(p) {
	window.alert(p);
}
function ask(p) {
	var useless = prompt(p, "Cool Cool");
}
function conf(p) {
	if (confirm('Press a button!') == true) {
		var useless = "cool cool";
	}
}
function notifyMe() {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('hey! Look here!', {
      icon: '/images/icon/icon128.png',
      body: 'Hey! This is a notification!',
	  title: 'hey! Look here!'
    });

    notification.onclick = function () {
		notifyMe();  
    };

  }

}
function notgen() {
	var noTtl = document.getElementById('nottitle').value;
	var noCon = document.getElementById('notcontent').value;
	var noImg = document.getElementById('notimage').value;
	if (Notification.permission !== "granted")
		Notification.requestPermission();
	else {
		var notification = new Notification(noTtl, {
			icon: noImg,
			body: noCon,
			title: noTtl
		});

		notification.onclick = function () {
			console.log('Notification Clicked'); 
		};

	}
}
function toCelsiusNew() {
	var fahrenheit = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = (5/9) * (fahrenheit-32);
}
function toFahrenheitNew() {
	var celsius = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = 1.8 * celsius + 32;
	document.getElementById("fahrenheit").value = document.getElementById("fahrenheit").value(0, 4);
}