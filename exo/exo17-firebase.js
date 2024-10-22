import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
;
`

txtCode = formatCodeDeclarations(txtCode, [`contactApiSecure`, `rawData`, `transformedData`, `randomUser`, `UserCard`, `picture`, `large`, `name`, `title`, `last`, `first`, `email`, `location`, `postcode`, `city`, `state`, `country`, `phone`, `cell`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
***`
code2.innerHTML = txtConsole;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
