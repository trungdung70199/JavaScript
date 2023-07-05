var wakeuptime = 7;
var noon = 12;
var luchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 10;

var showCurrentTime = function() {
    var clock = document.getElementById('clock');

    var currenttime = new Date();

    var hours = currenttime.getHours();
    var minutes = currenttime.getMinutes();
    var seconds = currenttime.getSeconds();
    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';
    clock.innerText = clockTime;
};

var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "./Images/Purin3.jpg";

    var timeEventjs = document.getElementById("timeEvent");
    var PurinImageJS = document.getElementById('purinImage');
}