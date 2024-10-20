import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
let userName = 'Toto';
let pizzaName = 'Calzone';
let date = "01-01-2024";
let adress = '11 avenue de l\'europe';
let blagues = [\`Qu'est-ce qu'une pizza à dit une autre pizza qui lui fait de l'ombre
	? "Arrête de me trancher la route!"\`, \`Qu'est-ce qu'une pizza à dit une autre pizza qui lui demandait
	des conseils ? "Suis ta pâte et tout ira bien !"\`];


let sumUpOrderPhrase = 'Le ' + date + ' Bonjour Mr ' + userName + ' votre pizza : ' + pizzaName + ' est en cours de préparations' + ' elle sera livrée dans 30 minutes à :' + adress;
console.log(sumUpOrderPhrase);

let sumUpPhrase = \`Le \${date} : 
Bonjour Mr \${userName}, votre pizza : \${pizzaName} est en cours de préparation.
Elle vous sera livrée d'ici 30


minutes au \${adress}
Merci d'avoir commandé chez la pizerria "Rafinata"

\${blagues[Math.floor(Math.random()*2)]}\`

console.log(sumUpPhrase);
`;

txtCode = formatCodeDeclarations(txtCode, [`userName`, `pizzaName`, `date`, `adress`, `sumUpOrderPhrase`, `sumUpPhrase`, `blagues`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
Le 01-01-2024 Bonjour Mr Toto votre pizza : Calzone est en cours de préparations elle sera livrée dans 30 minutes à :11 avenue de l'europe cours-2024-10-15.js:153:9
Le 01-01-2024 : 
Bonjour Mr Toto, votre pizza : Calzone est en cours de préparation.
Elle vous sera livrée d'ici 30


minutes au 11 avenue de l'europe
Merci d'avoir commandé chez la pizerria "Rafinata"

Qu'est-ce qu'une pizza à dit une autre pizza qui lui demandait
des conseils ? "Suis ta pâte et tout ira bien !"`
code2.innerHTML = txtConsole;
