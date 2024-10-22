//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* Exercice : Contacter une API
// Avec ce EndPoint d’api
// https://pokeapi.co/api/v2/pokemon
// Affichez dans une page web le nom des 20 premiers Pokemon

// On récupère la div cible
let apiDiv = document.getElementById('apiDiv');

let contactApiPokeDex = async () => {
	// récupération des données fournies par l'api
	let data = await fetch('https://pokeapi.co/api/v2/pokemon');
	// passage en json
	let dataJson = await data.json();
	for(let pokemon of dataJson.results) {
		// injection dans le DOM
		let unPokemonAffiche = document.createElement('p');
		unPokemonAffiche.innerText = pokemon.name;
		apiDiv.append(unPokemonAffiche);
	}
}

contactApiPokeDex();`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `<div id='apiDiv'></div>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
//* Exercice : Contacter une API
// Avec ce EndPoint d’api
// https://pokeapi.co/api/v2/pokemon
// Affichez dans une page web le nom des 20 premiers Pokemon

// On récupère la div cible
let apiDiv = document.getElementById('apiDiv');

let contactApiPokeDex = async () => {
	// récupération des données fournies par l'api
	let data = await fetch('https://pokeapi.co/api/v2/pokemon');
	// passage en json
	let dataJson = await data.json();
	for(let pokemon of dataJson.results) {
		// injection dans le DOM
		let unPokemonAffiche = document.createElement('p');
		unPokemonAffiche.innerText = pokemon.name;
		apiDiv.append(unPokemonAffiche);
	}
}

contactApiPokeDex();