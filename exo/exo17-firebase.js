import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//* ****************************************************************************************** /
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyABxWxqervcP3rO1nNwwC3y6HWKeduAMco",
    authDomain: "cours-js-nc.firebaseapp.com",
    databaseURL: "https://cours-js-nc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cours-js-nc",
    storageBucket: "cours-js-nc.appspot.com",
    messagingSenderId: "123294309206",
    appId: "1:123294309206:web:81b29eb55ff0793eca94f7"
};
firebase.initializeApp(firebaseConfig);
//* ****************************************************************************************** /

//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
;
`

txtCode = formatCodeDeclarations(txtCode, [`contactApiSecure`, `rawData`, `transformedData`, `randomUser`, `UserCard`, `picture`, `large`, `name`, `title`, `last`, `first`, `email`, `location`, `postcode`, `city`, `state`, `country`, `phone`, `cell`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
<div class="row">
	<!-- add user -->
	<div class="col-6  p-3">
		<form class="m-3 bg-info p-3" id="add-user-form">
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Name</label>
				<input data-key="name" type="text" class="user-input form-control" placeholder="name">
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Age</label>
				<input data-key="age" type="text" class="user-input form-control" placeholder="age">
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Mail</label>
				<input data-key="mail" type="email" class="user-input form-control" placeholder="email">
			</div>
			<button id="add-user-btn" type="submit" class="btn btn-primary">Ajouter</button>
		</form>
		<!-- edit user -->
		<form class="m-3 bg-primary p-3" id="edit-user-module">
			<div class="mb-3">
				<input data-key="name" type="text" class="edit-userid form-control" hidden>
				<label for="exampleFormControlInput1" class="form-label">Name</label>
				<input data-key="name" type="text" class="edit-user-input form-control" placeholder="name">
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Age</label>
				<input data-key="age" type="text" class="edit-user-input form-control" placeholder="age">
			</div>
			<div class="mb-3">
				<label for="exampleFormControlInput1" class="form-label">Mail</label>
				<input data-key="mail" type="email" class="edit-user-input form-control" placeholder="email">
			</div>
			<button id="edit-user-btn" type="submit" class="btn btn-success">Modifier</button>
		</form>
	</div>
	<!-- detail utilisateurs -->
	<div class="col-6 bg-light p-3 text-dark">
		<div  class="card text-center">
			<div class="card-header">
				Détails Utilisateur
			</div>
			<div id="user-detail" class="card-body">
				<h5 class="card-title">Veuillez sélectionner un utilisateur</h5>
			</div>
		</div>
	</div>
</div>
<!-- liste utilisateurs -->
<div class="row">
	<div class="col m-3">
		<h3>Liste des Utilisateurs : </h3>
		<ul id="user-list" class="list-group">
		</ul>
	</div>
</div>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
// lien firebase en haut

//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");

const addUserBtnUI = document.getElementById("add-user-btn"); 
addUserBtnUI.addEventListener("click", addUserBtnClicked); 

const formUserUI = document.getElementById("add-user-form"); 
formUserUI.addEventListener("submit", (event) => event.preventDefault()); 
const formUserEditUI = document.getElementById("edit-user-module"); 

formUserEditUI.addEventListener("submit", (event) => event.preventDefault()); 
const userListUI = document.getElementById("user-list"); 

const userDetailUI = document.getElementById("user-detail"); 
readUserData();



function addUserBtnClicked() {
    //! Exercice : CREATE : Ajouter un nouvel utilisateur
    //TODO dans la f° addUserBtnClicked, Récupérer TOUS LES INPUTS avec la classe user-input 1 variable addUserInputsUI (getElementByClassName)
    let addUserInputsUI = document.getElementsByClassName('user-input');
    //TODO dans la f° addUserBtnClicked, créer une variable newUser (qui est un objet vide)
    let newUser = {};
    //TODO dans la f° addUserBtnClicked, faire une boucle for pour parcourir les input dans addUserInputsUI
    for (const element of addUserInputsUI) {
        //TODO dans la boucle, pour chaque élément parcouru on récupère une variable key = addUserInputsUI[i].getAttribute('data-key')
        let key = element.getAttribute('data-key');
        //TODO dans la boucle, une variable value = addUserInputsUI[i].value
        let value = element.value;
        //TODO dans la boucle, pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur : newUser[key] = value
        newUser[key] = value;
    }
    //TODO  après le parcours des inputs, sur userRef on va faire un push de newUser
    usersRef.push(newUser);
    //TODO  dans la f° addUserBtnClicked, on console log un msg type nouvel utilisateur enregistré
    console.log('nouvel utilisateur enregistré');
    //TODO  dans la f° addUserBtnClicked, on console log le nom et l'âge du nouvel utilisateur
    console.log(`Nom: ${newUser.name}, âge: ${newUser.age}`);
    //TODO  dans la f° addUserBtnClicked, on réinitialise le formulaire avec l'id add-user-form
    let form = document.getElementById('add-user-form');
    console.log('Données envoyées :', form);
	form[0] = "";
	form[1] = "";
	form[2] = "";
};

function readUserData() {
    //! Exercice : READ (Lecture de la BDD : Tous Les Utilisateurs)
	//TODO Dans la f° readUserData
	//TODO Sur la variable usersRef on va utiliser une fonction .on()
	//? pour info .on() va s'utiliser comme un eventListener
	//TODO 1er param de .on(), une string "value" (la bdd vérifie s'il y a des changements de value)
	//TODO 2ème param de .on(), f° fléchée qui prend le param snap
	//? usersRef.on("value", (snap) => {})
	usersRef.on("value", (snap) => {
		//TODO Dans la f° fléchée, on va assigner une string vide au innerHTML de userListUI
		userListUI.innerHTML = "";
		//TODO Sur la variable snap on va utiliser un forEach pour parcourir le tableau avec une variable temporaire childSnap
		snap.forEach(childSnap => {
			//TODO Dans le forEach : dans une variable key on va stocker childSnap.key
			let key = childSnap.key;
			//TODO Dans le forEach : dans une variable value on va stocker childSnap.val()
			let value = childSnap.val();
			//TODO Dans le forEach : dans une variable $li on va créer un élément<li></li>
			let $li = document.createElement('li');
			//* Dans la f° readUserData, dans le forEach, On va déclarer une variable deleteIconUI dans laquelle on va créer un élément span
			//* Dans la f° readUserData, dans le forEach, On va ensuite modifier la class de deleteIconUI en "delete-user"
			//* Dans la f° readUserData, dans le forEach, On va remplir le innerHTML de deleteIconUI evec un "X"
			//* Dans la f° readUserData, dans le forEach, deleteIconUI on lui rajoute un attribut "userid" qui prendra la valeur de key(via setAttribute)
			//* Dans la f° readUserData, dans le forEach, Enfin sur deleteIconUI on place un AddEventListener qui écoute le click et lance la fonction deleteButtonClicked
			//*Phase 4 on fait les icones pour UPDATE
			let editIconUI=document.createElement('button');
			editIconUI.innerText = 'Update';
			editIconUI.setAttribute('class','btn btn-outline-primary mx-3');
			//* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
			editIconUI.setAttribute("userid", key);
			editIconUI.addEventListener("click", editButtonClicked);
			//*Phase 5 on fait les icones pour DELETE
			let deleteIconUI=document.createElement('button');
			deleteIconUI.innerText = 'Delete';
			deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
			//* Sur les icone en face du nom du user on rajoute un attribut qui contient la key
			//* on veut savoir qui on supprime au click
			deleteIconUI.setAttribute("userid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked);
			// let deleteIconUI = document.createElement('span');
			// deleteIconUI.className = "delete-user";
			// deleteIconUI.innerHTML = "X";
			// deleteIconUI.setAttribute('userid', key);
			// deleteIconUI.addEventListener('click', deleteButtonClicked);
			//TODO Dans le forEach : dans le innerHTML le $li on lui assigne value.name
			$li.innerHTML = value.name;
			//TODO Dans le forEach : sur la $li on lui rajoute un attribut 'user-key', on lui assignera la valeur stockée dans key
			$li.setAttribute("user-key", key);
			$li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
			//TODO Dans le forEach : dans la userListUI on va placer $li
			//! Exercice : READ (Lecture d’un élément de la BDD : Afficher 1 utilisateur)
			//TODO Dans la f° readUserData avant le append(), on va placer un addEventListener sur $li qui écoute "click" et lance la fonction userClicked
			$li.addEventListener('click', userClicked);
			userListUI.append($li)
			$li.append(editIconUI);
			$li.append(deleteIconUI);
		});
	})
};

function userClicked(event) {
    //? Ensuite dans la f° userClicked on capte l'évènement (on s'en sert pour savoir qui on sélectionne)
    //TODO Dans la f° userClicked, dans une variable userID, on va récupérer userID via event.target.getAttribute("user-key");
	let userID = event.target.getAttribute("user-key");
    //TODO Dans la f° userClicked, 1 variable userRef va faire référence à 1 utilisateur en particulier, on lui assigne dbRef,
    //? On utilise la f° child() pour viser le noeud "users/" concaténé avec userID
	let userRef = dbRef.child(`users/${userID}`);
    //TODO Dans la f° userClicked, 1 variable userDetailUI récupère ma div avec user-detail
	let userDetailUI = document.getElementById('user-detail');
    //TODO Dans la f° userClicked, Ensuite sur userRef on utilise la f° .on("value", snap =>{})
	userRef.on("value", snap =>{
		//TODO Dans la f° userClicked, dans la f° =>, on va vider l'innerHTML de userDetailUI
		userDetailUI.innerHTML = "";
		//TODO Dans la f° userClicked, Ensuite sur snap on va utiliser un forEach pour parcourir le cliché (snap) de notre BDD.
		snap.forEach(childSnap =>{
			//TODO Dans la f° userClicked, dans le forEach, 1 variable $p crée un élément <p>
			let $p = document.createElement('p');
			//TODO Dans la f° userClicked, dans le forEach, On rempli le innerHTML de $p avec childSnap.key et childSnap.val()
			$p.innerHTML = `${childSnap.key} : ${childSnap.val()}`;
			//TODO Dans la f° userClicked, dans le forEach, On rajoute $p dans notre userDetailUI
			userDetailUI.append($p);
		})
	})
};

function editButtonClicked(event) {
	//!Exercice : READ (Lecture d’un element de la BDD : Pré-remplir le formulaire d’un utilisateur)
	//TODO On va modifier le display du formUserEditUI à "block"
	formUserEditUI.style.display = 'block';
	//TODO On va modifier le display du formUserUI à "none"
	formUserUI.style.display = 'none';
	//TODO Ensuite on va faire ceci
	//TODO Une variable inputId qui récupère (querySelector) l'élément avec la classe .edit-userid
	let inputId = document.querySelector('.edit-userid');
	//TODO A la value de inputId on assigne event.target.getAttribute("userid");
	inputId.value = event.target.getAttribute("userid");
	//TODO Dans une variable editUserInputUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ou autre)
	let editUserInputUI = document.getElementsByClassName('edit-user-input');
	//TODO On va parcourir notre BDD avec userRef.on("value", snap => {
	let userRef = dbRef.child(`users/${inputId}`);
	userRef.on("value", snap => {
		//TODO Dans la f° fléchée, faire une boucle for qui parcourt les inputs editUsetInputUI,
		for(let i=0; i<editUserInputUI.length; i++){
			//TODO Dans la f° fléchée dans la boucle, dans une variable key, on stock editUserInputsUI[i].getAttribute("data-key");
			let key = editUserInputUI[i].getAttribute("data-key");
			//TODO Dans la f° fléchée dans la boucle, ensuite à chaque valeur de nos editUserInputsUI[i] on assigne snap.val()[key];
			editUserInputUI[i] = snap.val()[key];
		}
	//TODO en dehors de la fonction on(), dans une variable saveBtn, on récupère notre bouton avec l'id edit-user-btn
	let saveBtn = document.getElementById('edit-user-btn');
	//TODO en dehors de la fonction on(), sur ce bouton on place un eventlistener au click qui lance saveUserBtnClicked
	saveBtn.addEventListener('click', saveUserBtnClicked());
	});
};

function saveUserBtnClicked() {
	    //TODO Dans la f° saveUserBtnClicked()
        //TODO Dans une variable userID on récupère la value de l'input avec l'id "edit-userid"
        let userID = document.querySelector('#edit-userid').value;
        //TODO Dans une variable userRef on fait référence à l'utilisateur dans la BDD
        let userRef = dbRef.child(`users/${userID}`);
        //TODO Une variable editUserObject qui est un objet vide
        let editUserObject = {};
        //TODO Dans une variable editUserInputUI, on récupère tous les éléments html qui ont la classe edit-user-input (querySelectorAll ou autre)
        let editUserInputUI = document.querySelectorAll('.edit-user-input');
        //TODO ensuite on va faire une boucle forEach pour parcourir les editUserInputUI
        //TODO Dans les param du forEach(), on lui laisse une f° qui a une variable textField en paramètre
        editUserInputUI.forEach(textField =>{
            //TODO Dans cette f°, dans leforEach on aura une variable key qui va stocker les attributs data-key de textField (getAttribute())
            let key = editUserInputUI.textfield.getAttribute("data-key");
            //TODO Pour chaque clé (âge, name, email) on l'associe à notre nouvel utilisateur : editUserObject[key] = textField.value
            editUserObject[key] = textField.value;
        });
        //TODO ensuite en dehors de la boucle, sur notre variable userRef on utilise la f° update en lui passant editUserObject en paramètre
        userRef.update(editUserObject);
        //TODO Enfin on peut remettre le display à "none" de formUserEditUI et à "block" de forUserUI
        formUserEditUI.style.display = "none";
        formUserUI.style.display = "block";
};

function deleteButtonClicked(event) {
	//TODO dans la f°, récupérer le userID via event.target.getAttribute("userid")
	let userID = event.target.getAttribute("userid");
    //TODO dans la f°, faire une référence userRef à notre BDD directement sur le noeud de l'utilisateur qu'on a cliqué (référence à la table users + userID)
	let userRef = dbRef.child(`users/${userID}`);
    //TODO Dans la f°, utiliser la f° remove sur userRef
	console.log("delete");
}