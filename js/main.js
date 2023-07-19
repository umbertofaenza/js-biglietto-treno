// Chiedo all'utente il numero di chilometri che vuole percorrere
const userKM = prompt("Quanti km vuoi percorrere?");

// Chiedo all'utente l'età del passeggero
const passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));

// Calcolo il prezzo base del viaggio moltiplicando i km inseriti per il prezzo al km
const basePrice = userKM * 0.21;

// Dichiaro una variabile per il prezzo scontato
let discountedPrice;

if (passengerAge < 18) {
  discountedPrice = basePrice - (basePrice * 20) / 100;
  document.getElementById("ticket-price__generated").innerHTML =
    "€" + discountedPrice;
  document.getElementById("discount").innerHTML = "20% - Sconto per minorenni";
} else if (passengerAge >= 65) {
  discountedPrice = basePrice - (basePrice * 40) / 100;
  document.getElementById("ticket-price__generated").innerHTML =
    "€" + discountedPrice;
  document.getElementById("discount").innerHTML = "40% - Sconto per Over 65";
} else {
  document.getElementById("ticket-price__generated").innerHTML =
    "€" + basePrice;
  document.getElementById("discount").innerHTML = "0%";
}
