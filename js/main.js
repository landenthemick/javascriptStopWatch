// A couple of global variables
var start, stop, stopwatchBox;


start = document.getElementById("start");
stop = document.getElementById("stop");
stopwatchBox = document.getElementById("stopwatch-box");


start.addEventListener("click", function() {
  stopwatch("start");
});

stop.addEventListener("click", function() {
  stopwatch("stop");
});

// define a timer ID for setInterval 
timerId = null;

// create the stopwatch
function stopwatch(command) {
  var hours = 0,
    minutes = 0,
    seconds = 0,
    display;

  function makeTwoDigits(number) {
    
    if (number < 10) {
      return "0" + number;
    }

    return number;
  }

  if (command === "start") {
    timerId = setInterval(function() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      display =
        makeTwoDigits(hours) +
        ":" +
        makeTwoDigits(minutes) +
        ":" +
        makeTwoDigits(seconds);
      stopwatchBox.innerHTML = display;
      console.log(display);
    }, 1000);
  } else if (command === "stop") {
    clearInterval(timerId);
  }
}