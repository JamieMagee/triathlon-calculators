//

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
function calculatePace() {
  var hourSwim = 0;
  var minutesSwim = 0;
  var secondsSvim = 0;
  var distanceSwim = 0;

  distanceSwim = document.getElementById("MeterSvimTxt").value;

  if (distanceSwim == "0") {
    sweetAlert("Fejl...", "Vær venlig at angive en distance", "error");
    return false;
  }

  hourSwim = parseFloat(document.getElementById("HourSvimTxt").value);
  minutesSwim = parseFloat(document.getElementById("MinutSvimTxt").value);
  secondsSvim = parseFloat(document.getElementById("SecondSvimTxt").value);

  convertedToMinutesSwim = hourSwim * 60 + minutesSwim + secondsSvim / 60;

  if (convertedToMinutesSwim == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid", "error");
  } else {
    var seconds = convertedToMinutesSwim * 60;
    var secondsPerMeter = seconds / distanceSwim;
    var minutesPerMeter = secondsPerMeter / 60;
    var minutesPer100Meter = minutesPerMeter * 100;
    var pace = minutesPer100Meter * 60;

    var meterPerMinute = distanceSwim / convertedToMinutesSwim;
    var meterPerTime = meterPerMinute * 60;
    var speed = meterPerTime / 1000;

    document.getElementById("dvTable").style.display = "table";

    var paceArray = new Array();
    paceArray.push(["Tempo", "Hastighed"]);

    paceArray.push([
      hhmmss(Math.floor(pace)) + " per 100 m",
      Math.floor(speed * 10) / 10 + " km/t"
    ]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "500px";
    table.cellSpacing = "0";

    //Get the count of columns.
    var columnCount = paceArray[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = paceArray[0][i];
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < paceArray.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = paceArray[i][j];
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
      "</b> skal dit tempo eller din hastighed være som følgende:";
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
