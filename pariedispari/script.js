// L'utente sceglie pari o dispari.
// Il computer genera due numeri a caso
// e dichiara il vincitore.

var numRandom1, numRandom2;

function random(min, max) {
  return Math.floor(Math.random() * max + min);
}

function parita(num1, num2) {
  if (num1 > num2) {
    return "Hai vinto!";
  } else if (num1 < num2) {
    return "Hai perso";
  } else {
    return "Pareggio!";
  }
}

numRandom1 = random(1, 5);
console.log(numRandom1);

numRandom2 = random(1, 5);
console.log(numRandom2);

var resultParita = parita(numRandom1, numRandom2);
console.log(resultParita);
