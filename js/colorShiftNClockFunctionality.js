/* contains Clock, colorShifter, ticker functionality  */
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

var background = document.getElementsByClassName("layer")[0];
var colorTicker = document.getElementById("colorNumber");
var clockTicker = document.getElementById("clock");

clockUpdate();
colorShiftUpdate(hours, minutes, seconds);

function colorShiftUpdate(r, g, b) {
  /* Updates the background color and color ticker. Input is 3 regular decimal
    numbers gathered from the clock ticker */
  r = clockToRGB(r, 24);
  g = clockToRGB(g, 60);
  b = clockToRGB(b, 60);
  // converts numbers to 0-255 range

  var rHex = format(r.toString(16));
  var gHex = format(g.toString(16));
  var bHex = format(b.toString(16));
  // converts to hex
  background.style.backgroundColor = "#" + rHex + gHex + bHex;
  colorTicker.innerHTML = rHex + ":" + gHex + ":" + bHex;
  setTimeout("colorShiftUpdate(hours,minutes,seconds)", 1);
}

function clockUpdate() {
  /* Updates, displays, manages clock  */
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  // updating clock txt clock
  clockTicker.innerHTML =
    format(hours) + ":" + format(minutes) + ":" + format(seconds);
  setTimeout("clockUpdate()", 1);
}

function clockToRGB(num, setting) {
  // Converts clock numbers, hours and minutes to a 0-255 number.
  if (setting == "24") {
    return Math.round((num / 23) * 255);
  } else if (setting == "60") {
    return Math.round((num / 59) * 255);
  }
  return num;
}

function format(num) {
  // formats numbers to be displayed, if its less than 2 places long,
  // adds a 0
  if (num.length < 2) {
    return "0" + num;
  }
  return num;
}
