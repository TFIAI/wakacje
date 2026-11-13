const swieta = new Date(2027, 5, 24); // 5 to czerwiec w JS z jakiegoś kurna powodu

function dopiszZero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}

//nazwa funkcji: pokazZegar
//opis: pokazuje zegar działający w real time
function pokazZegar() {
    const teraz = new Date();
    const g = dopiszZero(teraz.getHours());
    const m = dopiszZero(teraz.getMinutes());
    const s = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = g + ":" + m + ":" + s;
}

//nazwa funkcji: pokazDate
//opis: pokazuje obecną date
function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}

//nazwa funkcji: policz
//opis: liczy ile dni zostało do świąt
function policz(teraz, cel) {
    const r = cel - teraz;
    return Math.ceil(r / 86400000);
}

//nazwa funkcji: pokazDni
//opis: wyświetla ilość dni do świąt w odpowiednim spanie
function pokazDni() {
    const teraz = new Date();
    const pozostaloDni = policz(teraz, swieta);
    document.getElementById("dni").textContent = pozostaloDni;
}

//nazwa funkcji: pokazDzien
//opis: pokazuje obecny dzień tygodnia
function pokazDzien() {
    const teraz = new Date();
    document.getElementById("dzien").textContent = teraz.toLocaleDateString("pl-PL", { weekday: 'long' });
}

// Wywołania funkcji na starcie strony
pokazDate();
pokazZegar();
pokazDni();
pokazDzien();

// Odświeżanie zegara co sekundę
setInterval(pokazZegar, 1000);
