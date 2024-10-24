//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* Exercice : réagir à mouseleave
// Lorsque la souris de l’utilisateur s’en va d’un élément html.
// Dans une page web rajouter un titre (h1, h2 ou h3 au choix) il est en display none en CSS.
// Ensuite sur toute la page surveiller l’évènement mouseleave de manière à faire apparaitre le titre
// en mettant son display en « block » (ajouter d’autre modifications du titre via js notamment au
// niveau du style)
document.body.addEventListener('mouseleave', (e) =>{
	let leTitreInvisible = document.getElementById('leTitreInvisible');
	console.log(leTitreInvisible.display);
	leTitreInvisible.style.background = 'black';
	leTitreInvisible.style.color = 'chartreuse';
	leTitreInvisible.style.display = 'block';
});


//* Exercice DOM SetTimeout
// Aller se renseigner sur l’utilisation de la fonction setT
// Dans une page web, en utilisant la fonction setTimeout, faire en sorte qu’au bout de 3 secondes
// (soit 3000 ms), un titre apparait sur la page et des modification du style sont effectuées.
setTimeout(() => {
	console.log(\`t'es ok, t'es bath, t'es in\`);
	let leTitre = document.getElementById('leTitre');
	leTitre.style.background = 'black';
	leTitre.style.color = 'chartreuse';
	leTitre.style.display = 'block';
	document.body.classList.add("bg-warning");
}, 3000);`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `<h1 id="leTitreInvisible" style="display:none">Le titre invisible</h1>
<h1 id="leTitre" style="display:none">Le titre qui apparait tout seul</h1>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
//* Exercice : réagir à mouseleave
// Lorsque la souris de l’utilisateur s’en va d’un élément html.
// Dans une page web rajouter un titre (h1, h2 ou h3 au choix) il est en display none en CSS.
// Ensuite sur toute la page surveiller l’évènement mouseleave de manière à faire apparaitre le titre
// en mettant son display en « block » (ajouter d’autre modifications du titre via js notamment au
// niveau du style)
document.body.addEventListener('mouseleave', (e) =>{
	let leTitreInvisible = document.getElementById('leTitreInvisible');
	console.log(leTitreInvisible.display);
	leTitreInvisible.style.background = 'black';
	leTitreInvisible.style.color = 'chartreuse';
	leTitreInvisible.style.display = 'block';
});


//* Exercice DOM SetTimeout
// Aller se renseigner sur l’utilisation de la fonction setT
// Dans une page web, en utilisant la fonction setTimeout, faire en sorte qu’au bout de 3 secondes
// (soit 3000 ms), un titre apparait sur la page et des modification du style sont effectuées.
setTimeout(() => {
	let leTitre = document.getElementById('leTitre');
	leTitre.style.background = 'black';
	leTitre.style.color = 'chartreuse';
	leTitre.style.display = 'block';
	resultDiv.classList.add("bg-warning");
}, 3000);