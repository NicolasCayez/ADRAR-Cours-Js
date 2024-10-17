//TODO ***********************************//
//TODO Jeudi 17 Octobre                   //
//TODO ***********************************//

//! EXO 20.1
//TODO: Créer une ƒ° ajouterTexte qui prend 2 paramètres : pseudo et duTexte
//TODO: La fonction a pour but :
//TODO: de créer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte, dans la page
// TODO (Bonus) : Dans le paragraphe le pseudo est affiché en gras
function ajouterTexte(pseudo, duTexte){
	let maDiv = document.querySelector('#ajouterTexte');
	let line = document.createElement('p');
	line.innerHTML =  `<strong>${pseudo}</strong> - ${duTexte}`;
	maDiv.append(line);
}
ajouterTexte('Daniel','Gracia');
ajouterTexte('Jarry','Borne');
ajouterTexte('JCVD','OK');
ajouterTexte('Dongue','Rodrigue');

//! Exercice : réagir au click
//TODO: Dans une page web mettre en place un titre h1, faire en sorte que lorsqu’on click sur le titre cela
//TODO: modifie son texte
let reactClickTitle = document.getElementById('reactClick1');
reactClickTitle.addEventListener('click', () =>{
  reactClickTitle.innerHTML = 'Hey tu as cliqué';
});

//! Exercice réagir au click 2
//TODO Dans une page web mettre en place 1 titre et trois liens ou boutons
//TODO En css créer une classe
//TODO En utilisant les principales fonction de classList ,via JS, faire en sorte que le premier lien AJOUTE
//TODO la classe css au titre de la page, le second lien SUPPRIME la classe et le troisième lien fais un
//TODO TOGGLE de la classe sur le titre.
let reactClickTitle2 = document.getElementById('reactClick2');
let addClass = document.getElementById('addClass');
let supprClass = document.getElementById('supprClass');
let toggleClass = document.getElementById('toggleClass');

addClass.addEventListener('click', () =>{
  reactClickTitle2.classList.add('clickReact');
});
supprClass.addEventListener('click', () =>{
  reactClickTitle2.classList.remove('clickReact');
});
toggleClass.addEventListener('click', () =>{
  reactClickTitle2.classList.toggle('clickReact');
});

//! Exercice : réagir au clavier
//TODO Dans ce cas là plusieurs évènements s’offrent à nous, keyup, keypress ou keydown,
//TODO Dans une page web : rajouter un formulaire (au moins un textarea)
//! Exercice : Réagir au clavier 2
//TODO Dans une page web on a un input ou textarea, et un bouton, faire en sorte que :
//TODO Au bout de 5 lettres tapées au clavier cela Désactive le bouton :
let reactKb = document.getElementById('reactKb');
reactKb.value = localStorage.getItem("monTxt");
let resultKb = document.getElementById('resultKb');
let stealthButton = document.getElementById('stealthButton');

reactKb.addEventListener('keyup', () =>{
  console.log(reactKb.value.length);
  resultKb.innerText = reactKb.value;
  if(reactKb.value.length >=5){
    stealthButton.style.display = 'none';
  }else{
    stealthButton.style.display = '';
  }
});

stealthButton.addEventListener('click', () =>{
  localStorage.setItem("monTxt", reactKb.value);
});
