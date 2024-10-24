// On récupère la div cible

export let generateCitation = async () => {
	let citationDiv = document.getElementById('citation');
	// récupération des données fournies par l'api
	let data = await fetch('https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes/');
	// passage en json
	let dataJson = await data.json();
	// if(weatherDiv != null){
	// 	// injection dans le DOM
	// 	let weather = document.createElement('p');
	// 	weather.innerText = dataJson;
	// 	apiDiv.append(unPokemonAffiche);
	// }
	console.log(dataJson);
}