let szoba1 = 35000;
let szoba2 = 50000;
let szoba3 = 75000;

function szobaArEgy() {
    let szoba1ar = document.getElementById("szoba1ar");
    let szemelyek_szama = document.getElementById("szemelyek1").value;
    let napok_szama = document.getElementById("napok1").value;
    szoba1ar.innerHTML = szoba1 * szemelyek_szama * napok_szama + " Ft";
}

function szobaArKetto() {
    let szoba1ar = document.getElementById("szoba2ar");
    let szemelyek_szama = document.getElementById("szemelyek2").value;
    let napok_szama = document.getElementById("napok2").value;
    szoba1ar.innerHTML = szoba2 * szemelyek_szama * napok_szama + " Ft";
}

function szobaArHarom() {
    let szoba1ar = document.getElementById("szoba3ar");
    let szemelyek_szama = document.getElementById("szemelyek3").value;
    let napok_szama = document.getElementById("napok3").value;
    szoba1ar.innerHTML = szoba3 * szemelyek_szama * napok_szama + " Ft";
}
