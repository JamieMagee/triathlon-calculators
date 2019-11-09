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
function calculateExpectation() {
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
    var totalSeconds = convertedToMinutesBike * 60;

    var distArray = new Array();
    var estArray = new Array();
    var timeArray = new Array();

    distArray.push(
      1,
      2,
      3,
      5,
      10,
      20,
      30,
      40,
      50,
      60,
      75,
      80,
      90,
      100,
      120,
      150,
      160,
      180,
      200,
      300,
      320
    );
    estArray.push(["Distance", "Estimeret tid"]);

    for (var a = 0; a < distArray.length; a++) {
      var test = distArray[a] / distanceBike;
      var power = Math.pow(test, 1.06);
      var estTime = totalSeconds * power;
      timeArray.push([hhmmss(Math.round(estTime))]);
    }

    for (var b = 0; b < distArray.length; b++) {
      estArray.push([distArray[b] + " km", timeArray[b]]);
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
      hhmmss(convertedToMinutesBike * 60) +
      "</b> for <b>" +
      distanceBike +
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
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// number functions
function addKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue++;
  document.getElementById("KmBikeTxt").value = intValue;
}

function subKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue--;

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
