// Chiedo all'utente il numero di chilometri che vuole percorrere
const userKM = parseFloat(prompt("Quanti km vuoi percorrere?"));

// Chiedo all'utente l'età del passeggero
const passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));

// Calcolo il prezzo base del viaggio moltiplicando i km inseriti per il prezzo al km
let basePrice = userKM * 0.21;
let discountDescription = "0%";

if (
  userKM &&
  userKM > 0 &&
  passengerAge &&
  passengerAge > 0 &&
  passengerAge < 150
) {
  // Passeggero minorenne
  if (passengerAge < 18) {
    basePrice = basePrice - (basePrice * 20) / 100;
    discountDescription = "20% - Sconto per minorenni";
    // Passeggero over 65
  } else if (passengerAge >= 65) {
    basePrice = basePrice - (basePrice * 40) / 100;
    discountDescription = "40% - Sconto per Over 65";
  }
  // Prezzo finale e sconto
  document.getElementById("ticket-price__generated").innerHTML =
    "€" + basePrice.toFixed(2);
  document.getElementById("discount").innerHTML = discountDescription;
} else if (!userKM || userKM <= 0) {
  alert("Valore km invalido!");
} else if (!passengerAge || passengerAge <= 0 || passengerAge >= 150) {
  alert("Valore età invalido!");
}
