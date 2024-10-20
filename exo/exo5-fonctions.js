import { formatCodeText } from "../scripts/codeTextReplacer";
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
txtCode = txtCode.replaceAll(`fonctionExo11`,`<font color="aqua">fonctionExo11</font>`)
                .replaceAll(`nb`,`<font color="aqua">nb</font>`)
                .replaceAll(`nbA`,`<font color="aqua">nbA</font>`)
                .replaceAll(`nbB`,`<font color="aqua">nbB</font>`)
                .replaceAll(`fonctionExo12`,`<font color="aqua">fonctionExo12</font>`);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
35
5`
code2.innerHTML = txtConsole;
