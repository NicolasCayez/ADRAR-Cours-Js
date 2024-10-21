import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
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

contactApiPokeDex();`

txtCode = formatCodeDeclarations(txtCode, [`apiDiv`, `contactApiPokeDex`, `data`, `Json`, `pokemon`, `unPokemonAffiche`, `results`, `name`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
***`
code2.innerHTML = txtConsole;
