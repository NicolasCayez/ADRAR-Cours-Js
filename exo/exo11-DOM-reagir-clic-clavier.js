import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* Exercice : réagir au click
//TODO: Dans une page web mettre en place un titre h1, faire en sorte que lorsqu’on click sur le titre cela
//TODO: modifie son texte
let reactClickTitle1 = document.getElementById('reactClick1');
reactClickTitle1.addEventListener('click', () =>{
  reactClickTitle1.innerHTML = 'Hey tu as cliqué';
});

//* Exercice réagir au click 2
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

//* Exercice : réagir au clavier
//TODO Dans ce cas là plusieurs évènements s’offrent à nous, keyup, keypress ou keydown,
//TODO Dans une page web : rajouter un formulaire (au moins un textarea)
//* Exercice : Réagir au clavier 2
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

//* Exo : réagir au click 3 (capter l’event)
// Dans une page web faire en sorte de récupérer les coordonnées X et Y du click et créer une
// image à cet endroit là.
document.addEventListener('click', (e) =>{
	let myImg = document.createElement('img');
	myImg.src = ('https://a0.anyrgb.com/pngimg/2000/634/maurice-moss-richard-ayoade-it-crowd-british-comedy-duran-duran-television-comedy-geek-nerd-comedy-canvas.png');
	myImg.style.maxHeight = '50px';
	myImg.style.position = 'absolute';
	myImg.style.left = e.x+'px';
	myImg.style.top = e.y+'px';
	document.body.append(myImg);
});
`

txtCode = formatCodeDeclarations(txtCode, [`reactClickTitle1`, `reactClickTitle2`, `addClass`, `supprClass`, `toggleClass`, `reactKb`, `resultKb`, `resultKb`, `stealthButton`, `myImg`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
***`
code2.innerHTML = txtConsole;
