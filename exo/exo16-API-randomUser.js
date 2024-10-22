//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
const contactApiSecure =  async () => {
    const rawData = await fetch('https://randomuser.me/api/');
    console.log(rawData);
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
	return transformedData.results[0];
}

let randomUser = await contactApiSecure();
console.log ('randomUser', randomUser);

let UserCard = document.getElementById('userCard').children;
UserCard[0].src = randomUser.picture.large;
UserCard[1].children[0].innerText = \`\${randomUser.name.title}. \${randomUser.name.last} \${randomUser.name.first} \`;
UserCard[1].children[1].innerHTML = \`\${randomUser.email}

Address : \${randomUser.location.postcode} - \${randomUser.location.city}
\${randomUser.location.state} - \${randomUser.location.country}

Phone : \${randomUser.phone}
Cell : \${randomUser.cell}\`;
`;
code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
let resultDivContent = `
<h1>API randomUser</h1>
<div id="userCard" class="card p-3 w-50 mx-auto text-center bg-primary-subtle" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body text-dark">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary fs-5">Go somewhere</a>
    </div>
</div>`
code2.innerHTML = resultDivContent;

//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //

const contactApiSecure =  async () => {
    const rawData = await fetch('https://randomuser.me/api/');
    console.log(rawData);
    
    // Vérification du statut de la réponse
    if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
        console.error("Erreur lors de la récupération des données : ", rawData.statusText);
        return; // Sortir de la fonction si la réponse n'est pas OK
    }

    const transformedData = await rawData.json();
    console.log(transformedData);
	return transformedData.results[0];
}

let randomUser = await contactApiSecure();
console.log ('randomUser', randomUser);

let UserCard = document.getElementById('userCard').children;
UserCard[0].src = randomUser.picture.large;
UserCard[1].children[0].innerText = `${randomUser.name.title}. ${randomUser.name.last} ${randomUser.name.first} `;
UserCard[1].children[1].innerHTML = `${randomUser.email}

Address : ${randomUser.location.postcode} - ${randomUser.location.city}
${randomUser.location.state} - ${randomUser.location.country}

Phone : ${randomUser.phone}
Cell : ${randomUser.cell}`;
