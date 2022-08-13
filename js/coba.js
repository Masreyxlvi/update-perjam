function updatan() {
  var awal = document.getElementById("awal").value;
  var akhir = document.getElementById("akhir").value;
  var total = parseInt(akhir) - parseInt(awal);
  document.getElementById("hasil").innerHTML = total;

  var jumlahCar = parseInt(total) * 40;
  document.getElementById("jumlahCar").innerHTML = jumlahCar;

  var persen = parseInt(jumlahCar) / 1666;
  document.getElementById("persen").innerHTML = persen;
}
