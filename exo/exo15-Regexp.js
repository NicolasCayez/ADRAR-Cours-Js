//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
let email = document.getElementById('email');
let password = document.getElementById('password');
let message = document.getElementById('message');
const charDecimal = /\d/;
const charSpecial = /[@\$!&]/;

email.addEventListener('keyup', () => {
	if(regex.test(email.value)){
		email.style.backgroundColor = 'green';
	}else{
		email.style.backgroundColor = 'red';
	}
});
password.addEventListener('keyup', () => {
	let contenuMessage;
	// test charDecimal
	let PresentDecimalChar = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charDecimal)){
			PresentDecimalChar = true;
		}
	});
	// test charSpecial
	let PresentSpecialChar = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charSpecial)){
			PresentSpecialChar = true;
		}
	});
	// test validité
	if(password.value.length>=6 && password.value.length<=8 && PresentDecimalChar==true && PresentSpecialChar==true){
		contenuMessage = \`Le password est valide\`;
		message.style.border = 'solid 2px green'

	}else{
		contenuMessage = \`Le password : \`;// début du message d'erreur
		if(password.value.length<6){
		contenuMessage += \`- est trop court\`;
		}
		if(password.value.length>8){
		contenuMessage = \`- est trop long\`;
		}
		if(PresentDecimalChar==false){
			contenuMessage += \`- doit contenir au moins un chiffre\`;
		}
		if(PresentSpecialChar==false){
			contenuMessage += \`- doit contenir au moins un caractère spécial $, &, @ ou !\`;
		}
		message.style.border = 'solid 2px red'
	} 
	message.innerText = contenuMessage;
});`;
code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
<div class="card bg-dark w-50 mx-auto my-3">
    <form action="">
        <div class="">
        	login
			<br>
        	<input type="email" name="login" id="email" placeholder="votre login">
			<br>
        	PassWord
			<br>
        	<input type="password" name="login" id="password" placeholder="***">
        </div>
        <br>
        <div class="" id="message">
        </div>
    </form>
</div>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //

let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
let email = document.getElementById('email');
let password = document.getElementById('password');
let message = document.getElementById('message');
const charDecimal = /\d/;
const charSpecial = /[@\$!&]/;

email.addEventListener('keyup', () => {
	if(regex.test(email.value)){
		email.style.backgroundColor = 'green';
	}else{
		email.style.backgroundColor = 'red';
	}
});
password.addEventListener('keyup', () => {
	let contenuMessage;
	// test charDecimal
	let PresentDecimalChar = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charDecimal)){
			PresentDecimalChar = true;
		}
	});
	// test charSpecial
	let PresentSpecialChar = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charSpecial)){
			PresentSpecialChar = true;
		}
	});
	// test validité
	if(password.value.length>=6 && password.value.length<=8 && PresentDecimalChar==true && PresentSpecialChar==true){
		contenuMessage = `Le password est valide`;
		message.style.border = 'solid 2px green'

	}else{
		contenuMessage = `Le password : `;// début du message d'erreur
		if(password.value.length<6){
		contenuMessage += `- est trop court`;
		}
		if(password.value.length>8){
		contenuMessage = `- est trop long`;
		}
		if(PresentDecimalChar==false){
			contenuMessage += `- doit contenir au moins un chiffre`;
		}
		if(PresentSpecialChar==false){
			contenuMessage += `- doit contenir au moins un caractère spécial $, &, @ ou !`;
		}
		message.style.border = 'solid 2px red'
	} 
	message.innerText = contenuMessage;
});