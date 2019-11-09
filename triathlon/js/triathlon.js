// Java Document

function init() {
  //svoemning
  document.getElementById("MeterSvimTxt").value = 0;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 0;
  document.getElementById("SecondSvimTxt").value = 0;
  document.getElementById("LapMinSvimTxt").value = 0;
  document.getElementById("LapSecSvimTxt").value = 0;
  document.getElementById("SpeedSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 0;
  document.getElementById("HourBikeTxt").value = 0;
  document.getElementById("MinutBikeTxt").value = 0;
  document.getElementById("SecondBikeTxt").value = 0;
  document.getElementById("LapMinBikeTxt").value = 0;
  document.getElementById("LapSecBikeTxt").value = 0;
  document.getElementById("SpeedBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 0;
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 0;
  document.getElementById("SecondRunTxt").value = 0;
  document.getElementById("LapMinRunTxt").value = 0;
  document.getElementById("LapSecRunTxt").value = 0;
  document.getElementById("SpeedRunTxt").value = 0;

  //Total
  document.getElementById("TotalHourTxt").value = 0;
  document.getElementById("TotalMinutTxt").value = 0;
  document.getElementById("TotalSecondTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 0;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 0;
  document.getElementById("SecondT2Txt").value = 0;

  //Clear click
  clickedIM = false;
  clicked1_10 = false;
  clickedSprint = false;
  clickedOL = false;
  clicked1_4 = false;
  clicked1_2 = false;

  //clear images
  document["Image1_10"].src = "images/1_10.png";
  document["ImageSprint"].src = "images/sprint.png";
  document["ImageOL"].src = "images/olympisk.png";
  document["Image1_4"].src = "images/1_4.png";
  document["Image1_2"].src = "images/1_2.png";
  document["ImageIM"].src = "images/ironman.png";
}

function distanceOneTenIronman() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 400;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 10;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 18;
  document.getElementById("HourBikeTxt").value = 0;
  document.getElementById("MinutBikeTxt").value = 40;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 4.2;
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 19;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

function distanceSprint() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 750;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 20;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 20;
  document.getElementById("HourBikeTxt").value = 0;
  document.getElementById("MinutBikeTxt").value = 45;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 5;
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 25;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

function distanceOlympisk() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 1500;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 35;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 40;
  document.getElementById("HourBikeTxt").value = 1;
  document.getElementById("MinutBikeTxt").value = 25;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 10;
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 50;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

function distanceOneQuaterIronman() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 950;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 22;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 45;
  document.getElementById("HourBikeTxt").value = 1;
  document.getElementById("MinutBikeTxt").value = 45;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 10.5;
  document.getElementById("HourRunTxt").value = 0;
  document.getElementById("MinutRunTxt").value = 50;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

function distanceHalfIronman() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 1900;
  document.getElementById("HourSvimTxt").value = 0;
  document.getElementById("MinutSvimTxt").value = 45;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 90;
  document.getElementById("HourBikeTxt").value = 3;
  document.getElementById("MinutBikeTxt").value = 30;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 21.1;
  document.getElementById("HourRunTxt").value = 2;
  document.getElementById("MinutRunTxt").value = 0;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

function distanceIronman() {
  init();
  //svoemning
  document.getElementById("MeterSvimTxt").value = 3800;
  document.getElementById("HourSvimTxt").value = 1;
  document.getElementById("MinutSvimTxt").value = 30;
  document.getElementById("SecondSvimTxt").value = 0;

  //cykling
  document.getElementById("KmBikeTxt").value = 180;
  document.getElementById("HourBikeTxt").value = 7;
  document.getElementById("MinutBikeTxt").value = 0;
  document.getElementById("SecondBikeTxt").value = 0;

  //loeb
  document.getElementById("KmRunTxt").value = 42.195;
  document.getElementById("HourRunTxt").value = 4;
  document.getElementById("MinutRunTxt").value = 0;
  document.getElementById("SecondRunTxt").value = 0;

  //T1
  document.getElementById("MinutT1Txt").value = 6;
  document.getElementById("SecondT1Txt").value = 0;

  //T2
  document.getElementById("MinutT2Txt").value = 4;
  document.getElementById("SecondT2Txt").value = 0;

  calculate();
}

//svoemning
var hourSwim = 0;
var minutesSwim = 0;
var secondsSwim = 0;
var distanceSvim = 0;
var lapMinSwim = 0;
var lapSecSwim = 0;
var speedSwim = 0;
var totalTimeSwim = 0;
var convertedToMinutesSwim = 0;

//cykling
var hourBike = 0;
var minutesBike = 0;
var secondsBike = 0;
var distanceBike = 0;
var lapMinBike = 0;
var lapSecBike = 0;
var speedBike = 0;
var totalTimeBike = 0;
var convertedToMinutesBike = 0;

//loeb
var hourRun = 0;
var minutesRun = 0;
var secondsRun = 0;
var distanceRun = 0;
var lapMinRun = 0;
var lapSecRun = 0;
var speedRun = 0;
var totalTimeRun = 0;
var convertedToMinutesRun = 0;

function calculate() {
  //T1
  var convertedToMinutsT1 =
    parseFloat(document.getElementById("MinutT1Txt").value) +
    parseFloat(document.getElementById("SecondT1Txt").value / 60);

  if (convertedToMinutsT1 == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid for T1", "error");
    return false;
  }

  //T2
  var convertedToMinutsT2 =
    parseFloat(document.getElementById("MinutT2Txt").value) +
    parseFloat(document.getElementById("SecondT2Txt").value / 60);

  if (convertedToMinutsT2 == 0) {
    sweetAlert("Fejl...", "Vær venlig at angive en tid for T2", "error");
    return false;
  }

  //svoemning
  var hourSwim = 0;
  var minutesSwim = 0;
  var secondsSwim = 0;
  var distanceSvim = 0;
  var lapMinSwim = 0;
  var lapSecSwim = 0;
  var speedSwim = 0;

  distanceSvim = parseFloat(document.getElementById("MeterSvimTxt").value);
  hourSwim = parseFloat(document.getElementById("HourSvimTxt").value);
  minutesSwim = parseFloat(document.getElementById("MinutSvimTxt").value);
  secondsSwim = parseFloat(document.getElementById("SecondSvimTxt").value);
  lapMinSwim = parseFloat(document.getElementById("LapMinSvimTxt").value);
  lapSecSwim = parseFloat(document.getElementById("LapSecSvimTxt").value);
  speedSwim = parseFloat(document.getElementById("SpeedSvimTxt").value);

  if (distanceSvim == "0" || isNaN(distanceSvim)) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en distance for svømning",
      "error"
    );
    return false;
  }

  convertedToMinutesSwim = hourSwim * 60 + minutesSwim + secondsSwim / 60;

  if (
    convertedToMinutesSwim == 0 &&
    speedSwim == 0 &&
    (lapMinSwim != 0 || lapSecSwim != 0)
  ) {
    totalTimeSwim = (distanceSvim / 100) * (lapMinSwim + lapSecSwim / 60) * 60;
    hourSwim = Math.floor(totalTimeSwim / 3600);
    minutesSwim = Math.floor((totalTimeSwim % 3600) / 60);
    secondsSwim = Math.floor(totalTimeSwim % 60);

    document.getElementById("HourSvimTxt").value = hourSwim;
    document.getElementById("MinutSvimTxt").value = minutesSwim;
    if (document.getElementById("MinutSvimTxt").value < 10) {
      document.getElementById("MinutSvimTxt").value =
        "0" + document.getElementById("MinutSvimTxt").value;
    }
    document.getElementById("SecondSvimTxt").value = secondsSwim;
    if (document.getElementById("SecondSvimTxt").value < 10) {
      document.getElementById("SecondSvimTxt").value =
        "0" + document.getElementById("SecondSvimTxt").value;
    }

    kmPerHourSvim =
      Math.floor(
        (distanceSvim /
          1000 /
          (hourSwim + minutesSwim / 60 + secondsSwim / 60 / 60)) *
          100
      ) / 100;
    document.getElementById("SpeedSvimTxt").value = "" + kmPerHourSvim;
  } else if (
    lapMinSwim == 0 &&
    lapSecSwim == 0 &&
    speedSwim == 0 &&
    convertedToMinutesSwim != 0
  ) {
    minPerKmSvim = convertedToMinutesSwim / (distanceSvim / 1000) / 10; //divideret med 10 for at fÃ min/100m ;
    document.getElementById("LapMinSvimTxt").value =
      "" + Math.floor(minPerKmSvim);
    document.getElementById("LapSecSvimTxt").value =
      "" + Math.round((minPerKmSvim - Math.floor(minPerKmSvim)) * 60);

    if (document.getElementById("LapSecSvimTxt").value < 10) {
      document.getElementById("LapSecSvimTxt").value =
        "0" + document.getElementById("LapSecSvimTxt").value;
    }

    kmPerHourSvim =
      Math.floor(
        (distanceSvim /
          1000 /
          (hourSwim + minutesSwim / 60 + secondsSwim / 60 / 60)) *
          100
      ) / 100;
    document.getElementById("SpeedSvimTxt").value = "" + kmPerHourSvim;
  } else if (
    lapMinSwim == 0 &&
    lapSecSwim == 0 &&
    convertedToMinutesSwim == 0 &&
    speedSwim != 0
  ) {
    kmSvim = distanceSvim / 1000;
    totalTimeSwim = (Math.round((kmSvim / speedSwim) * 100) / 100) * 3600;

    hourSwim = Math.floor(totalTimeSwim / 3600);
    minutesSwim = Math.floor((totalTimeSwim % 3600) / 60);
    secondsSwim = Math.floor(totalTimeSwim % 60);

    document.getElementById("HourSvimTxt").value = hourSwim;
    document.getElementById("MinutSvimTxt").value = minutesSwim;
    if (document.getElementById("MinutSvimTxt").value < 10) {
      document.getElementById("MinutSvimTxt").value =
        "0" + document.getElementById("MinutSvimTxt").value;
    }
    document.getElementById("SecondSvimTxt").value = secondsSwim;
    if (document.getElementById("SecondSvimTxt").value < 10) {
      document.getElementById("SecondSvimTxt").value =
        "0" + document.getElementById("SecondSvimTxt").value;
    }

    minPerKmSvim = totalTimeSwim / 60 / (distanceSvim / 1000) / 10; //divideret med 10 for at fÃ min/100m ;
    document.getElementById("LapMinSvimTxt").value =
      "" + Math.round(minPerKmSvim);
    document.getElementById("LapSecSvimTxt").value =
      "" + Math.round((minPerKmSvim - Math.round(minPerKmSvim)) * 60);

    if (document.getElementById("LapSecSvimTxt").value < 10) {
      document.getElementById("LapSecSvimTxt").value =
        "0" + document.getElementById("LapSecSvimTxt").value;
    }
  } else if (
    lapMinSwim == 0 &&
    lapSecSwim == 0 &&
    convertedToMinutesSwim == 0 &&
    speedSwim == 0
  ) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive enten en tid, mellemtid eller hastighed for svømning",
      "error"
    );
    return false;
  }

  /********************************************************************************************************************/

  //cykling
  var hourBike = 0;
  var minutesBike = 0;
  var secondBike = 0;
  var distanceBike = 0;
  var lapMinBike = 0;
  var lapSecBike = 0;
  var speedBike = 0;

  distanceBike = parseFloat(document.getElementById("KmBikeTxt").value);
  hourBike = parseFloat(document.getElementById("HourBikeTxt").value);
  minutesBike = parseFloat(document.getElementById("MinutBikeTxt").value);
  secondBike = parseFloat(document.getElementById("SecondBikeTxt").value);
  lapMinBike = parseFloat(document.getElementById("LapMinBikeTxt").value);
  lapSecBike = parseFloat(document.getElementById("LapSecBikeTxt").value);
  speedBike = parseFloat(document.getElementById("SpeedBikeTxt").value);

  if (distanceBike == "0" || isNaN(distanceBike)) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive en distance for cykling",
      "error"
    );
    return false;
  }

  convertedToMinutesBike = hourBike * 60 + minutesBike + secondBike / 60;

  if (
    convertedToMinutesBike == 0 &&
    speedBike == 0 &&
    (lapMinBike != 0 || lapSecBike != 0)
  ) {
    totalTimeBike = distanceBike * (lapMinBike + lapSecBike / 60) * 60;
    hourBike = Math.floor(totalTimeBike / 3600);
    minutesBike = Math.floor((totalTimeBike % 3600) / 60);
    secondBike = Math.floor(totalTimeBike % 60);

    document.getElementById("HourBikeTxt").value = hourBike;
    document.getElementById("MinutBikeTxt").value = minutesBike;
    if (document.getElementById("MinutBikeTxt").value < 10) {
      document.getElementById("MinutBikeTxt").value =
        "0" + document.getElementById("MinutBikeTxt").value;
    }
    document.getElementById("SecondBikeTxt").value = secondBike;
    if (document.getElementById("SecondBikeTxt").value < 10) {
      document.getElementById("SecondBikeTxt").value =
        "0" + document.getElementById("SecondBikeTxt").value;
    }

    kmPerHourBike =
      Math.floor(
        (distanceBike / (hourBike + minutesBike / 60 + secondBike / 60 / 60)) *
          100
      ) / 100;
    document.getElementById("SpeedBikeTxt").value = "" + kmPerHourBike;
  } else if (
    lapMinBike == 0 &&
    lapSecBike == 0 &&
    speedBike == 0 &&
    convertedToMinutesBike != 0
  ) {
    minPerKmBike = convertedToMinutesBike / distanceBike;
    document.getElementById("LapMinBikeTxt").value =
      "" + Math.floor(minPerKmBike);
    document.getElementById("LapSecBikeTxt").value =
      "" + Math.round((minPerKmBike - Math.floor(minPerKmBike)) * 60);

    if (document.getElementById("LapSecBikeTxt").value < 10) {
      document.getElementById("LapSecBikeTxt").value =
        "0" + document.getElementById("LapSecBikeTxt").value;
    }

    kmPerHourBike =
      Math.floor(
        (distanceBike / (hourBike + minutesBike / 60 + secondBike / 60 / 60)) *
          100
      ) / 100;
    document.getElementById("SpeedBikeTxt").value = "" + kmPerHourBike;
  } else if (
    lapMinBike == 0 &&
    lapSecBike == 0 &&
    convertedToMinutesBike == 0 &&
    speedBike != 0
  ) {
    kmBike = distanceBike;
    totalTimeBike = (Math.round((kmBike / speedBike) * 100) / 100) * 3600;

    hourBike = Math.floor(totalTimeBike / 3600);
    minutesBike = Math.floor((totalTimeBike % 3600) / 60);
    secondBike = Math.floor(totalTimeBike % 60);

    document.getElementById("HourBikeTxt").value = hourBike;
    document.getElementById("MinutBikeTxt").value = minutesBike;
    if (document.getElementById("MinutBikeTxt").value < 10) {
      document.getElementById("MinutBikeTxt").value =
        "0" + document.getElementById("MinutBikeTxt").value;
    }
    document.getElementById("SecondBikeTxt").value = secondBike;
    if (document.getElementById("SecondBikeTxt").value < 10) {
      document.getElementById("SecondBikeTxt").value =
        "0" + document.getElementById("SecondBikeTxt").value;
    }

    minPerKmBike = totalTimeBike / 60 / distanceBike;
    document.getElementById("LapMinBikeTxt").value =
      "" + Math.round(minPerKmBike);
    document.getElementById("LapSecBikeTxt").value =
      "" + Math.round((minPerKmBike - Math.round(minPerKmBike)) * 60);

    if (document.getElementById("LapSecBikeTxt").value < 10) {
      document.getElementById("LapSecBikeTxt").value =
        "0" + document.getElementById("LapSecBikeTxt").value;
    }
  } else if (
    lapMinBike == 0 &&
    lapSecBike == 0 &&
    convertedToMinutesBike == 0 &&
    speedBike == 0
  ) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive enten en tid, mellemtid eller hastighed for cykling",
      "error"
    );
    return false;
  }

  /********************************************************************************************************************/

  //loeb
  var hourRun = 0;
  var minutesRun = 0;
  var secondsRun = 0;
  var distanceRun = 0;
  var lapMinRun = 0;
  var lapSecRun = 0;
  var speedRun = 0;

  distanceRun = parseFloat(document.getElementById("KmRunTxt").value);
  hourRun = parseFloat(document.getElementById("HourRunTxt").value);
  minutesRun = parseFloat(document.getElementById("MinutRunTxt").value);
  secondsRun = parseFloat(document.getElementById("SecondRunTxt").value);
  lapMinRun = parseFloat(document.getElementById("LapMinRunTxt").value);
  lapSecRun = parseFloat(document.getElementById("LapSecRunTxt").value);
  speedRun = parseFloat(document.getElementById("SpeedRunTxt").value);

  if (distanceRun == "0" || isNaN(distanceRun)) {
    sweetAlert("Fejl...", "Vær venlig at angive en distance for løb", "error");
    return false;
  }

  convertedToMinutesRun = hourRun * 60 + minutesRun + secondsRun / 60;

  if (
    convertedToMinutesRun == 0 &&
    speedRun == 0 &&
    (lapMinRun != 0 || lapSecRun != 0)
  ) {
    alert(distanceRun);
    totalTimeRun = distanceRun * (lapMinRun + lapSecRun / 60) * 60;
    alert(totalTimeRun);
    hourRun = Math.floor(totalTimeRun / 3600);
    alert(hourRun);
    minutesRun = Math.floor((totalTimeRun % 3600) / 60);
    alert(minutesRun);
    secondsRun = Math.floor(totalTimeRun % 60);
    alert(secondsRun);

    document.getElementById("HourRunTxt").value = hourRun;
    document.getElementById("MinutRunTxt").value = minutesRun;
    if (document.getElementById("MinutRunTxt").value < 10) {
      document.getElementById("MinutRunTxt").value =
        "0" + document.getElementById("MinutRunTxt").value;
    }
    document.getElementById("SecondRunTxt").value = secondsRun;
    if (document.getElementById("SecondRunTxt").value < 10) {
      document.getElementById("SecondRunTxt").value =
        "0" + document.getElementById("SecondRunTxt").value;
    }

    kmPerHourRun =
      Math.floor(
        (distanceRun / (hourRun + minutesRun / 60 + secondsRun / 60 / 60)) * 100
      ) / 100;
    document.getElementById("SpeedRunTxt").value = "" + kmPerHourRun;
  } else if (
    lapMinRun == 0 &&
    lapSecRun == 0 &&
    speedRun == 0 &&
    convertedToMinutesRun != 0
  ) {
    minPerKmRun = convertedToMinutesRun / distanceRun;
    document.getElementById("LapMinRunTxt").value =
      "" + Math.floor(minPerKmRun);
    document.getElementById("LapSecRunTxt").value =
      "" + Math.round((minPerKmRun - Math.floor(minPerKmRun)) * 60);

    if (document.getElementById("LapSecRunTxt").value < 10) {
      document.getElementById("LapSecRunTxt").value =
        "0" + document.getElementById("LapSecRunTxt").value;
    }

    kmPerHourRun =
      Math.floor(
        (distanceRun / (hourRun + minutesRun / 60 + secondsRun / 60 / 60)) * 100
      ) / 100;
    document.getElementById("SpeedRunTxt").value = "" + kmPerHourRun;
  } else if (
    lapMinRun == 0 &&
    lapSecRun == 0 &&
    convertedToMinutesRun == 0 &&
    speedRun != 0
  ) {
    totalTimeRun = (Math.round((distanceRun / speedRun) * 100) / 100) * 3600;

    hourRun = Math.floor(totalTimeRun / 3600);
    minutesRun = Math.floor((totalTimeRun % 3600) / 60);
    secondsRun = Math.floor(totalTimeRun % 60);

    document.getElementById("HourRunTxt").value = hourRun;
    document.getElementById("MinutRunTxt").value = minutesRun;
    if (document.getElementById("MinutRunTxt").value < 10) {
      document.getElementById("MinutRunTxt").value =
        "0" + document.getElementById("MinutRunTxt").value;
    }
    document.getElementById("SecondRunTxt").value = secondsRun;
    if (document.getElementById("SecondRunTxt").value < 10) {
      document.getElementById("SecondRunTxt").value =
        "0" + document.getElementById("SecondRunTxt").value;
    }

    minPerKmRun = totalTimeRun / 60 / distanceRun;
    document.getElementById("LapMinRunTxt").value =
      "" + Math.floor(minPerKmRun);
    document.getElementById("LapSecRunTxt").value =
      "" + Math.round((minPerKmRun - Math.floor(minPerKmRun)) * 60);

    if (document.getElementById("LapSecRunTxt").value < 10) {
      document.getElementById("LapSecRunTxt").value =
        "0" + document.getElementById("LapSecRunTxt").value;
    }
  } else if (
    lapMinRun == 0 &&
    lapSecRun == 0 &&
    convertedToMinutesRun == 0 &&
    speedRun == 0
  ) {
    sweetAlert(
      "Fejl...",
      "Vær venlig at angive enten en tid, mellemtid eller hastighed for cykling",
      "error"
    );
    return false;
  }

  /**********************************************************************************************/

  //totaltime
  var hourtotaltime = 0;
  var minutstotaltime = 0;
  var secondstotaltime = 0;
  var totaltime = 0;

  hourtotaltime =
    (convertedToMinutesSwim +
      convertedToMinutesBike +
      convertedToMinutesRun +
      convertedToMinutsT1 +
      convertedToMinutsT2) /
    60;
  minutstotaltime =
    convertedToMinutesSwim +
    convertedToMinutesBike +
    convertedToMinutesRun +
    convertedToMinutsT1 +
    convertedToMinutsT2;
  //alert("tid"+minutstotaltime);
  //totaltime = convertedToMinutesSwim + convertedToMinutesBike + convertedToMinutesRun
  document.getElementById("TotalHourTxt").value =
    "" + Math.floor(hourtotaltime);
  document.getElementById("TotalMinutTxt").value =
    "" + Math.round((hourtotaltime - Math.floor(hourtotaltime)) * 60);
  document.getElementById("TotalSecondTxt").value =
    "" + Math.round((minutstotaltime - Math.floor(minutstotaltime)) * 60);

  if (document.getElementById("TotalMinutTxt").value < 10) {
    document.getElementById("TotalMinutTxt").value =
      "0" + document.getElementById("TotalMinutTxt").value;
  }
  if (document.getElementById("TotalSecondTxt").value < 10) {
    document.getElementById("TotalSecondTxt").value =
      "0" + document.getElementById("TotalSecondTxt").value;
  }
}

