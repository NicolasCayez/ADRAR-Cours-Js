//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
// Créer une fonction qui prend un nombre en paramètre
function fonctionExo11(nb){
	// La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
	console.log(nb+33);
}
fonctionExo11(2);
// créer une autre fonction qui prend 2 nombres en paramètre
function fonctionExo12(nbA,nbB){
	// Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre
	console.log(nbA+nbB);
}
fonctionExo12(2,3);`

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `35
<br>5`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
// Créer une fonction qui prend un nombre en paramètre
function fonctionExo11(nb){
	// La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
	console.log(nb+33);
}
fonctionExo11(2);
// créer une autre fonction qui prend 2 nombres en paramètre
function fonctionExo12(nbA,nbB){
	// Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre
	console.log(nbA+nbB);
}
fonctionExo12(2,3);