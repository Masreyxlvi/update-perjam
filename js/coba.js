function lm300() {
  var awal = document.getElementById("awal").value;
  var akhir = document.getElementById("akhir").value;
  var total = parseInt(akhir) - parseInt(awal);
  document.getElementById("hasil").innerHTML = total;

  var jumlahCar = parseInt(total) * 72;
  document.getElementById("jumlahCar").innerHTML = jumlahCar;

  var persen = (parseInt(jumlahCar) / 1666) * 100;
  document.getElementById("persen").innerHTML = Math.round(persen);
}

function lm600() {
  var awal = document.getElementById("awal2").value;
  var akhir = document.getElementById("akhir2").value;
  var total = parseInt(akhir) - parseInt(awal);
  document.getElementById("hasil2").innerHTML = total;

  var jumlahCar = parseInt(total) * 40;
  document.getElementById("jumlahCar2").innerHTML = jumlahCar;

  var persen = (parseInt(jumlahCar) / 1666) * 100;
  document.getElementById("persen2").innerHTML = Math.round(persen) + "%";
}
