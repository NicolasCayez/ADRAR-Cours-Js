import { formatCodeText, formatCodeDeclarations } from "../scripts/codeTextReplacer";
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
UserCard[1].children[2].addEventListener`

txtCode = formatCodeDeclarations(txtCode, [`contactApiSecure`, `rawData`, `transformedData`, `randomUser`, `UserCard`, `picture`, `large`, `name`, `title`, `last`, `first`, `email`, `location`, `postcode`, `city`, `state`, `country`, `phone`, `cell`]);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
***`
code2.innerHTML = txtConsole;
