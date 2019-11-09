//

var poollength = 0;

// init function
function init() {
  document.getElementById("MeterSvimTxt").value = 0;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 0;
  document.getElementById("SecondSvimTxt").value = 0;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
  document.getElementById("Image25").src = "images/25.png";
  document.getElementById("Image50").src = "images/50.png";
  poollength = 0;
  clicked25 = false;
  clicked50 = false;
}

// The big calculation function
function calculateSplit() {
  if (poollength != 0) {
    var hourSwim = 0;
    var minutesSwim = 0;
    var secondsSwim = 0;
    var distanceSwim = 0;
    var poollengths = poollength;

    distanceSwim = document.getElementById("MeterSvimTxt").value;

    if (distanceSwim == "0") {
      sweetAlert("Fejl...", "Vær venlig at angive en distance", "error");
      return false;
    }

    if (distanceSwim % 25 != 0) {
      sweetAlert(
        "",
        "Du vil få skæve tal da din distance ikke går op med 25 !!",
        "error"
      );
    }

    hourSwim = parseFloat(document.getElementById("HourSvimTxt").value);
    minutesSwim = parseFloat(document.getElementById("MinutSvimTxt").value);
    secondsSwim = parseFloat(document.getElementById("SecondSvimTxt").value);

    convertedToMinutesSwim = hourSwim * 60 + minutesSwim + secondsSwim / 60;

    if (convertedToMinutesSwim == 0) {
      sweetAlert("Fejl...", "Vær venlig at angive en tid", "error");
    } else {
      var minperMeter = convertedToMinutesSwim / distanceSwim;
      var sekperPoollength = minperMeter * poollength;
      var minperPoollength = sekperPoollength * 60;
      var timeInMinutes = minperPoollength;

      document.getElementById("dvTable").style.display = "table";

      lapCount = distanceSwim / poollength;

      var laps = new Array();
      laps.push(["Omgang", "Distance", "Tid per omgang"]);

      for (var i = 1; i < lapCount + 1; i++) {
        laps.push([i, +poollengths + " m", hhmmss(Math.ceil(timeInMinutes))]);
        poollengths = poollengths + poollength;
        timeInMinutes = timeInMinutes + minperPoollength;
      }

      //Create a HTML Table element.
      var table = document.createElement("TABLE");
      table.border = "0";
      table.width = "500px";
      table.cellSpacing = "0";

      //Get the count of columns.
      var columnCount = laps[0].length;

      //Add the header row.
      var row = table.insertRow(-1);
      for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = laps[0][i];
        row.appendChild(headerCell);
      }

      //Add the data rows.
      for (var i = 1; i < laps.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = laps[i][j];
        }
      }

      var dvTable = document.getElementById("dvTable");
      dvTable.innerHTML = "";
      dvTable.appendChild(table);

      var text = document.getElementById("resultText");
      text.innerHTML =
        "For at svømme <b>" +
        distanceSwim +
        "</b> meter på <b>" +
        hhmmss(convertedToMinutesSwim * 60) +
        "</b> skal du svømme <b>" +
        lapCount +
        "</b> baner og svømme hver bane på <b>" +
        hhmmss(Math.ceil(minperPoollength)) +
        ".</b><br><br>Dine split tider er som følgende:";
      document.getElementById("resultText").style.display = "block";
    }
  } else {
    sweetAlert("Fejl...", "Vær venlig at vælge en pool længde", "error");
    return true;
  }
}

//function to convert seconds to hhmmss
function hhmmss(secs) {
  var minutes = Math.floor(secs / 60);
  secs = secs % 60;
  var hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return pad(hours) + ":" + pad(minutes) + ":" + pad(secs);
}

//function to add leading 0
function pad(num) {
  return ("0" + num).slice(-2);
}

//Function to run getPoollength and change image
function getAndChange(val, image) {
  getPoolLength(val);
  if (image == Image25) {
    clicked25 = true;
    clicked50 = false;
    document["Image50"].src = "images/50.png";
  } else if (image == Image50) {
    clicked25 = false;
    clicked50 = true;
    document["Image25"].src = "images/25.png";
  }
}

//Set poollength after click on image
function getPoolLength(val) {
  poollength = val;
}

var clicked25 = false;
var clicked50 = false;

function onHover(image) {
  if (image == Image25) {
    if (!clicked25) {
      document["Image25"].src = "images/25green.png";
    }
  } else if (image == Image50) {
    if (!clicked50) {
      document["Image50"].src = "images/50green.png";
    }
  }
}

function offHover(image) {
  if (image == Image25) {
    if (!clicked25) {
      document["Image25"].src = "images/25.png";
    }
  } else if (image == Image50) {
    if (!clicked50) {
      document["Image50"].src = "images/50.png";
    }
  }
}

// Check for only numbers in input fields
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// number functions
function addMeterSvim() {
  var value = document.getElementById("MeterSvimTxt").value;
  var intValue = parseFloat(value);
  intValue = intValue + 25;
  document.getElementById("MeterSvimTxt").value = intValue;
}

function subMeterSvim() {
  var value = document.getElementById("MeterSvimTxt").value;
  var intValue = parseFloat(value);
  intValue = intValue - 25;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MeterSvimTxt").value = intValue;
}

function addHourSvim() {
  var value = document.getElementById("HourSvimTxt").value;
  var intValue = parseInt(value);
  intValue++;
  document.getElementById("HourSvimTxt").value = intValue;
}
function subHourSwim() {
  var value = document.getElementById("HourSvimTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("HourSvimTxt").value = intValue;
}
function addMinutSvim() {
  var value = document.getElementById("MinutSvimTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("MinutSvimTxt").value = intValue;
}
function subMinutSvim() {
  var value = document.getElementById("MinutSvimTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MinutSvimTxt").value = intValue;
}
function addSecondSvim() {
  var value = document.getElementById("SecondSvimTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("SecondSvimTxt").value = intValue;
}
function subSecondSvim() {
  var value = document.getElementById("SecondSvimTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("SecondSvimTxt").value = intValue;
}
