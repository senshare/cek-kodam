const kodamData = {
  kodam1: "Kodam I/Bukit Barisan",
  kodam2: "Kodam II/Sriwijaya",
  kodam3: "Kodam III/Siliwangi",
  kodam4: "Kodam IV/Diponegoro",
  kodam5: "Kodam V/Brawijaya",
  kodam6: "Kodam VI/Mulawarman",
  kodam7: "Kodam VII/Wirabuana",
  kodam8: "Kodam VIII/Trikora",
  kodam9: "Kodam IX/Udayana",
  kodam10: "Kodam X/Merdeka",
  // Tambahkan data kodam lainnya di sini
};

function cekKodam() {
  const kodeInput = document.getElementById("kodeInput").value.toLowerCase().trim();
  const hasilElement = document.getElementById("hasil");

  if (kodamData[kodeInput]) {
    hasilElement.textContent = kodamData[kodeInput];
    hasilElement.style.color = "green";
  } else {
    hasilElement.textContent = "Kode daerah militer tidak ditemukan";
    hasilElement.style.color = "red";
  }
}
