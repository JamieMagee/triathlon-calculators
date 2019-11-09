// init function
function init() {
  document.getElementById("MaxHeartRate").value = 150;
  document.getElementById("RestingHR").value = 35;
  document.getElementById("dvTable").style.display = "none";
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateZones() {
  var MaxHR = 0;
  var RestingHR = 0;

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

  if (RestingHR < 35 || RestingHR > 120) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en hvilepuls mellem 35 & 120",
      "error"
    );
  } else {
    var zone0 = Math.round((MaxHR - RestingHR) * 0.65 + RestingHR);
    var zone1Lower = Math.round((MaxHR - RestingHR) * 0.65 + RestingHR);
    var zone1Upper = Math.round((MaxHR - RestingHR) * 0.75 + RestingHR);
    var zone2Lower = Math.round((MaxHR - RestingHR) * 0.75 + RestingHR);
    var zone2Upper = Math.round((MaxHR - RestingHR) * 0.85 + RestingHR);
    var zone3Lower = Math.round((MaxHR - RestingHR) * 0.85 + RestingHR);
    var zone3Upper = Math.round((MaxHR - RestingHR) * 0.95 + RestingHR);
    var zone4Lower = Math.round((MaxHR - RestingHR) * 0.95 + RestingHR);
    var zone4Upper = Math.round((MaxHR - RestingHR) * 1.0 + RestingHR);
    //var zone5Lower = Math.round(((MaxHR-RestingHR)*1.0)+RestingHR);
    //var zone5Upper = Math.round(((MaxHR-RestingHR)*1.05)+RestingHR);

    document.getElementById("dvTable").style.display = "table";

    var TargetHrArray = new Array();
    var IntensityArray = new Array();
    var HrLowerArray = new Array();
    var HrUpperArray = new Array();

    IntensityArray.push(
      [
        "<b>Zone 6 - Max / Sprint</b><ul><li>Puls uanvendelig</li><li>Det maximale tempo man overhovedet kan – All-out!</li><li>Anvendes kun i meget kort tid ad gangen (<30sek)</li></ul>"
      ],
      [
        "<b>Zone 5 - Overfart / Anaerob</b><ul><li>Puls uanvendelig</li><li>Højt tempo, som kun kan holdes få minutter (1-2 minutter)</li><li>Anvendes i korte intervaller – typisk 200-400m</li></ul>"
      ],
      [
        "<b>Zone 4 - VO2max</b><ul><li>Tempo som er hårdt og kun kan holdes i kort tid (Cirka 10 min)</li><li>Anvendes kun i interval og typisk af 5 minutters varighed eller kortere</li><li>Det laves i intervaller for at sikre at intensiteten er tilstrækkelig høj</li><li>95 - 100% af pulsreserven</li></ul>"
      ],
      [
        "<b>Zone 3 - Anaerob tærskel / FTP</b><ul><li>Tempo som føles moderat hårdt og kan holdes i ca. 1 time</li><li>Anvendes typisk til længere intervaller eller tempo pas</li><li>Det er også et udtryk for hvor stor en del af din VO2max du kan udnytte</li><li>85 - 95% af pulsreserven</li></ul"
      ],
      [
        "<b>Zone 2 - Marathon / ½ IM (sub. tærskel)</b><ul><li>Tempo som føles overskueligt med let pres</li><li>Anvendes typisk som længere tempo løb eller indlagte tempo dele i et længere pas</li><li>Det er også indenfor denne zone du finder dit maraton tempo eller ½ IM pace</li><li>75 - 85% af pulsreserven</li></ul>"
      ],
      [
        "<b>Zone 1 - Udholdenhed / let</b><ul><li>Tempo der føles let og kan opretholdes i meget lang tid.</li><li>Anvendes typisk til kortere restitutionsløb, distance træning</li><li>Et udtryk for hvor langt et arbejde du kan udfører</li><li>65 - 75% af pulsreserven</li></ul>"
      ],
      [
        "<b>Zone 0 - Restitution</b><ul><li>Tempo der er meget let – du mærker kun lige at du arbejder</li><li>At øge blodomløbet, for at øge restitutionshastigheden</li><li>Under 65 % af pulsreserven</li></ul>"
      ]
    );
    HrLowerArray.push(
      [],
      [],
      ["95 %<br>" + zone4Lower + " slag/min"],
      ["85 %<br>" + zone3Lower + " slag/min"],
      ["75 %<br>" + zone2Lower + " slag/min"],
      ["65 %<br>" + zone1Lower + " slag/min"],
      ["<br><"]
    );
    HrUpperArray.push(
      [],
      [],
      ["100 %<br>" + zone4Upper + " slag/min"],
      ["95 %<br>" + zone3Upper + " slag/min"],
      ["85 %<br>" + zone2Upper + " slag/min"],
      ["75 %<br>" + zone1Upper + " slag/min"],
      ["65 % <br>" + zone0 + " slag/min"]
    );

    TargetHrArray.push(["Nedre grænse", "Øvre grænse", "Intensitet i %"]);

    for (var a = 0; a < HrLowerArray.length; a++) {
      TargetHrArray.push([HrLowerArray[a], HrUpperArray[a], IntensityArray[a]]);
    }

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "0";
    table.width = "750px";
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
    text.innerHTML = "";
    document.getElementById("resultText").style.display = "block";
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
