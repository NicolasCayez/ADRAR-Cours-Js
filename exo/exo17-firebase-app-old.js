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
    console.log(form);
};

function readUserData() {
    //! Exercice : READ (Lecture de la BDD : Tous Les Utilisateurs)
    //! Exercice : READ (Lecture d’un élément de la BDD : Afficher 1 utilisateur)
    //TODO Dans la f° readUserData avant le append(), on va placer un addEventListener sur $li qui écoute "click" et lance la fonction userClicked
};

function userClicked(event) {
    //? Ensuite dans la f° userClicked on capte l'évènement (on s'en sert pour savoir qui on sélectionne)
    //TODO Dans la f° userClicked, dans une variable userID, on va récupérer userID via event.target.getAttribute("user-key");
    //TODO Dans la f° userClicked, 1 variable userRef va faire référence à 1 utilisateur en particulier, on lui assigne dbRef,
    //? On utilise la f° child() pour viser le noeud "users/" concaténé avec userID
    //TODO Dans la f° userClicked, 1 variable userDetailUI récupère ma div avec user-detail
    //TODO Dans la f° userClicked, Ensuite sur userRef on utilise la f° on("value", snap =>{})
    //TODO Dans la f° userClicked, dans la f° =>, on va vider l'innerHTML de userDetailUI
    //TODO Dans la f° userClicked, Ensuite sur snap on va utiliser un forEach pour parcourir le cliché (snap) de notre BDD.
    //TODO Dans la f° userClicked, dans le forEach, 1 variable $p crée un élément <p>
    //TODO Dans la f° userClicked, dans le forEach, On rempli le innerHTML de $p avec childSnap.key et childSnap.val()
    //TODO Dans la f° userClicked, dans le forEach, On rajoute $p dans notre userDetailUI
};

function editButtonClicked(event) {
};

function saveUserBtnClicked() {
};

function deleteButtonClicked(event) {
}
//!Exercice : READ (Lecture d’un element de la BDD : Pré-remplir le formulaire d’un utilisateur)
//TODO On va modifier le display du formUserEditUI à "block"
//TODO On va modifier le display du formUserUI à "none"
//TODO Ensuite on va faire ceci
//TODO Une variable inputId qui récupère (querySelector) l'élément avec la classe .edit-userid
//TODO A la value de inputId on assigne event.target.getAttribute("userid");
//TODO Dans une variable editUserInputUI, on récupère tous les éléments de classe edit-user-input (querySelectorAll ou autre)
//TODO On va parcourir notre BDD avec userRef.on("value", snap => {
//TODO Dans la f° fléchée, faire une boucle for qui parcourt les inputs editUsetInputUI,
//TODO Dans la f° fléchée dans la boucle, dans une variable key, on stock editUserInputsUI[i].getAttribute("data-key");
//TODO Dans la f° fléchée dans la boucle, ensuite à chaque valeur de nos editUserInputsUI[i] on assigne snap.val()[key];
//TODO en dehors de la fonction on(), dans une variable saveBtn, on récupère notre bouton avec l'id edit-user-btn
//TODO en dehors de la fonction on(), sur ce bouton on place un eventlistener au click qui lance saveUserBtnClicked



