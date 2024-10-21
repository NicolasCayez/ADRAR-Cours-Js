import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
function ajouterTexte(pseudo, duTexte){
	let maDiv = document.querySelector('#ajouterTexte');
	let line = document.createElement('p');
	line.innerHTML =  \`\&ltstrong>\${pseudo}\&lt/strong> - \${duTexte}\`;
	maDiv.append(line);
}
ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','Borne');
ajouterTexte('JCVD','OK');
ajouterTexte('Dongue','Rodrigue');
`

txtCode = formatCodeDeclarations(txtCode, [`userData `, `userDataDiv`, `picture`, `name`, `email`, `age`, `hobby`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
***`
code2.innerHTML = txtConsole;
