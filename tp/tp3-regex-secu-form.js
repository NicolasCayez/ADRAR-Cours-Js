//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - TP EN DESSOUS                                  //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//* ****************************************************************************************** /

//left part
let code1 = document.getElementById('txtCode');
let txtCode = `let regex = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/;
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorsDiv = document.getElementById('errorsDiv');
const charDecimal = /\d/;
const charSpecial = /[@$!&]/;
const charUppercase = /[A-Z]/; 
const charLowercase = /[a-z]/; 

errorsDiv.style.display = 'none';

email.addEventListener('keyup', () => {
	if(!regex.test(email.value)){
		email.style.color = 'red';
		let mailError = document.getElementById('mail-error')
		errorsDiv.style.display = '';
		mailError.style.display='';
	}
});

password.addEventListener('keyup', () => {
	// test charDecimal, charSpecial, majuscule et minuscule
	let presentDecimalChar = false;
	let presentSpecialChar = false;
	let presentUppercase = false;
	let presentLowercase = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charDecimal)){
			presentDecimalChar = true;
		}
		if(character.match(charSpecial)){
			presentSpecialChar = true;
		}
		if(character.match(charUppercase)){
			presentUppercase = true;
		}
		if(character.match(charLowercase)){
			presentLowercase = true;
		}
	});

	// test validité
	if(password.value.length>=6 && password.value.length<=12 && presentDecimalChar==true && presentSpecialChar==true){
		message.style.border = 'solid 2px green'
		errorsDiv.style.display = 'none';
	}else{
		errorsDiv.style.display = '';
		let passShort = document.getElementById('password-error-short');
		let passLong = document.getElementById('password-error-long');
		let passNumber = document.getElementById('password-error-number');
		let passSpecial = document.getElementById('password-error-special');
		let passUpper = document.getElementById('password-error-upper');
		let passLower = document.getElementById('password-error-lower');

		if(password.value.length<8){
			passShort.style.display='';
		}else{
			passShort.style.display='none';
		}

		if(password.value.length>12){
			passLong.style.display='';
		}else{
			passLong.style.display='none';
		}

		if(presentDecimalChar==false){
			passNumber.style.display='';
		}else{
			passNumber.style.display='none';
		}

		if(presentSpecialChar==false){
			passSpecial.style.display='';
		}else{
			passSpecial.style.display='none';
		}
		
		if(presentUppercase==false){
			passUpper.style.display='';
		}else{
			passUpper.style.display='none';
		}
		
		if(presentLowercase==false){
			passLower.style.display='';
		}else{
			passLower.style.display='none';
		}
		message.style.border = 'solid 2px red'
	}
});`;
code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `<div class="row bg-light">
	<form class="col-6 m-3" id="connexion-form">
		<h1 class="fs-3 text-dark">Formulaire de connexion</h1>
		<div class="">
			<label for="exampleFormControlInput1" class="form-label">Email</label>
			<input id="email" name="email" type="text" class="task-input form-control" placeholder="Votre email" pattern="/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/">
		</div>
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Password</label>
			<input id="password" name="password" type="text" class="task-input form-control" placeholder="Votre mot de passe" pattern="/^[A-Za-z0-9._-@$!&]{8,12}$/">
		</div>
		<button id="add-task-btn" type="submit" class="btn btn-primary w-auto mt-3">Se connecter</button>
	</form>
	<div id="errorsDiv" class="col-5 bg-light text-dark" style="display:none">
		<p class="fs-4 mt-3 text-danger">Erreur(s) de connexion</p>
		<ul id="errors-list" class="list-group m-3 p-3">
			<li id="mail-error" style="display:none">Le format du mail n'est pas correct</li>
			<li id="password-error-short" style="display:none">Mot de passe trop court (8-12 caractères)</li>
			<li id="password-error-long" style="display:none">Mot de passe trop long (8-12 caractères)</li>
			<li id="password-error-upper" style="display:none">Le mot de passe doit contenir une lettre majuscule</li>
			<li id="password-error-lower" style="display:none">Le mot de passe doit contenir une lettre minuscule</li>
			<li id="password-error-number" style="display:none">Le mot de passe doit contenir un chiffre</li>
			<li id="password-error-special" style="display:none">Le mot de passe doit contenir un caractère spécial</li>
		</ul>
	</div>
</div>
`;
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //

let regex = /^[a-z0-9._-]+@[a-z0-9._-]+.[a-z]{2,6}$/;
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorsDiv = document.getElementById('errorsDiv');
const charDecimal = /\d/;
const charSpecial = /[@$!&]/;
const charUppercase = /[A-Z]/; 
const charLowercase = /[a-z]/; 

errorsDiv.style.display = 'none';

email.addEventListener('keyup', () => {
	if(!regex.test(email.value)){
		email.style.color = 'red';
		let mailError = document.getElementById('mail-error')
		errorsDiv.style.display = '';
		mailError.style.display='';
	}
});

password.addEventListener('keyup', () => {
	// test charDecimal, charSpecial, majuscule et minuscule
	let presentDecimalChar = false;
	let presentSpecialChar = false;
	let presentUppercase = false;
	let presentLowercase = false;
	Array.from(password.value).forEach((character) => {
		if(character.match(charDecimal)){
			presentDecimalChar = true;
		}
		if(character.match(charSpecial)){
			presentSpecialChar = true;
		}
		if(character.match(charUppercase)){
			presentUppercase = true;
		}
		if(character.match(charLowercase)){
			presentLowercase = true;
		}
	});

	// test validité
	if(password.value.length>=6 && password.value.length<=12 && presentDecimalChar==true && presentSpecialChar==true){
		message.style.border = 'solid 2px green'
		errorsDiv.style.display = 'none';
	}else{
		errorsDiv.style.display = '';
		let passShort = document.getElementById('password-error-short');
		let passLong = document.getElementById('password-error-long');
		let passNumber = document.getElementById('password-error-number');
		let passSpecial = document.getElementById('password-error-special');
		let passUpper = document.getElementById('password-error-upper');
		let passLower = document.getElementById('password-error-lower');

		if(password.value.length<8){
			passShort.style.display='';
		}else{
			passShort.style.display='none';
		}

		if(password.value.length>12){
			passLong.style.display='';
		}else{
			passLong.style.display='none';
		}

		if(presentDecimalChar==false){
			passNumber.style.display='';
		}else{
			passNumber.style.display='none';
		}

		if(presentSpecialChar==false){
			passSpecial.style.display='';
		}else{
			passSpecial.style.display='none';
		}
		
		if(presentUppercase==false){
			passUpper.style.display='';
		}else{
			passUpper.style.display='none';
		}
		
		if(presentLowercase==false){
			passLower.style.display='';
		}else{
			passLower.style.display='none';
		}
		message.style.border = 'solid 2px red'
	}
});