/****************************************************************************************************/

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
function ChangeImage(image) {
  switch (image) {
    case Image1_10:
      clicked1_10 = true;
      clickedSprint = false;
      clickedOL = false;
      clicked1_4 = false;
      clicked1_2 = false;
      clickedIM = false;
      document["ImageSprint"].src = "images/sprint.png";
      document["ImageOL"].src = "images/olympisk.png";
      document["Image1_4"].src = "images/1_4.png";
      document["Image1_2"].src = "images/1_2.png";
      document["ImageIM"].src = "images/ironman.png";
      distanceOneTenIronman();
      break;
    case ImageSprint:
      clicked1_10 = false;
      clickedSprint = true;
      clickedOL = false;
      clicked1_4 = false;
      clicked1_2 = false;
      clickedIM = false;
      document["Image1_10"].src = "images/1_10.png";
      document["ImageOL"].src = "images/olympisk.png";
      document["Image1_4"].src = "images/1_4.png";
      document["Image1_2"].src = "images/1_2.png";
      document["ImageIM"].src = "images/ironman.png";
      distanceSprint();
      break;
    case ImageOL:
      clicked1_10 = false;
      clickedSprint = false;
      clickedOL = true;
      clicked1_4 = false;
      clicked1_2 = false;
      clickedIM = false;
      document["Image1_10"].src = "images/1_10.png";
      document["ImageSprint"].src = "images/sprint.png";
      document["Image1_4"].src = "images/1_4.png";
      document["Image1_2"].src = "images/1_2.png";
      document["ImageIM"].src = "images/ironman.png";
      distanceOlympisk();
      break;
    case Image1_4:
      clicked1_10 = false;
      clickedSprint = false;
      clickedOL = false;
      clicked1_4 = true;
      clicked1_2 = false;
      clickedIM = false;
      document["Image1_10"].src = "images/1_10.png";
      document["ImageSprint"].src = "images/sprint.png";
      document["ImageOL"].src = "images/olympisk.png";
      document["Image1_2"].src = "images/1_2.png";
      document["ImageIM"].src = "images/ironman.png";
      distanceOneQuaterIronman();
      break;
    case Image1_2:
      clicked1_10 = false;
      clickedSprint = false;
      clickedOL = false;
      clicked1_4 = false;
      clicked1_2 = true;
      clickedIM = false;
      document["Image1_10"].src = "images/1_10.png";
      document["ImageSprint"].src = "images/sprint.png";
      document["ImageOL"].src = "images/olympisk.png";
      document["Image1_4"].src = "images/1_4.png";
      document["ImageIM"].src = "images/ironman.png";
      distanceHalfIronman();
      break;
    case ImageIM:
      clicked1_10 = false;
      clickedSprint = false;
      clickedOL = false;
      clicked1_4 = false;
      clicked1_2 = false;
      clickedIM = true;
      document["Image1_10"].src = "images/1_10.png";
      document["ImageSprint"].src = "images/sprint.png";
      document["ImageOL"].src = "images/olympisk.png";
      document["Image1_4"].src = "images/1_4.png";
      document["Image1_2"].src = "images/1_2.png";
      distanceIronman();
      break;
  }
}

