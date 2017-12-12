var flags = JSON.parse(localStorage.getItem("flags"));
var flagsItem = 0;
while (flagsItem < Object.keys(flags).length) {
    var currentFlag = Object.keys(flags)[flagsItem];
    var currentFlagState = eval('flags.' + Object.keys(flags)[flagsItem]);
    if (currentFlagState) {
        document.getElementById(currentFlag + '-toggle').innerHTML = 'Disable';
        $( "#" + currentFlag + '-toggle').addClass("mdc-button--raised");
    } else {
        document.getElementById(currentFlag + '-toggle').innerHTML = 'Enable';
    };

    console.log(currentFlag + ': ' + currentFlagState);
    flagsItem += 1;
}
loadFlags();

function loadFlags() {
	var flags = JSON.parse(localStorage.getItem("flags"));
}

function toggleFlag(flagName) {
    loadFlags();
    if (eval('flags.' + flagName)) {
        eval('flags.' + flagName + ' = false');
        $( "#" + flagName + '-toggle').removeClass("mdc-button--raised");
        document.getElementById(flagName + '-toggle').innerHTML = 'Enable';
    } else {
        eval('flags.' + flagName + ' = true');
        $( "#" + flagName + '-toggle').addClass("mdc-button--raised");
        document.getElementById(flagName + '-toggle').innerHTML = 'Disable';
    }
    localStorage.setItem("flags", JSON.stringify(flags));
}