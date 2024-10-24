//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
let chaineCar1 = "Bonjour";
let chaineCar2 = "Vous";
let nb1 = 2;
let nb2 = -22;
let nbVirg1 = 5.999999;
let nbVirg2 = 25.99;
let tab1 = [chaineCar1, chaineCar2, 3, "Hey hey"];
let tab2 = [[0,1,2], [3,4,5]];

let obj1 = {
    firstName1 : "Chuck",
    lastName1 : "Norris",
    passion1 : "mettre ses pieds ou il veut, et souvent dans la g****e"};

let obj2 = {
    libelle2 : "aspirateur",
    ref2 : "ASPYR0004XT",
    prixTTC : 259.99};
        
let sayHelloWorld = () => {
    console.log("Hello World");
}

let sayHelloWorld2 = function(){
    console.log("Hello World");
}

sayHelloWorld2();`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
<div id='monId'>Hello World</div>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
let chaineCar1 = "Bonjour";
let chaineCar2 = "Vous";
let nb1 = 2;
let nb2 = -22;
let nbVirg1 = 5.999999;
let nbVirg2 = 25.99;
let tab1 = [chaineCar1, chaineCar2, 3, "Hey hey"];
let tab2 = [[0,1,2], [3,4,5]];

let obj1 = {
    firstName1 : "Chuck",
    lastName1 : "Norris",
    passion1 : "mettre ses pieds ou il veut, et souvent dans la g****e"};

let obj2 = {
    libelle2 : "aspirateur",
    ref2 : "ASPYR0004XT",
    prixTTC : 259.99};
        
let sayHelloWorld = () => {
    console.log("Hello World");
}

let sayHelloWorld2 = function(){
    console.log("Hello World");
}

sayHelloWorld2();