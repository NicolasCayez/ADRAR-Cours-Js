//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
console.log('2**10',2**10);
// Math.pow(2,10);
console.log('20+33', 20+33);
console.log('20-33', 20-33);
console.log('20/33', 20/33);
console.log('20*33', 20*33);
// 🚨 Troll pour les décimales
console.log('2,33+10', 2,33+10, 'piege avec la virgule');
// Pour les décimales la virgule avec la notation en .
console.log('2.33+10', 2.33+10);
console.log('LOL',10000);
console.log('0.1+0.2', 0.1+0.2);
console.log('1+20*5', 1+20*5);
console.log('(1+20)*5', (1+20)*5);
console.log('10%2', 10%2);
console.log('3%2', 3%2);

// Incrémentation
let num = 0;
console.log(num+1);
//? Pour faire du Cumul : 
// num = num+1;
num +=1;//Notation raccourcie (assignation composé)
// num = num + 5;
num +=5;
// Notation raccourcie incrémentation de 1
console.log(num++);
console.log(num--);`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
2**10 1024
<br>20+33 53
<br>20-33 -13
<br>20/33 0.6060606060606061
<br>20*33 660
<br>2,33+10 2 43 piege avec la virgule
<br>2.33+10 12.33
<br>LOL 10000
<br>0.1+0.2 0.30000000000000004
<br>1+20*5 101
<br>(1+20)*5 105
<br>10%2 0
<br>3%2 1
<br>1
<br>6
<br>7`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
console.log('2**10',2**10);
// Math.pow(2,10);
console.log('20+33', 20+33);
console.log('20-33', 20-33);
console.log('20/33', 20/33);
console.log('20*33', 20*33);
// 🚨 Troll pour les décimales
console.log('2,33+10', 2,33+10, 'piege avec la virgule');
// Pour les décimales la virgule avec la notation en .
console.log('2.33+10', 2.33+10);
console.log('LOL',10000);
console.log('0.1+0.2', 0.1+0.2);
console.log('1+20*5', 1+20*5);
console.log('(1+20)*5', (1+20)*5);
console.log('10%2', 10%2);
console.log('3%2', 3%2);

// Incrémentation
let num = 0;
console.log(num+1);
//? Pour faire du Cumul : 
// num = num+1;
num +=1;//Notation raccourcie (assignation composé)
// num = num + 5;
num +=5;
// Notation raccourcie incrémentation de 1
console.log(num++);
console.log(num--);