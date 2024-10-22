//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
function ajouterTexte(pseudo, duTexte){
	let maDiv = document.querySelector('#ajouterTexte');
	let line = document.createElement('p');
	line.innerHTML =  \`<strong>\${pseudo}</strong> - \${duTexte}\`;
	maDiv.append(line);
}
ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','Borne');
ajouterTexte('JCVD','OK');
ajouterTexte('Dongue','Rodrigue');
`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
if(code2 != null){
	let resultDivContent = `<div id='ajouterTexte'></div>`;
	code2.innerHTML = resultDivContent;
}

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
function ajouterTexte(pseudo, duTexte){
	let maDiv = document.getElementById('ajouterTexte');
	if(maDiv != 0){
		let line = document.createElement('p');
		line.innerHTML = `<strong>${pseudo}</strong> - ${duTexte}`;
		maDiv.append(line);
	}
};
ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','Borne');
ajouterTexte('JCVD','OK');
ajouterTexte('Dongue','Rodrigue');
