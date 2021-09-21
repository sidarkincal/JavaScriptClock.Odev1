
kullaniciAdi();
zamanGoster();

function kullaniciAdi() {
    var isim = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = isim;
}

function zamanGoster() {
    var dt = new Date();
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();
    var gunadi = dt.getDay(); 

  if (gunadi == 1) {
    gunadi = "Pazartesi";
  } else if (gunadi == 2) {
    gunadi = "Salı";
  } else if (gunadi == 3) {
    gunadi = "Çarşamba";
  } else if (gunadi == 4) {
    gunadi = "Perşembe";
  } else if (gunadi == 5) {
    gunadi = "Cuma";
  } else if (gunadi == 6) {
    gunadi = "Cumartesi";
  } else if (gunadi == 0) 
    { gunadi = "Pazar";
  }

  saat = saat < 10 ? "0" + saat : saat;
  dakika = dakika < 10 ? "0" + dakika : dakika;
  saniye = saniye < 10 ? "0" + saniye : saniye;

  var zaman = `${saat}:${dakika}:${saniye}`
  zaman = saat > 12 ? zaman + '😊' : zaman +  '😴';
  
  var tarih = `${zaman} ${gunadi}`


  document.getElementById("myClock").innerText = tarih;  
  document.getElementById("myClock").textContent = tarih;

  setTimeout(zamanGoster, 1000);
}
