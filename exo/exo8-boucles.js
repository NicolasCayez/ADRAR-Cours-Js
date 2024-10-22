//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* JS map phase 1
// Côté template html rajouter plein de \&ltp>\&lt/p>
/*
\&ltbody>
	\&ltdiv id="app">\&lt/div>
	\&ltscript type="module" src="/main.js">\&lt/script>
	\&ltdiv id = "exo8">
		\&ltp>p1\&lt/p>
		\&ltp>pétwo\&lt/p>
		\&ltp>péééétroaaaa\&lt/p>
	\&lt/div>
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
console.log(textesTab);`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
<div id = "exo8">
<p>p1</p>
<p>pétwo</p>
<p>péééétroaaaa</p></div>

<p>Console :
<br>HTMLCollection { 0: p, 1: p, 2: p, length: 3 }
<br>Array(3) [ p, p, p ]
<br>Array(3) [ "p1", "pétwo", "péééétroaaaa" ]</p>`;
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
//* JS map phase 1
// Côté template html rajouter plein de \&ltp>\&lt/p>
/*
<body>
	<div id="app"></div>
	<script type="module" src="/main.js"></script>
		<div id = "exo8">
			<p>p1</p>
			<p>pétwo</p>
			<p>péééétroaaaa</p>
		</div>
</body>
*/
// On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
let lesTxt = document.getElementById('exo8').getElementsByTagName('p');
// On va faire un console log de lesTxt
console.log(lesTxt);

//* JS map Phase 2
// Avec la methode Array.from(), dans une nouvelle variable
// textesTab on va transformer notre htmlCollection en array
let textesTab = Array.from(lesTxt);
// On console log la variables textesTab
// On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
console.log(textesTab);

//* JS Map Phase 3 (on peut travailler sur un Array)
// Sur textesTab on va utiliser la ƒ° map(),
// dans map(), on va lui passer en param une fonction fléchée
// qui elle a en paramètre une variable temporaire
// (nom de la variable au choix)
// cette fonction fléchée elle va modifier le innerHTML ou
// innerText de la variable temporaire
textesTab = textesTab.map((txt) => txt.innerText);
console.log(textesTab);