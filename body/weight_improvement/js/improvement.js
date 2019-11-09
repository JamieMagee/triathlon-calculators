// init function
function init() {
  "use strict";
  document.getElementById("WeightToday").value = 0;
  document.getElementById("FutureWeight").value = 0;
  document.getElementById("Distance").value = 0;
  document.getElementById("MyHourTxt").value = 0;
  document.getElementById("MyMinuteTxt").value = 0;
  document.getElementById("MySecondTxt").value = 0;
  document.getElementById("resultText").style.display = "none";
}

// The big calculation function
function calculateImprovement() {
  "use strict";
  var WeightToday = 0;
  var FutureWeight = 0;
  var Distance = 0;
  var MyHourTxt = 0;
  var MyMinuteTxt = 0;
  var MySecondTxt = 0;
  var improvementtime = 0;
  var selecteditem = document.getElementById("trainingform").selectedIndex;

  WeightToday = document.getElementById("WeightToday").value;
  FutureWeight = document.getElementById("FutureWeight").value;
  Distance = document.getElementById("Distance").value;
  MyHourTxt = document.getElementById("MyHourTxt").value;
  MyMinuteTxt = document.getElementById("MyMinuteTxt").value;
  MySecondTxt = document.getElementById("MySecondTxt").value;

  switch (selecteditem) {
    case 0:
      var totaldistancerun = (Distance / 1000) * 2.5;
      var weightdifference = WeightToday - FutureWeight;
      improvementtime = totaldistancerun * weightdifference;

      break;
    case 1:
      var totaldistanceswim = (Distance / 100) * 0.5;
      weightdifference = WeightToday - FutureWeight;
      improvementtime = totaldistanceswim * weightdifference;

      break;
    case 2:
      var totaldistancebikeflat = (Distance / 1000) * 0.15;
      weightdifference = WeightToday - FutureWeight;
      improvementtime = totaldistancebikeflat * weightdifference;

      break;
    case 3:
      var totaldistancebikehill = (Distance / 1000) * 1.4;
      weightdifference = WeightToday - FutureWeight;
      improvementtime = totaldistancebikehill * weightdifference;

      break;
  }

  alert(selecteditem);

  var MyStartTime =
    parseInt(MyHourTxt * 3600) +
    parseInt(MyMinuteTxt * 60) +
    parseInt(MySecondTxt);
  var myImprovementTimeInSeconds = MyStartTime - improvementtime;

  var hrs = parseInt(myImprovementTimeInSeconds / 3600);
  var mins = parseInt((myImprovementTimeInSeconds - hrs * 3600) / 60);
  var secs = Math.floor(myImprovementTimeInSeconds - (hrs * 3600 + mins * 60));
  var improvetimestring =
    (hrs < 10 ? "0" + hrs : hrs) +
    ":" +
    (mins < 10 ? "0" + mins : mins) +
    ":" +
    (secs < 10 ? "0" + secs : secs);

  var hours = parseInt(improvementtime / 3600);
  var minutes = parseInt((improvementtime - hours * 3600) / 60);
  var seconds = Math.floor(improvementtime - (hours * 3600 + minutes * 60));
  var improvementstring =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  var text = document.getElementById("resultText");
  text.innerHTML =
    "Med en vægt på " +
    "<b>" +
    FutureWeight +
    " kg </b>" +
    "bliver din nye tid " +
    "<b>" +
    improvetimestring +
    "</b>" +
    ". Altså " +
    "<b>" +
    improvementstring +
    "</b>" +
    " hurtigere end i dag.";
  document.getElementById("resultText").style.display = "block";
}

// Check for only numbers in input fields
function isNumberKey(evt) {
  "use strict";
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

// number functions
function addWeightToday() {
  "use strict";
  var value = document.getElementById("WeightToday").value;
  var intValue = parseFloat(value);
  intValue++;

  if (intValue > 300) {
    intValue = 300;
  }

  document.getElementById("WeightToday").value = intValue;
}

function subWeightToday() {
  "use strict";
  var value = document.getElementById("WeightToday").value;
  var intValue = parseFloat(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("WeightToday").value = intValue;
}

function addFutureWeight() {
  "use strict";
  var value = document.getElementById("FutureWeight").value;
  var intValue = parseInt(value);
  intValue++;

  if (intValue > 300) {
    intValue = 300;
  }

  document.getElementById("FutureWeight").value = intValue;
}

function subFutureWeight() {
  "use strict";
  var value = document.getElementById("FutureWeight").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("FutureWeight").value = intValue;
}

function addDistance() {
  "use strict";
  var value = document.getElementById("Distance").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er under nul
  if (intValue > 999999) {
    intValue = 999999;
  }

  document.getElementById("Distance").value = intValue;
}

function subDistance() {
  "use strict";
  var value = document.getElementById("Distance").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("Distance").value = intValue;
}

function addHour() {
  "use strict";
  var value = document.getElementById("MyHourTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er under nul
  if (intValue > 23) {
    intValue = 23;
  }

  document.getElementById("MyHourTxt").value = intValue;
}

function subHour() {
  "use strict";
  var value = document.getElementById("MyHourTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MyHourTxt").value = intValue;
}

function addMinut() {
  "use strict";
  var value = document.getElementById("MyMinuteTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er under nul
  if (intValue > 59) {
    intValue = 59;
  }

  document.getElementById("MyMinuteTxt").value = intValue;
}

function subMinut() {
  "use strict";
  var value = document.getElementById("MyMinuteTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MyMinuteTxt").value = intValue;
}

function addSecond() {
  "use strict";
  var value = document.getElementById("MySecondTxt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er under nul
  if (intValue > 59) {
    intValue = 59;
  }

  document.getElementById("MySecondTxt").value = intValue;
}

function subSecond() {
  "use strict";
  var value = document.getElementById("MySecondTxt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MySecondTxt").value = intValue;
}
