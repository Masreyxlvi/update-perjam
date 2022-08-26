var awal = 0;
var akhir = 0;
var hasil = 0;
var jumlahCar = 0;
var persen = 0;
function lm330() {
  awal = document.getElementById("awal2").value;
  akhir = document.getElementById("akhir2").value;
  hasil = parseInt(akhir) - parseInt(awal);
  document.getElementById("hasil2").innerHTML = hasil;

  jumlahCar = parseInt(hasil) * 72;
  document.getElementById("jumlahCar2").innerHTML = jumlahCar;

  persen = (parseInt(jumlahCar) / 1666) * 100;
  document.getElementById("persen2").innerHTML = Math.round(persen) + "%";
}

// var update = document.getElementById("update").value
update2 = 0;
total = 0;
function Total() {
  update2 = document.getElementById("update").value;
  total = parseInt(jumlahCar) + parseInt(update2);
  document.getElementById("total").innerHTML = total;
}

function reset() {
  var akhir = document.getElementById("akhir2").value;
  var update2 = document.getElementById("total").innerHTML;
  // alert(total);
  document.getElementById("awal2").value = akhir;
  document.getElementById("akhir2").value = null;
  document.getElementById("hasil2").innerHTML = 0;
  document.getElementById("jumlahCar2").innerHTML = 0;
  document.getElementById("persen2").innerHTML = 0;
  document.getElementById("update").value = update2;
  document.getElementById("total").innerHTML = 0;
}

// awal.addEventListener("sumbit");
