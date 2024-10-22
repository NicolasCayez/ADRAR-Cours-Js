//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
// Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (cf
// exo avant) et qui calcule une moyenne entre ces 3 notes (Tableau de note)
function moyenne(noteA, noteB, noteC){
	let avg = (noteA + noteB + noteC) / 3;
	if(avg >= 15){
		// Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string
		// (très Bien)
		return "(très Bien)";
	}else if(avg >= 10){
		// Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une
		// string (assez Bien)
		return "(assez Bien)";
	}else{
		// Dans cette ƒ°, SINON renvoi une string (refus)
		return "(refus)";
	}
}
console.log(moyenne(12, 8, 9));
console.log(moyenne(12, 17, 19));
console.log(moyenne(12, 15, 9));`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `(refus)
<br>(très Bien)
<br>(assez Bien)`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
// Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (cf
// exo avant) et qui calcule une moyenne entre ces 3 notes (Tableau de note)
function moyenne(noteA, noteB, noteC){
	let avg = (noteA + noteB + noteC) / 3;
	if(avg >= 15){
		// Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string
		// (très Bien)
		return "(très Bien)";
	}else if(avg >= 10){
		// Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une
		// string (assez Bien)
		return "(assez Bien)";
	}else{
		// Dans cette ƒ°, SINON renvoi une string (refus)
		return "(refus)";
	}
}
console.log(moyenne(12, 8, 9));
console.log(moyenne(12, 17, 19));
console.log(moyenne(12, 15, 9));