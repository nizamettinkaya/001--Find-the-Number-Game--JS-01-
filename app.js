var rsayi, sayac;

var tahmin = document.querySelector("#tahmin");
var sayi = document.querySelector("#sayi");




rsayi = Math.round(Math.random() * 100);
sayac = 0;


tahmin.onclick = function() {
    sayac++;


    if (rsayi == sayi.value) {
        window.alert("Congratulations! You Won.");
    } else if (sayi.value > rsayi) {
        window.alert("Try smaller number");
    } else {
        window.alert("Try greater number");
    }
    let attempt = document.querySelector("#ppp");
    attempt.innerHTML = sayac.toString();



}

window.onload = function() {
    document.getElementById('sayi').onkeypress = function searchKeyPress(event) {
        if (event.keyCode == 13) {
            document.getElementById('tahmin').click();
        }
    };

    document.getElementById('tahmin').onclick = doSomething;
}