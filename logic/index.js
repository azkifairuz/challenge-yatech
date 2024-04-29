function cekNilai(nilai) {
  if (nilai >= 86 && nilai <= 100) {
    return "A";
  } else if (nilai >= 71 && nilai <= 85) {
    return "B";
  } else if (nilai >= 56 && nilai <= 70) {
    return "C";
  } else if (nilai >= 41 && nilai <= 55) {
    return "D";
  } else if (nilai >= 0 && nilai <= 40) {
    return "E";
  } else{
    return 'nilai harus berada di antara 0 sampai 100'
  }
}

console.log(cekNilai(100));
