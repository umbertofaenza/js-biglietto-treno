// Chiedo all'utente il numero di chilometri che vuole percorrere
const userKM = prompt("Quanti km vuoi percorrere?");

// Chiedo all'utente l'età del passeggero
const passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));

// Calcolo il prezzo base del viaggio moltiplicando i km inseriti per il prezzo al km
const basePrice = userKM * 0.21;

// Dichiaro una variabile per il prezzo scontato
let discountedPrice;