var clicked1_10 = false;
var clickedSprint = false;
var clickedOL = false;
var clicked1_4 = false;
var clicked1_2 = false;
var clickedIM = false;

function onHover(image) {
  switch (image) {
    case Image1_10:
      if (!clicked1_10) {
        document["Image1_10"].src = "images/1_10green.png";
        break;
      }
    case ImageSprint:
      if (!clickedSprint) {
        document["ImageSprint"].src = "images/sprintgreen.png";
        break;
      }
    case ImageOL:
      if (!clickedOL) {
        document["ImageOL"].src = "images/olympiskgreen.png";
        break;
      }
    case Image1_4:
      if (!clicked1_4) {
        document["Image1_4"].src = "images/1_4green.png";
        break;
      }
    case Image1_2:
      if (!clicked1_2) {
        document["Image1_2"].src = "images/1_2green.png";
        break;
      }
    case ImageIM:
      if (!clickedIM) {
        document["ImageIM"].src = "images/ironmangreen.png";
        break;
      }
  }
}

function offHover(image) {
  switch (image) {
    case Image1_10:
      if (!clicked1_10) {
        document["Image1_10"].src = "images/1_10.png";
        break;
      }
      break;
    case ImageSprint:
      if (!clickedSprint) {
        document["ImageSprint"].src = "images/sprint.png";
        break;
      }
      break;
    case ImageOL:
      if (!clickedOL) {
        document["ImageOL"].src = "images/olympisk.png";
        break;
      }
      break;
    case Image1_4:
      if (!clicked1_4) {
        document["Image1_4"].src = "images/1_4.png";
        break;
      }
      break;
    case Image1_2:
      if (!clicked1_2) {
        document["Image1_2"].src = "images/1_2.png";
        break;
      }
      break;
    case ImageIM:
      if (!clickedIM) {
        document["ImageIM"].src = "images/ironman.png";
        break;
      }
      break;
  }
}

