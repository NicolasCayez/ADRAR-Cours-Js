//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - TP EN DESSOUS                                  //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//* ****************************************************************************************** /
// Your web app's Firebase configuration

const firebaseConfig = {
	//import depuis variables d'environnement (pour ne pas partager les credentials sur github par exemple)
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);
//* ****************************************************************************************** /

//left part
let code1 = document.getElementById('txtCode');
let txtCode = `const firebaseConfig = {
	//import depuis variables d'environnement (pour ne pas partager les credentials sur github par exemple)
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
firebase.initializeApp(firebaseConfig);

//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const taskRef = dbRef.child("tasks");

const formTaskUI = document.getElementById("add-task-form"); 
formTaskUI.addEventListener("submit", (event) => event.preventDefault());

const addtaskBtnUI = document.getElementById("add-task-btn"); 
addtaskBtnUI.addEventListener("click", addTaskBtnClicked); 

const taskListUI = document.getElementById("task-list"); 

readTaskData();

//\* AJOUT D'UNE TACHE
function addTaskBtnClicked() {
    //\* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
    const addTaskInputsUI = document.getElementsByClassName("task-input");
    console.log(addTaskInputsUI);
    //\* On crée un objet (vide pour le moment) va stocker les infos du nouvel utilisateur
    let newTask = {};
    //\* On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
    for (let i = 0; i < addTaskInputsUI.length; i++) {
		//\* Ci dessous on récupère les key et value (on a des attributs data-key déjà placé en html)
		let key = addTaskInputsUI[i].getAttribute("data-key");
		//\* Pour chaque input on récupère la value.
		let value = addTaskInputsUI[i].value;
		//\* Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
		newTask[key] = value;
    }
    //\* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
    taskRef.push(newTask);
    console.log("New Task SAVED");
    console.log(\`\${newTask.label}\`);
    //\* Pour + de confort on reset le formulaire une fois qu'on a ajouté un user
    formTaskUI.reset();
};

//\* LIRE TOUTES LES TACHES
function readTaskData() {
	taskRef.on("value", (snap) => {
		taskListUI.innerHTML = "";
		snap.forEach((childSnap) => {
			//\* Key va stocker les ID
			let key = childSnap.key;
			let value = childSnap.val();
			let $li = document.createElement("li");
			//\*Phase 5 on fait les icones pour DELETE
			let deleteIconUI=document.createElement('button');
			deleteIconUI.innerText = 'Delete';
			deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
			//\* Sur les icone en face du nom de la tâche on rajoute un attribut qui contient la key
			//\* on veut savoir qui on supprime au click
			deleteIconUI.setAttribute("taskid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked);
			$li.innerText = value.taskLabel;
			$li.append(deleteIconUI);
			$li.setAttribute("task-key", key);
			$li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
			taskListUI.append($li);
		});
	});
}

//\* SUPPRIMER
function deleteButtonClicked(event) {
	console.log(event);
	// event.stopPropagation();
	//\* On récupère l'ID de l'utilisateur que l'on veut supprimer via un getAttribute
	//\* (cf. la fonciton readUserData(vers la fin, le setAttribute)).
	let taskID = event.target.getAttribute("taskid");
	//\* Dans la BDD on vise 1 user en particulier
	const taskRef = dbRef.child('tasks/' + taskID);
	//\* Bonus une autre manière de récup le <p></p> qui contient le nom user
	//\* Enfin sur cet utilisateur on utilise la fonction .remove()
	taskRef.remove();
};
`;
code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `<!-- Création de tâche -->
<div class="row bg-light">
	<form class="m-3 p-3" id="add-task-form">
		<div class="mb-3">
			<label for="exampleFormControlInput1" class="form-label">Label</label>
			<input data-key="taskLabel" type="text" class="task-input form-control" placeholder="Ajouter une nouvelle tâche">
		</div>
		<button id="add-task-btn" type="submit" class="btn btn-primary">Ajouter</button>
	</form>
</div>
<!-- Liste des tâches -->
<div class="row bg-light">
	<ul id="task-list" class="list-group m-3 p-3">
	</ul>
</div>
`;
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
// lien firebase en haut

//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const taskRef = dbRef.child("tasks");

const formTaskUI = document.getElementById("add-task-form"); 
formTaskUI.addEventListener("submit", (event) => event.preventDefault());

const addtaskBtnUI = document.getElementById("add-task-btn"); 
addtaskBtnUI.addEventListener("click", addTaskBtnClicked); 

const taskListUI = document.getElementById("task-list"); 

readTaskData();

//* AJOUT D'UNE TACHE
function addTaskBtnClicked() {
    //* Ensuite on Récupère les 3 inputs (pour renseigner un nom, un age, un mail)
    const addTaskInputsUI = document.getElementsByClassName("task-input");
    console.log(addTaskInputsUI);
    //* On crée un objet (vide pour le moment) va stocker les infos du nouvel utilisateur
    let newTask = {};
    //* On fait une boucle pour récupérer les valeurs de chaque input dans le formulaire
    for (let i = 0; i < addTaskInputsUI.length; i++) {
		//* Ci dessous on récupère les key et value (on a des attributs data-key déjà placé en html)
		let key = addTaskInputsUI[i].getAttribute("data-key");
		//* Pour chaque input on récupère la value.
		let value = addTaskInputsUI[i].value;
		//* Pour chaque CLé (age, name, et email on les associe à notre nouvel utilisateur)
		newTask[key] = value;
    }
    //* Enfin on ajoute notre nouvel utilisateur dans la BDD avec .push()
    taskRef.push(newTask);
    console.log("New Task SAVED");
    console.log(`${newTask.label}`);
    //* Pour + de confort on reset le formulaire une fois qu'on a ajouté un user
    formTaskUI.reset();
};

//* LIRE TOUTES LES TACHES
function readTaskData() {
	taskRef.on("value", (snap) => {
		taskListUI.innerHTML = "";
		snap.forEach((childSnap) => {
			//* Key va stocker les ID
			let key = childSnap.key;
			let value = childSnap.val();
			let $li = document.createElement("li");
			//*Phase 5 on fait les icones pour DELETE
			let deleteIconUI=document.createElement('button');
			deleteIconUI.innerText = 'Delete';
			deleteIconUI.setAttribute('class','btn btn-outline-danger mx-3');
			//* Sur les icone en face du nom de la tâche on rajoute un attribut qui contient la key
			//* on veut savoir qui on supprime au click
			deleteIconUI.setAttribute("taskid", key);
			deleteIconUI.addEventListener("click", deleteButtonClicked);
			$li.innerText = value.taskLabel;
			$li.append(deleteIconUI);
			$li.setAttribute("task-key", key);
			$li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
			taskListUI.append($li);
		});
	});
}

//* SUPPRIMER
function deleteButtonClicked(event) {
	console.log(event);
	// event.stopPropagation();
	//* On récupère l'ID de l'utilisateur que l'on veut supprimer via un getAttribute
	//* (cf. la fonciton readUserData(vers la fin, le setAttribute)).
	let taskID = event.target.getAttribute("taskid");
	//* Dans la BDD on vise 1 user en particulier
	const taskRef = dbRef.child('tasks/' + taskID);
	//* Bonus une autre manière de récup le <p></p> qui contient le nom user
	//* Enfin sur cet utilisateur on utilise la fonction .remove()
	taskRef.remove();
};