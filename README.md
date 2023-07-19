# JS BIGLIETTO TRENO

## TRACCIA

Il programma dovrà **chiedere** all'utente il **numero di chilometri** che vuole percorrere e **l'età** del passeggero.

Sulla base di queste informazioni dovrà **calcolare** il **prezzo totale** del viaggio, secondo queste regole:

- Il prezzo del biglietto è definito in base ai km (0.21 € al km)
- Va applicato uno sconto del 20% per i minorenni
- Va applicato uno sconto del 40% per gli over 65

## SVOLGIMENTO

- Chiedo all'utente il numero di chilometri che vuole percorrere
- Chiedo all'utente l'età del passeggero
- Calcolo il prezzo base del viaggio moltiplicando i km inseriti per il prezzo al km

**Se** l'età del passeggero è inferiore a 18:

- Applico uno sconto del 20% al prezzo base
- Stampo il prezzo scontato del 20%

**Altrimenti se** l'età del passeggero è superiore o uguale a 65:

- Applico uno sconto del 40% al prezzo base
- Stampo il prezzo scontato del 40%

  **Altrimenti**

- Stampo il prezzo base
