function convertKathaToGonda() {
    var katha = parseFloat(document.getElementById("katha").value);
    var gonda = katha * 0.8333333333333334; // Conversion formula: 1 Katha = 20 Gonda
    document.getElementById("gonda").value = gonda.toFixed(2);
  }