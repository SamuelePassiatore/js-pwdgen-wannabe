console.log('JS OK');

/* Chiedi all’utente il suo nome, 
   poi chiedi il suo cognome, 
   poi chiedi il suo colore preferito.
   Infine scrivi sulla pagina nomecognomecolorepreferito21 */


/* 
1) Prendo l'elemento da DOM
2) Preparo una variabile con 21 come stringa
3) Chiedo il nome all'utente 
4) Chiedo il cognome all'utente 
5) Chiedo il colore preferito all'utente 
6) Sommo tutte le variabili come stringa
7) Inserisco il risultato nell'elemento del DOM
 */


// Prendo l'elemento dal DOM
const passwordElement = document.getElementById('password-request');
////console.log(passwordElement);

// Preparo una variabile con 21 come stringa
const finalNumber = 21;
////console.log(finalNumber);

// Chiedo il nome all'utente
const userName = prompt('Qual è il tuo nome?', 'Napoleone');
////console.log(userName);

// Chiedo il cognome all'utente
const userSurname = prompt('Qual è il tuo cognome?', 'Bonaparte');
////console.log(userSurname);

// Chiedo all'utente il suo colore preferito
const favColor = prompt('Qual è il tuo colore preferito?', 'Verde');
////console.log(favColor);

// Sommo tutte le variabili come stringa
const newPassword = userName + userSurname + favColor + finalNumber;
////console.log(newPassword);

// Message
const message = `La tua password è: <strong>${newPassword}</strong>`;

// Inserisco il risultato nel password element del DOM 
passwordElement.innerHTML = message;
////console.log(passwordElement);









