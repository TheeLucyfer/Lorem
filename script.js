$(document).ready(function () {

  const $valueSpan = $('.valueSpan');
  const $value = $('#slider11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});

function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    alert("Geolocation is not supported by this browser.");
  }
};
// while on line 38
//every time add a summary, do i++

//associate each meal with a number. Check the one that comes back
//object fist card is firs meal, second car..
// when get recipe back, if equal to first meal


function getLocation() {
  // Make sure browser supports this feature
  if (navigator.geolocation) {
    // Provide our showPosition() function to getCurrentPosition
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    alert("Geolocation is not supported by this browser.");
  }
}

// This will get called after getCurrentPosition()
function showPosition(position) {
  // Grab coordinates from the given object
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

  // Call our next function, passing on the coordinates
  redirect(lat, lon);
}

function redirect(lat, lon) {
  // Compare latitude and longitude values
  if (lat >= 30 && lon <= -100) {
    // Redirect to a new page
    window.location.href = "./western.html";
  }
  else {
    window.location.href = "eastern.html";
  }
}

// See if user is on Windows
if (navigator.userAgent.indexOf("Windows") !== -1) {
  alert("Welcome, Windows user!");
  getLocation();
}
// Then check for macOS
else if (navigator.userAgent.indexOf("Mac") !== -1) {
  alert("Welcome, Mac user!");
  getLocation();
}
// I give up
else {
  alert("I don't know what you're using...");
}


