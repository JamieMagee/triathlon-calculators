// init function
function init() {
  document.getElementById("KmBikeTxt").value = 0;
  document.getElementById("HourBikeTxt").value = 0;
  document.getElementById("MinutBikeTxt").value = 0;
  document.getElementById("SecondBikeTxt").value = 0;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateSplit() {
  var hourBike = 0;
  var minutesBike = 0;
  var secondsBike = 0;
  var distanceBike = 0;

  distanceBike = document.getElementById("KmBikeTxt").value;

  if (distanceBike == "0") {
    sweetAlert("Fejl...", "Vær venlig at angive en distance", "error");
    return false;
  }

  hourBike = parseFloat(document.getElementById("HourBikeTxt").value);
  minutesBike = parseFloat(document.getElementById("MinutBikeTxt").value);
  secondsBike = parseFloat(document.getElementById("SecondBikeTxt").value);

  convertedToMinutesBike = hourBike * 60 + minutesBike + secondsBike / 60;

  if (convertedToMinutesBike == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid", "error");
  } else {
    var seconds = convertedToMinutesBike * 60;
    var secondsperKilometer = seconds / distanceBike;
    var time = secondsperKilometer;
    var kmperTime = distanceBike / (convertedToMinutesBike / 60);
    var decimal = (Math.round(kmperTime * 100) / 100).toFixed(2);

    document.getElementById("dvTable").style.display = "table";

    var km = new Array();
    km.push(["Distance", "Tid"]);

    for (var i = 0; i < distanceBike; i++) {
      km.push([i + 1 + " km", hhmmss(Math.round(time))]);
      time = secondsperKilometer * (i + 2);
    }

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "500px";
    table.cellSpacing = "0";

    //Get the count of columns.
    var columnCount = km[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = km[0][i];
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < km.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = km[i][j];
      }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

    var text = document.getElementById("resultText");
    text.innerHTML =
      "For at cykle <b>" +
      distanceBike +
      "</b> km på <b>" +
      hhmmss(convertedToMinutesBike * 60) +
      "</b> skal du have et tempo på <b>" +
      hhmmss(Math.round(secondsperKilometer)) +
      " per km</b> eller en hastighed på <b>" +
      decimal +
      " km/t</b><br><br>Dine split tider er som følgende:";
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
function addKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue = intValue + 25;
  document.getElementById("KmBikeTxt").value = intValue;
}

function subKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue = intValue - 25;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("KmBikeTxt").value = intValue;
}

function addHourBike() {
  var value = document.getElementById("HourBikeTxt").value;
  var intValue = parseInt(value);
  intValue++;
  document.getElementById("HourBikeTxt").value = intValue;
}
function subHourBike() {
  var value = document.getElementById("HourBikeTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("HourBikeTxt").value = intValue;
}
function addMinutBike() {
  var value = document.getElementById("MinutBikeTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("MinutBikeTxt").value = intValue;
}
function subMinutBike() {
  var value = document.getElementById("MinutBikeTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MinutBikeTxt").value = intValue;
}
function addSecondBike() {
  var value = document.getElementById("SecondBikeTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("SecondBikeTxt").value = intValue;
}
function subSecondBike() {
  var value = document.getElementById("SecondBikeTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("SecondBikeTxt").value = intValue;
}
