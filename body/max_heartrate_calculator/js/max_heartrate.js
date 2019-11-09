// init function
function init() {
  document.getElementById("AgeTxt").value = 0;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateMaxHeartRate() {
  var Age = 0;

  Age = document.getElementById("AgeTxt").value;

  if (Age == "0" || Age > 99) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at indtaste en alder der er større end 0 og mindre end 100",
      "error"
    );
    return false;
  }

  var maxHeartRate = Math.round(205.8 - 0.685 * Age);
  var lowerHeartRate = Math.round(maxHeartRate - 6.4);
  var upperHeartRate = Math.round(maxHeartRate + 6.4);

  document.getElementById("dvTable").style.display = "table";

  var heartRateArray = new Array();
  heartRateArray.push(["Nedre grænse", "Maximal puls", "Øvre grænse"]);

  heartRateArray.push([lowerHeartRate, maxHeartRate, upperHeartRate]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "0";
  table.width = "500px";
  table.cellSpacing = "0";

  //Get the count of columns.
  var columnCount = heartRateArray[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = heartRateArray[0][i];
    row.appendChild(headerCell);
  }

  //Add the data rows.
  for (var i = 1; i < heartRateArray.length; i++) {
    row = table.insertRow(-1);
    for (var j = 0; j < columnCount; j++) {
      var cell = row.insertCell(-1);
      cell.innerHTML = heartRateArray[i][j];
    }
  }

  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);

  var text = document.getElementById("resultText");
  text.innerHTML =
    "Din maximale puls ligger inden for området <b>" +
    lowerHeartRate +
    "</b> til <b>" +
    upperHeartRate +
    "</b> med et bedste gæt på <b>" +
    maxHeartRate +
    "</b><br><br>Dette estimat er baseret på formel lavet af <a href='https://en.wikipedia.org/wiki/Heart_rate#Robergs_and_Landwehr' target='_blank'>Robert A. Robergs & Roberto Landwehr</a>.<br>Den skal kun bruges som guideline !";
  document.getElementById("resultText").style.display = "block";
}

// Check for only numbers in input fields
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// number functions
function addAge() {
  var value = document.getElementById("AgeTxt").value;
  var intValue = parseFloat(value);
  intValue++;
  document.getElementById("AgeTxt").value = intValue;
}

function subAge() {
  var value = document.getElementById("AgeTxt").value;
  var intValue = parseFloat(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("AgeTxt").value = intValue;
}
