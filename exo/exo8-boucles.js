import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* JS map phase 1
// Côté template html rajouter plein de \&ltp>\&lt/p>
/*
\&ltbody>
	\&ltdiv id="app">\&lt/div>
	\&ltscript type="module" src="/main.js">\&lt/script>
	\&ltp>p1\&lt/p>
	\&ltp>pétwo\&lt/p>
	\&ltp>péééétroaaaa\&lt/p>
\&lt/body>
*/
// On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
let lesTxt = document.getElementsByTagName('p');
// On va faire un console log de lesTxt
console.log(lesTxt);

//* JS map Phase 2
// Avec la methode Array.from(), dans une nouvelle variable
// textesTab on va transformer notre htmlCollection en array
let textesTab = Array.from(lesTxt);
// On console log la variables textesTab
// On transforme le HTMLCollection(qui contient tous nos \&ltp>) en Array classique
console.log(textesTab);

//* JS Map Phase 3 (on peut travailler sur un Array)
// Sur textesTab on va utiliser la ƒ° map(),
// dans map(), on va lui passer en param une fonction fléchée
// qui elle a en paramètre une variable temporaire
// (nom de la variable au choix)
// cette fonction fléchée elle va modifier le innerHTML ou
// innerText de la variable temporaire
textesTab = textesTab.map((txt) => txt.innerText);
console.log(textesTab);`

txtCode = formatCodeDeclarations(txtCode, [`lesTxt`, `textesTab`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
lesTXT 
HTMLCollection { length: 0 }
0: \&ltp>
1: \&ltp>
2: \&ltp>
3: \&ltp>
length: 4
<prototype>: HTMLCollectionPrototype { item: item(), namedItem: namedItem(), length: Getter, … }
textesTab 
Array []
textesTab 
Array []`
code2.innerHTML = txtConsole;
