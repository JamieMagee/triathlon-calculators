// init function
function init() {
  document.getElementById("MaxHeartRate").value = 150;
  document.getElementById("RestingHR").value = 35;
  document.getElementById("Intensity").value = "";
  document.getElementById("WorkingHR").value = "";
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
  document.getElementById("dvTableElite").style.display = "none";
  document.getElementById("resultTextElite").style.display = "none";
}

// The big calculation function
function calculateZones() {
  var MaxHR = 0;
  var RestingHR = 0;
  var IntensityProcent = 0;

  MaxHR = document.getElementById("MaxHeartRate").value;

  if (MaxHR < 150 || MaxHR > 200) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en maksimal puls mellem 150 & 200",
      "error"
    );
    return false;
  }

  RestingHR = parseFloat(document.getElementById("RestingHR").value);

  IntensityProcent = parseFloat(document.getElementById("Intensity").value);

  if (isNaN(IntensityProcent)) {
  } else if (IntensityProcent < 0 || IntensityProcent > 100) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en intensitet mellem 0 & 100",
      "error"
    );
    return false;
  } else {
    var IntensityInProcent = IntensityProcent / 100;
    var CalcWorkingHR = Math.round(
      RestingHR + IntensityInProcent * (MaxHR - RestingHR)
    );
    document.getElementById("WorkingHR").value = CalcWorkingHR;
  }

  if (RestingHR < 35 || RestingHR > 120) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en hvilepuls mellem 35 & 120",
      "error"
    );
  } else {
    //beginners
    var maintenanceZoneLower = Math.round(
      (MaxHR - RestingHR) * 0.5 + RestingHR
    );
    var maintenanceZoneUpper = Math.round(
      (MaxHR - RestingHR) * 0.6 + RestingHR
    );
    var fitnessZoneLower = Math.round((MaxHR - RestingHR) * 0.6 + RestingHR);
    var fitnessZoneUpper = Math.round((MaxHR - RestingHR) * 0.7 + RestingHR);
    var aerobicZoneLower = Math.round((MaxHR - RestingHR) * 0.7 + RestingHR);
    var aerobicZoneUpper = Math.round((MaxHR - RestingHR) * 0.8 + RestingHR);
    var anaerobicZoneLower = Math.round((MaxHR - RestingHR) * 0.8 + RestingHR);
    var anaerobicZoneUpper = Math.round((MaxHR - RestingHR) * 0.9 + RestingHR);
    var redZoneLower = Math.round((MaxHR - RestingHR) * 0.9 + RestingHR);
    var redZoneUpper = Math.round((MaxHR - RestingHR) * 1.0 + RestingHR);

    document.getElementById("dvTable").style.display = "table";

    var TargetHrArray = new Array();
    var IntensityArray = new Array();
    var HrLowerArray = new Array();
    var HrUpperArray = new Array();

    IntensityArray.push(
      ["90% - 100%<br>(VO2 Max Zone)"],
      ["80% - 90%<br>(Anaerob Zone)"],
      ["70% - 80%<br>(Aerob Zone)"],
      ["60% - 70%<br>(Fedtforbrændings Zone)"],
      ["50% - 60%<br>(Opvarmnings Zone)"]
    );
    HrLowerArray.push(
      [redZoneLower],
      [anaerobicZoneLower],
      [aerobicZoneLower],
      [fitnessZoneLower],
      [maintenanceZoneLower]
    );
    HrUpperArray.push(
      [redZoneUpper],
      [anaerobicZoneUpper],
      [aerobicZoneUpper],
      [fitnessZoneUpper],
      [maintenanceZoneUpper]
    );

    TargetHrArray.push(["Nedre grænse", "Øvre grænse", "Intensitet i %"]);

    for (var a = 0; a < HrLowerArray.length; a++) {
      TargetHrArray.push([HrLowerArray[a], HrUpperArray[a], IntensityArray[a]]);
    }

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "500px";
    table.cellSpacing = "0";

    //Get the count of columns.
    var columnCount = TargetHrArray[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = TargetHrArray[0][i];
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < TargetHrArray.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = TargetHrArray[i][j];
      }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

    var text = document.getElementById("resultText");
    text.innerHTML = "Pulszoner for (begyndere - let øvede)";
    document.getElementById("resultText").style.display = "block";

    //elite
    var maintenanceZoneLowerElite = Math.round(
      (MaxHR - RestingHR) * 0.55 + RestingHR
    );
    var maintenanceZoneUpperElite = Math.round(
      (MaxHR - RestingHR) * 0.65 + RestingHR
    );
    var fitnessZoneLowerElite = Math.round(
      (MaxHR - RestingHR) * 0.65 + RestingHR
    );
    var fitnessZoneUpperElite = Math.round(
      (MaxHR - RestingHR) * 0.75 + RestingHR
    );
    var aerobicZoneLowerElite = Math.round(
      (MaxHR - RestingHR) * 0.75 + RestingHR
    );
    var aerobicZoneUpperElite = Math.round(
      (MaxHR - RestingHR) * 0.85 + RestingHR
    );
    var anaerobicZoneLowerElite = Math.round(
      (MaxHR - RestingHR) * 0.85 + RestingHR
    );
    var anaerobicZoneUpperElite = Math.round(
      (MaxHR - RestingHR) * 0.95 + RestingHR
    );
    var redZoneLowerElite = Math.round((MaxHR - RestingHR) * 0.95 + RestingHR);
    var redZoneUpperElite = Math.round((MaxHR - RestingHR) * 1.0 + RestingHR);

    document.getElementById("dvTableElite").style.display = "table";

    var TargetHrArrayElite = new Array();
    var IntensityArrayElite = new Array();
    var HrLowerArrayElite = new Array();
    var HrUpperArrayElite = new Array();

    IntensityArrayElite.push(
      ["95% - 100%<br>(VO2 Max Zone)"],
      ["85% - 95%<br>(Anaerob Zone)"],
      ["75% - 85%<br>(Aerob Zone)"],
      ["65% - 75%<br>(Fedtforbrændings Zone)"],
      ["55% - 65%<br>(Opvarmnings Zone)"]
    );
    HrLowerArrayElite.push(
      [redZoneLowerElite],
      [anaerobicZoneLowerElite],
      [aerobicZoneLowerElite],
      [fitnessZoneLowerElite],
      [maintenanceZoneLowerElite]
    );
    HrUpperArrayElite.push(
      [redZoneUpperElite],
      [anaerobicZoneUpperElite],
      [aerobicZoneUpperElite],
      [fitnessZoneUpperElite],
      [maintenanceZoneUpperElite]
    );

    TargetHrArrayElite.push(["Nedre grænse", "Øvre grænse", "Intensitet i %"]);

    for (var b = 0; b < HrLowerArrayElite.length; b++) {
      TargetHrArrayElite.push([
        HrLowerArrayElite[b],
        HrUpperArrayElite[b],
        IntensityArrayElite[b]
      ]);
    }

    //Create a HTML Table element.
    var tableElite = document.createElement("TABLE");
    tableElite.border = "0";
    tableElite.width = "500px";
    tableElite.cellSpacing = "0";

    //Get the count of columns.
    var columnCountElite = TargetHrArrayElite[0].length;

    //Add the header row.
    var rowElite = tableElite.insertRow(-1);
    for (var i = 0; i < columnCountElite; i++) {
      var headerCellElite = document.createElement("TH");
      headerCellElite.innerHTML = TargetHrArrayElite[0][i];
      rowElite.appendChild(headerCellElite);
    }

    //Add the data rows.
    for (var i = 1; i < TargetHrArrayElite.length; i++) {
      rowElite = tableElite.insertRow(-1);
      for (var j = 0; j < columnCountElite; j++) {
        var cellElite = rowElite.insertCell(-1);
        cellElite.innerHTML = TargetHrArrayElite[i][j];
      }
    }

    var dvtableElite = document.getElementById("dvTableElite");
    dvtableElite.innerHTML = "";
    dvtableElite.appendChild(tableElite);

    var textElite = document.getElementById("resultTextElite");
    textElite.innerHTML = "Pulszoner (øvede - elite)";
    document.getElementById("resultTextElite").style.display = "block";
  }
}

