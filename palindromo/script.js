// Crea una funzione per capire se la parola è palindroma

// Creo funzione
function palindromo (parola) {
  if (parola === parola.split("").reverse().join("")) {
    // .spli scompone la parola in lettere;
    // .reverse inverte l'ordine delle lettere spomposte;
    // .join ricompone le lettere;
    return "La parola " + parola + " è palindroma";
  } else {
    return "La parola " + parola + " NON è palindroma";
  }
}

// Chiedo all'utente la parola
var parola1 = prompt("Inserisci una parola");

// Richiamo la funzione e la applico alla variabile appena dichiarata
palindromo (parola1);

// Stampo il risultato
console.log(palindromo(parola1));
