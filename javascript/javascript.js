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
function notifyMe(p) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'jgames101.github.io/images/icon/icon128.png',
      body: p,
    });

    notification.onclick = function () {
		notifyMe2('Hey! You clicked on a notification!')  
    };

  }

}