// Check for only numbers in input fields
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

// number functions
function addMaxHeartRate() {
  var value = document.getElementById("MaxHeartRate").value;
  var intValue = parseFloat(value);
  intValue++;

  if (intValue > 200) {
    intValue = 200;
  }

  document.getElementById("MaxHeartRate").value = intValue;
}

function subMaxHeartRate() {
  var value = document.getElementById("MaxHeartRate").value;
  var intValue = parseFloat(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 150) {
    intValue = 150;
  }

  document.getElementById("MaxHeartRate").value = intValue;
}

function addRestingHR() {
  var value = document.getElementById("RestingHR").value;
  var intValue = parseInt(value);
  intValue++;

  if (intValue > 120) {
    intValue = 120;
  }

  document.getElementById("RestingHR").value = intValue;
}
function subRestingHR() {
  var value = document.getElementById("RestingHR").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 35) {
    intValue = 35;
  }

  document.getElementById("RestingHR").value = intValue;
}

function addIntensity() {
  var value = document.getElementById("Intensity").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er under nul
  if (intValue > 100) {
    intValue = 100;
  }

  document.getElementById("Intensity").value = intValue;
}

function subIntensity() {
  var value = document.getElementById("Intensity").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  } else if (intValue > 100) {
    intValue = 100;
  }

  document.getElementById("Intensity").value = intValue;
}
