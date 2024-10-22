//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* Exercice 1
// Créer 1 variable pour un nom,
let nom1 = "Jean-Eude";
// Créer une variable pour un âge,
let age1 = 2;
// Créer une variable passions qui est un tableau qui contient 2 chaînes de
// caractères (au choix)
let passions = ["Beach-Curling", "Aqua-Poney"];
// Puis créer une variable tabUser qui est un tableau qui contient les variable du
// nom, de l'âge et passions
let tabUser = [nom1, age1, passions];
// En Console on affiche le tabUser
console.log(tabUser);
// En passant par tabUser on veut afficher en console uniquement les passions
console.log(tabUser[2]);
// En passant par tabUser on veut afficher en console uniquement la 2ème passion
console.log(tabUser[2][1]);

//* Exercice 2
// Créer un nouveau tableau qui contient des trucs
let tabExo2 = ["yeah", 2, 25, {prenom : "john", nom : "Doe"}];
// Allez se renseigner la ƒ° push()
// Utiliser push pour ajouter un nouveau truc au tableau
tabExo2.push("Hello World");
// On affiche en console ce tableau
console.log(tabExo2);

//* Exercice 3
// Créer 2 variables leNom et lePrénom
let leNom = "Connor";
let lePrenom = "Sarah";
// Créer un tableau laPhrase et on y ajoute via push, Le nom ,Le prénom Les initiales
let laPhrase = [];
laPhrase.push(leNom, lePrenom, leNom[0]+lePrenom[0]);
// Afficher le tableau dans la console le nom le prénom et les initiales
console.log(laPhrase);
console.log(laPhrase[0]);
console.log(laPhrase[1]);
console.log(laPhrase[2]);`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `Array(3) [ "Jean-Eude", 2, (2) […] ]
<br>Array [ "Beach-Curling", "Aqua-Poney" ]
<br>Aqua-Poney
<br>Array(5) [ "yeah", 2, 25, {…}, "Hello World" ]
<br>Array(3) [ "Connor", "Sarah", "CS" ]
<br>Connor
<br>Sarah
<br>CS`;
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
//* Exercice 1
// Créer 1 variable pour un nom,
let nom1 = "Jean-Eude";
// Créer une variable pour un âge,
let age1 = 2;
// Créer une variable passions qui est un tableau qui contient 2 chaînes de
// caractères (au choix)
let passions = ["Beach-Curling", "Aqua-Poney"];
// Puis créer une variable tabUser qui est un tableau qui contient les variable du
// nom, de l'âge et passions
let tabUser = [nom1, age1, passions];
// En Console on affiche le tabUser
console.log(tabUser);
// En passant par tabUser on veut afficher en console uniquement les passions
console.log(tabUser[2]);
// En passant par tabUser on veut afficher en console uniquement la 2ème passion
console.log(tabUser[2][1]);

//* Exercice 2
// Créer un nouveau tableau qui contient des trucs
let tabExo2 = ["yeah", 2, 25, {prenom : "john", nom : "Doe"}];
// Allez se renseigner la ƒ° push()
// Utiliser push pour ajouter un nouveau truc au tableau
tabExo2.push("Hello World");
// On affiche en console ce tableau
console.log(tabExo2);

//* Exercice 3
// Créer 2 variables leNom et lePrénom
let leNom = "Connor";
let lePrenom = "Sarah";
// Créer un tableau laPhrase et on y ajoute via push, Le nom ,Le prénom Les initiales
let laPhrase = [];
laPhrase.push(leNom, lePrenom, leNom[0]+lePrenom[0]);
// Afficher le tableau dans la console le nom le prénom et les initiales
console.log(laPhrase);
console.log(laPhrase[0]);
console.log(laPhrase[1]);
console.log(laPhrase[2]);