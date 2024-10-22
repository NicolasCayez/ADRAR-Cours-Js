//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
// Faire l'exo4 avec le User et les passions en mode objet
// (un objet user avec des propriétés pour le nom age et passions
// qui est lui aussi un objet avec 2 propriétés)
let objectUser = {
	nom : "Jean-Eude",
	age : 2,
	passions : {
		passion1 : "Beach-Curling",
		passion2 : "Aqua-Poney"
	}
};

// En Console on affiche le objectUser
console.log(objectUser);
// En passant par objectUser on veut afficher en console uniquement les passions
console.log(objectUser.passions);
// En passant par objectUser on veut afficher en console uniquement la 2ème passion
console.log(objectUser.passions.passion2);`

txtCode = formatCodeDeclarations(txtCode, [`objectUser`, `nom`, `age`, `passions`, `passion1`, `passion2`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `Object { nom: "Jean-Eude", age: 2, passions: {…} }
<br>Object { passion1: "Beach-Curling", passion2: "Aqua-Poney" }
<br>Aqua-Poney`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
// Faire l'exo4 avec le User et les passions en mode objet
// (un objet user avec des propriétés pour le nom age et passions
// qui est lui aussi un objet avec 2 propriétés)
let objectUser = {
	nom : "Jean-Eude",
	age : 2,
	passions : {
		passion1 : "Beach-Curling",
		passion2 : "Aqua-Poney"
	}
};

// En Console on affiche le objectUser
console.log(objectUser);
// En passant par objectUser on veut afficher en console uniquement les passions
console.log(objectUser.passions);
// En passant par objectUser on veut afficher en console uniquement la 2ème passion
console.log(objectUser.passions.passion2);