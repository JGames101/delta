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
    var notification = new Notification('Notification title', {
      icon: 'mstile-150x150',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");      
    };

  }

}