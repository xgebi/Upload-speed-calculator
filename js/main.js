function compute() {
  console.log("a");
  /* upload-size-value upload-size-unit
  upload-speed-value upload-speed-unit
  */
  var value = document.querySelector("#upload-size-value").value;
  var unit = document.querySelector("#upload-size-unit").value;
  switch (unit) {
    case "TB": value *= 1000;
    case "GB": value *= 1000;
    case "MB": value *= 1000;
    case "kB": value *= 1000;
    default:
  }
  value *= 8; // to bits

  var speed = document.querySelector("#upload-speed-value").value;
  var speedUnit = document.querySelector("#upload-speed-unit").value;
  switch (speedUnit) {
    case "Mbps": speed *= 1000;
    case "kbps": speed *= 1000;
    default:
  }
  var result = value/speed;
  var days;
  var hours;
  var minutes;
  var seconds;

  seconds = Math.ceil(result % 60);
  result = Math.floor(result/60);
  minutes = result % 60;
  result = Math.floor(result/60);
  hours = result % 24;
  result = Math.floor(result/24);
  days = result;

  var text = "It'll take ";
  if (days > 0) {
    text += days;
    if (days == 1) {
      text+=" day ";
    } else {
      text += "days ";
    }
  }
  if (hours > 0) {
    text += hours;
    if (hours == 1) {
      text+=" hour ";
    } else {
      text += " hours ";
    }
  }
  if (minutes > 0) {
    text += minutes;
    if (minutes == 1) {
      text+=" minute ";
    } else {
      text += " minutes ";
    }
  }
  if (seconds > 0) {
    text += seconds;
    if (seconds == 1) {
      text+=" second ";
    } else {
      text += " seconds ";
    }
  }
  text += "to upload " + document.querySelector("#upload-size-value").value +unit + " with upload speed of " + document.querySelector("#upload-speed-value").value+speedUnit;
  document.querySelector("#results").innerText = text;
}
