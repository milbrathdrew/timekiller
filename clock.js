function startTime() {
  var today = new Date();

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);

}

function checkTime(i){
  if (i < 10) {i = "0" + i};
  return i;
}



/*
// this will create a clock //

$(document).ready( function() {
  function displayTime() {
    //date object to contain current date and time
    var currentTime = new Date();
    //extract h,m,s from date object
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();


    //this gets a "handle" to the clock div in our html
    var clockDiv = document.getElementById('clock');

    hours = (currentHours < 10 ? "0" : "") + currentHours;
    // ? is a ternary operator (returns value before colon IF true for single values)
    minutes = (currentMinutes > 10 ? "0" : "") + currentMinutes;
    seconds = (currentSeconds > 10 ? "0" : "") + currentSeconds;

    //set the text inside the clock div
    //hours, minutes, seconds of currentTime
    clockdiv.innertext = hours + ":" + minutes + ":" + seconds;

}
//runs displayTime function for the first time
displayTime();

//makes the clock tick
//runs displaytime every second
setInterval(displaytime, 1000);
});

/*
//formatting time
//add 0 if requried
currentHours = (currentHours < 10 ? "0" : "") + currentHours;
// ? is a ternary operator (returns value before colon IF true for single values)
currentMinutes = (currentMinutes > 10 ? "0" : "") + currentMinutes;
currentSeconds = (currentSeconds > 10 ? "0" : "") + currentSeconds;

//join formatted components
var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDDay;
*/
