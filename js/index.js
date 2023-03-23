const form = document.querySelector("form");

var jkPria = document.getElementById("p");
var jkWanita = document.getElementById("w");
var BeratBadan = document.getElementById("berat-badan");
var Usia = document.getElementById("usia");
var TinggiBadan = document.getElementById("tinggi-badan");
const reset = document.getElementById("reset");

const nilai = document.getElementById("hasilnilai");
const BtnHitung = document.getElementById("hitung");
const komen = document.getElementById("komenhasil");
const tipe = document.getElementById("tipehasil");
const status = document.getElementById("status-bmi");


if (BtnHitung){
    BtnHitung.addEventListener("click", (event) => {
        event.preventDefault();
        validasi();
    });
} else {
    console.error("Cannot find submit button with ID 'hitung' ");
}

reset.addEventListener("click", function(){
    jkPria = "";
    jkWanita = "";
    BeratBadan.value = "";
    Usia.value = "";
    TinggiBadan.value = "";
})

function validasi(){
    if ((jkPria.checked == false && jkWanita == false) || BeratBadan.value == '' || Usia.value == '' || TinggiBadan.value == ''){
        modalText.innerHTML = 'All fields are required !';
    } else {
        hitungBMI();
    }
}

function hitungBMI(){
    var UBT = [Usia.value, BeratBadan.value, TinggiBadan.value];
    if (jkPria.checked){
        UBT.push("Pria");
    } else if (jkWanita.checked){
        UBT.push("Wanita");
    }

    var BMI = Number(UBT[1]) / (Number(UBT[2])/100 *Number(UBT[2])/100);

    var hasilBMI = '';
    var statusBMI = '';
    if (BMI < 18.5){
        hasilBMI = 'Tubuh Kurus';
        statusBMI = 'Hasil BMI Kurang dari 18.5';
    } else if (18.5 <= BMI && BMI <= 24.9){
        hasilBMI = 'Tubuh Sehat';
        statusBMI = 'Hasil BMI diantara 23 dan 25';
    } else if (25 <= BMI && BMI <= 29.9){
        hasilBMI = 'Tubuh Kegemukan';
        statusBMI = 'Hasil BMI 25 sampai 29.9';
    } else if (30 <= BMI && BMI <= 34.9){
        hasilBMI = 'Tubuh Berat badan berlebih';
        statusBMI = 'Hasil BMI 30 sampai 34.9';
    } else if (35 <= BMI){
        hasilBMI = 'Berat badan yang sangat berlebih';
        statusBMI = 'Hasil BMI tidak lebih dari 35';
    }

    nilai.textContent = `${BMI.toFixed(2)}`;
    komen.textContent = `${hasilBMI}`;
    tipe.textContent = `${hasilBMI}`;
    status.textContent = `${statusBMI}`;
}
