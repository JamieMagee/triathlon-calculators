// init function
function init() {
  document.getElementById("MeterSvimTxt").value = 0;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 0;
  document.getElementById("SecondSvimTxt").value = 0;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateExpectation() {
  var hourSvim = 0;
  var minutesSvim = 0;
  var secondsSwim = 0;
  var distanceSwim = 0;

  distanceSwim = document.getElementById("MeterSvimTxt").value;

  if (distanceSwim == "0") {
    sweetAlert("Fejl...", "Vær venlig at angive en distance", "error");
    return false;
  }

  hourSvim = parseFloat(document.getElementById("HourSvimTxt").value);
  minutesSvim = parseFloat(document.getElementById("MinutSvimTxt").value);
  secondsSwim = parseFloat(document.getElementById("SecondSvimTxt").value);

  convertedToMinutesSwim = hourSvim * 60 + minutesSvim + secondsSwim / 60;

  if (convertedToMinutesSwim == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid", "error");
  } else {
    var totalSeconds = convertedToMinutesSwim * 60;

    var distArray = new Array();
    var estArray = new Array();
    var timeArray = new Array();

    distArray.push(
      50,
      100,
      200,
      400,
      800,
      1000,
      1500,
      1900,
      2000,
      3000,
      3800,
      4000,
      5000,
      10000
    );
    estArray.push(["Distance", "Estimeret tid"]);

    for (var a = 0; a < distArray.length; a++) {
      var test = distArray[a] / distanceSwim;
      var power = Math.pow(test, 1.06);
      var estTime = totalSeconds * power;
      timeArray.push([hhmmss(Math.round(estTime))]);
    }

    for (var b = 0; b < distArray.length; b++) {
      estArray.push([distArray[b] + " m", timeArray[b]]);
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
      hhmmss(convertedToMinutesSwim * 60) +
      "</b> for <b>" +
      distanceSwim +
      "</b> meter vil dine estimeret tider for forskellige distancer være som følgende:<br><br>Disse tider er estimeret ud fra <a href='https://en.wikipedia.org/wiki/Peter_Riegel' target='_blank'>Peter Riegels formel</a> !";
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
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// number functions
function addMeterSvim() {
  var value = document.getElementById("MeterSvimTxt").value;
  var intValue = parseFloat(value);
  intValue++;
  document.getElementById("MeterSvimTxt").value = intValue;
}

function subMeterSvim() {
  var value = document.getElementById("MeterSvimTxt").value;
  var intValue = parseFloat(value);
  intValue--;

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
