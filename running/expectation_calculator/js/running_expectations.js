// init function
function init() {
  document.getElementById("KmRunTxt").value = "0.0";
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 0;
  document.getElementById("SecondRunTxt").value = 0;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateExpectation() {
  var hourRun = 0;
  var minutesRun = 0;
  var secondsRun = 0;
  var distanceRun = 0;

  distanceRun = document.getElementById("KmRunTxt").value;

  distanceRun = distanceRun.replace(/,/g, ".");

  if (distanceRun == "0" || distanceRun == "." || distanceRun == ",") {
    sweetAlert("Fejl...", "Vær venlig at angive en distance", "error");
    return false;
  }

  hourRun = parseFloat(document.getElementById("HourRunTxt").value);
  minutesRun = parseFloat(document.getElementById("MinutRunTxt").value);
  secondsRun = parseFloat(document.getElementById("SecondRunTxt").value);

  convertedToMinutesRun = hourRun * 60 + minutesRun + secondsRun / 60;

  if (convertedToMinutesRun == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid", "error");
  } else {
    var totalSeconds = convertedToMinutesRun * 60;

    var distArray = new Array();
    var estArray = new Array();
    var timeArray = new Array();

    distArray.push(
      0.4,
      0.8,
      1,
      1.5,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      12,
      15,
      20,
      21.1,
      25,
      30,
      35,
      40,
      42.2
    );
    estArray.push(["Distance", "Estimeret tid"]);

    for (var a = 0; a < distArray.length; a++) {
      var test = distArray[a] / distanceRun;
      var power = Math.pow(test, 1.06);
      var estTime = totalSeconds * power;
      timeArray.push([hhmmss(Math.round(estTime))]);
    }

    for (var b = 0; b < distArray.length; b++) {
      if (distArray[b] < 1) {
        estArray.push([distArray[b] * 1000 + " m", timeArray[b]]);
      } else {
        estArray.push([distArray[b] + " km", timeArray[b]]);
      }
    }

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "500px";
    table.cellSpacing = "0";

    document.getElementById("dvTable").style.display = "table";

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "500px";
    table.cellSpacing = "0";

    //Get the count of columns.
    var columnCount = estArray[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = estArray[0][i];
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < estArray.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = estArray[i][j];
      }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

    var text = document.getElementById("resultText");
    text.innerHTML =
      "Baseret på din tid <b>" +
      hhmmss(convertedToMinutesRun * 60) +
      "</b> for <b>" +
      distanceRun +
      " km</b> vil dine estimeret tider for forskellige distancer være som følgende:<br><br>Disse tider er estimeret ud fra <a href='https://en.wikipedia.org/wiki/Peter_Riegel' target='_blank'>Peter Riegels formel</a> !";
    document.getElementById("resultText").style.display = "block";
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

// Check for only numbers in input fields
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;

  if (
    charCode == 46 ||
    charCode == 44 ||
    (charCode < 31 || (charCode < 58 && charCode > 47))
  ) {
    return true;
  } else {
    return false;
  }
}

// number functions
function addKmRun() {
  var value = document.getElementById("KmRunTxt").value;
  var intValue = parseFloat(value);
  intValue++;
  document.getElementById("KmRunTxt").value = intValue;
}

function subKmRun() {
  var value = document.getElementById("KmRunTxt").value;
  var intValue = parseFloat(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("KmRunTxt").value = intValue;
}

function addHourRun() {
  var value = document.getElementById("HourRunTxt").value;
  var intValue = parseInt(value);
  intValue++;
  document.getElementById("HourRunTxt").value = intValue;
}
function subHourRun() {
  var value = document.getElementById("HourRunTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("HourRunTxt").value = intValue;
}
function addMinutRun() {
  var value = document.getElementById("MinutRunTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("MinutRunTxt").value = intValue;
}
function subMinutRun() {
  var value = document.getElementById("MinutRunTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MinutRunTxt").value = intValue;
}
function addSecondRun() {
  var value = document.getElementById("SecondRunTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("SecondRunTxt").value = intValue;
}
function subSecondRun() {
  var value = document.getElementById("SecondRunTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("SecondRunTxt").value = intValue;
}
