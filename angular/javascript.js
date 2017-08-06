notify(title, body, icon, clickEvent) {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: icon,
      body: body,
	  title: title
    });

    notification.onclick = function () {
		clickEvent;  
    };

  }

}
}