// Check for only numbers in input fields
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;

  if (charCode == 46 || (charCode < 31 || (charCode < 58 && charCode > 47))) {
    return true;
  } else {
    return false;
  }
}

function isNumberKeySwim(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;

  if (charCode < 31 || (charCode < 58 && charCode > 47)) {
    return true;
  } else {
    return false;
  }
}

/****************************************************************************************************/

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

function addKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue = Math.round((intValue + 0.1) * 100) / 100;
  document.getElementById("KmBikeTxt").value = intValue;
}
function subKmBike() {
  var value = document.getElementById("KmBikeTxt").value;
  var intValue = parseFloat(value);
  intValue = Math.round((intValue - 0.1) * 100) / 100;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("KmBikeTxt").value = intValue;
}
function addKmRun() {
  var value = document.getElementById("KmRunTxt").value;
  var intValue = parseFloat(value);
  intValue = Math.round((intValue + 0.1) * 100) / 100;
  document.getElementById("KmRunTxt").value = intValue;
}
function subKmRun() {
  var value = document.getElementById("KmRunTxt").value;
  var intValue = parseFloat(value);
  intValue = Math.round((intValue - 0.1) * 100) / 100;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("KmRunTxt").value = intValue;
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

//T1
function addMinutT1() {
  var value = document.getElementById("MinutT1Txt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("MinutT1Txt").value = intValue;
}
function subMinutT1() {
  var value = document.getElementById("MinutT1Txt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MinutT1Txt").value = intValue;
}
function addSecondT1() {
  var value = document.getElementById("SecondT1Txt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }
  document.getElementById("SecondT1Txt").value = intValue;
}
function subSecondT1() {
  var value = document.getElementById("SecondT1Txt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("SecondT1Txt").value = intValue;
}

//T2
function addMinutT2() {
  var value = document.getElementById("MinutT2Txt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }

  document.getElementById("MinutT2Txt").value = intValue;
}
function subMinutT2() {
  var value = document.getElementById("MinutT2Txt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("MinutT2Txt").value = intValue;
}
function addSecondT2() {
  var value = document.getElementById("SecondT2Txt").value;
  var intValue = parseInt(value);
  intValue++;

  //tjek om vaerdien er over 59
  if (intValue > 59) {
    intValue = 0;
  }
  document.getElementById("SecondT2Txt").value = intValue;
}
function subSecondT2() {
  var value = document.getElementById("SecondT2Txt").value;
  var intValue = parseInt(value);
  intValue--;

  //tjek om vaerdien er under nul
  if (intValue < 0) {
    intValue = 0;
  }

  document.getElementById("SecondT2Txt").value = intValue;
}
