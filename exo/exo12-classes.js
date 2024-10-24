//* ********************************************************************************* //
//* PREMIERE PARTIE : AFFICHAGE HTML - EXERCICE EN DESSOUS                            //
//* ********************************************************************************* //
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
//* Exo Class IMC
// Créer un programme permettant de Calculer l’IMC d’une personne
// - Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
class Imc {
	constructor(name, weight, height) {
		this.name = name;
		this.weight = weight;
		this.height = height;
	}
	// - Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la
  	// virgule si possible)
	imcCalcul() {
		// imc = weight / height²
		return this.weight/(this.height*this.height);
	}
	// - Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console :
	// Le nom de la personne, son poids, sa taille et son imc dans une phrase
	display(){
		console.log(\`\${this.name} (\${this.weight} kg, \${this.height} M) a un IMC de: \${this.imcCalcul(this).toFixed(2)}\`)
	}
}

// - En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau
// de nouvelle instances de la class) (voir discord ou " )
let list = [
	new Imc("Sébastien Chabal", 135, 1.7),
	new Imc("Escaladeuse", 45, 1.68),
	new Imc("JOJO ", 300, 2),
	new Imc("Gontrand ", 90, 1.75),
	new Imc("Colonel Clock ", 200, 1.75),
	new Imc("JOsiane de la Vega", 99, 1.55)
	];
// - Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la
// fonction display
list.forEach(uneCase => {
	uneCase.display();
});

//* Exo Class PME
// Gérer une PME
// CDC
// Un Salarié a un nom, prénom, âge, salaire mensuel
// Il est payé sur N mois.
// En plus il y a XXX de charges
// Une Pme c’est un nom, une équipe de plusieurs salariés
// Grace à ses ventes elle a des revenus R
// Mais aussi … :
// - des frais fixes FF (impôts etc…)
// - Des frais d’achats de matériel et de logiciels FA
// - Créer une classe Pme et une classe Employee
// - Utiliser des fonctions
// - Faire le bilan annuel de l’entreprise et l’afficher en console.
// Détails :
// - 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
// - R = 300000 (trois cent mille)
// - FF = 20000 (vingt mille)
// - FA = 50000 (cinquante mille)
// - N = 12
// - XXX = 90%

class Pme{
	constructor(name, team, rPme, ffPme, faPme){
		this.name = name;
		this.team = team;
		this.rPme = rPme;
		this.ffPme = ffPme;
		this.faPme = faPme;
	}
	displayBilan(){
		let totalCost = 0;
		this.team.forEach(unEmploye => {
			totalCost += unEmploye.monthlyWage*unEmploye.duration*(1+unEmploye.taxBurden);
		})
		console.log(
			\`
			-------------------MA PME-------------------
			\${this.name} -  : Cout Initial : \${this.ffPme+this.faPme}
			\${this.name} -  : Cout Total Equipe : \${totalCost}
			\${this.name} -  : VENTES : \${this.rPme}
			\${this.name} -  : BILAN : \${this.rPme-(this.ffPme+this.faPme+totalCost)}\`);
	}
}

class Employe{
	constructor(firstName, lastName, age, monthlyWage, duration, taxBurden){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.monthlyWage = monthlyWage;
		this.duration = duration;
		this.taxBurden = taxBurden;
	}
}
let employees = [
	new Employe("Sarah", "Connor", 46, 2000, 12, 0.9),
	new Employe("Helen", "Ripley", 250, 3000, 12, 0.9),
	new Employe("John ", "Wick", 42, 4000, 12, 0.9)
	];
let maPetiteEntreprise = new Pme("Ma Petite Entreprise", employees, 300000, 20000, 50000);
maPetiteEntreprise.displayBilan();

//* Exo Class COMPTES BANCAIRES.
// Enoncé
// Gérer des compte en banque
// Consignes
// - Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
// l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
// un autre.
// - Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui
// dépassent le solde du compte bancaire)
// Détails
class CompteBancaire{
	constructor(name, balance){
		this.name = name;
		this.balance = balance;
	}

	isBalanceOk(amount){
		if(amount <= this.balance){
			// Solde suffisant
			return true;
		}else{
			// Solde insuffisant
			return false;
		}
	}

	credit(amount){
		this.balance += amount;
		console.log(\`Ajout de: \${amount}€ pour: \${this.name}\`);
	}

	debit(amount){
		if(this.isBalanceOk(amount)){
			this.balance -= amount;
			console.log(\`Retrait de: \${amount}€ pour: \${this.name}\`);
		}else{
			// Solde insuffisant
			console.log(\`-----> \${this.name}, retrait de \${amount}€ refusé avec solde: \${this.balance}€\`);
		}
	}

	display(){
		console.log(\`Titulaire: \${this.name}, solde: \${this.balance}€\`);
	}

	transfert(destinationAccount, amount){
		if(this.isBalanceOk(amount)){
			console.log(\`Virement de: \${amount}€ de: \${this.name} vers: \${destinationAccount.name}\`);
			destinationAccount.credit(amount);
			this.debit(amount);
		}else{
			// Solde insuffisant
			console.log(\`-----> \${this.name}, virement de \${amount}€ refusé avec solde: \${this.balance}€\`);
		}
	}
}
// Faire une scénario avec gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
let accounts = {
	alex: new CompteBancaire("Alex", 0),
	clovis: new CompteBancaire("Clovis", 0),
	marco: new CompteBancaire("Marco ", 0)
};
accounts.alex.credit(1000);
accounts.clovis.credit(1000);
accounts.marco.credit(1000);
// Puis Alex retire 100
accounts.alex.debit(100);
// Puis Marco fait un virement de 300 à Clovis
accounts.marco.transfert(accounts.clovis, 300)
// Enfin Alex tente un retrait de 1200
accounts.alex.debit(1200);
// Afficher tous les soldes finaux.
// Ces compte sont placés dans un tableau associatif de clients
for(let client in accounts){
	accounts[client].display();
}`;

code1.innerHTML = hljs.highlight('js', txtCode).value;

// right part
let code2 = document.getElementById('resultDiv');
if(code2 != null){
	let resultDivContent = `Sébastien Chabal (135 kg, 1.7 M) a un IMC de: 46.71
<br>Escaladeuse (45 kg, 1.68 M) a un IMC de: 15.94
<br>JOJO  (300 kg, 2 M) a un IMC de: 75.00
<br>Gontrand  (90 kg, 1.75 M) a un IMC de: 29.39
<br>Colonel Clock  (200 kg, 1.75 M) a un IMC de: 65.31
<br>JOsiane de la Vega (99 kg, 1.55 M) a un IMC de: 41.21
<br>
<br>			-------------------MA PME-------------------
<br>			Ma Petite Entreprise -  : Cout Initial : 70000
<br>			Ma Petite Entreprise -  : Cout Total Equipe : 205200
<br>			Ma Petite Entreprise -  : VENTES : 300000
<br>			Ma Petite Entreprise -  : BILAN : 24800
<br>
<br>Ajout de: 1000€ pour: Alex
<br>Ajout de: 1000€ pour: Clovis
<br>Ajout de: 1000€ pour: Marco
<br>Retrait de: 100€ pour: Alex
<br>Virement de: 300€ de: Marco  vers: Clovis
<br>Ajout de: 300€ pour: Clovis
<br>Retrait de: 300€ pour: Marco
<br>-----> Alex, retrait de 1200€ refusé avec solde: 900€
<br>Titulaire: Alex, solde: 900€
<br>Titulaire: Clovis, solde: 1300€
<br>Titulaire: Marco , solde: 700€`;
	code2.innerHTML = resultDivContent;
};
//* ********************************************************************************* //
//* EXERCICE EN DESSOUS                                                               //
//* ********************************************************************************* //
//* Exo Class IMC
// Créer un programme permettant de Calculer l’IMC d’une personne
// - Créer une classe Imc avec un constructeur qui recevra un nom, un poids, une taille
class Imc {
	constructor(name, weight, height) {
		this.name = name;
		this.weight = weight;
		this.height = height;
	}
	// - Créer une fonction de calcul d’IMC, qui retourne le résultat du calcul (à 2 nombre après la
  	// virgule si possible)
	imcCalcul() {
		// imc = weight / height²
		return this.weight/(this.height*this.height);
	}
	// - Créer une fonction d’affichage « display », elle a pour rôle d’afficher en console :
	// Le nom de la personne, son poids, sa taille et son imc dans une phrase
	display(){
		console.log(`${this.name} (${this.weight} kg, ${this.height} M) a un IMC de: ${this.imcCalcul(this).toFixed(2)}`)
	}
}

// - En dehors de la class (donc dans le programme principal), récupérer la variable list (un tableau
// de nouvelle instances de la class) (voir discord ou " )
let list = [
	new Imc("Sébastien Chabal", 135, 1.7),
	new Imc("Escaladeuse", 45, 1.68),
	new Imc("JOJO ", 300, 2),
	new Imc("Gontrand ", 90, 1.75),
	new Imc("Colonel Clock ", 200, 1.75),
	new Imc("JOsiane de la Vega", 99, 1.55)
	];
// - Trouver un moyen de parcourir les éléments dans la variable list, sur chaque element utiliser la
// fonction display
list.forEach(uneCase => {
	uneCase.display();
});

//* Exo Class PME
// Gérer une PME
// CDC
// Un Salarié a un nom, prénom, âge, salaire mensuel
// Il est payé sur N mois.
// En plus il y a XXX de charges
// Une Pme c’est un nom, une équipe de plusieurs salariés
// Grace à ses ventes elle a des revenus R
// Mais aussi … :
// - des frais fixes FF (impôts etc…)
// - Des frais d’achats de matériel et de logiciels FA
// - Créer une classe Pme et une classe Employee
// - Utiliser des fonctions
// - Faire le bilan annuel de l’entreprise et l’afficher en console.
// Détails :
// - 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
// - R = 300000 (trois cent mille)
// - FF = 20000 (vingt mille)
// - FA = 50000 (cinquante mille)
// - N = 12
// - XXX = 90%

class Pme{
	constructor(name, team, rPme, ffPme, faPme){
		this.name = name;
		this.team = team;
		this.rPme = rPme;
		this.ffPme = ffPme;
		this.faPme = faPme;
	}
	displayBilan(){
		let totalCost = 0;
		this.team.forEach(unEmploye => {
			totalCost += unEmploye.monthlyWage*unEmploye.duration*(1+unEmploye.taxBurden);
		})
		console.log(
			`
			-------------------MA PME-------------------
			${this.name} -  : Cout Initial : ${this.ffPme+this.faPme}
			${this.name} -  : Cout Total Equipe : ${totalCost}
			${this.name} -  : VENTES : ${this.rPme}
			${this.name} -  : BILAN : ${this.rPme-(this.ffPme+this.faPme+totalCost)}`);
	}
}

class Employe{
	constructor(firstName, lastName, age, monthlyWage, duration, taxBurden){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.monthlyWage = monthlyWage;
		this.duration = duration;
		this.taxBurden = taxBurden;
	}
}
let employees = [
	new Employe("Sarah", "Connor", 46, 2000, 12, 0.9),
	new Employe("Helen", "Ripley", 250, 3000, 12, 0.9),
	new Employe("John ", "Wick", 42, 4000, 12, 0.9)
	];
let maPetiteEntreprise = new Pme("Ma Petite Entreprise", employees, 300000, 20000, 50000);
maPetiteEntreprise.displayBilan();

//* Exo Class COMPTES BANCAIRES.
// Enoncé
// Gérer des compte en banque
// Consignes
// - Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de
// l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à
// un autre.
// - Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui
// dépassent le solde du compte bancaire)
// Détails
class CompteBancaire{
	constructor(name, balance){
		this.name = name;
		this.balance = balance;
	}

	isBalanceOk(amount){
		if(amount <= this.balance){
			// Solde suffisant
			return true;
		}else{
			// Solde insuffisant
			return false;
		}
	}

	credit(amount){
		this.balance += amount;
		console.log(`Ajout de: ${amount}€ pour: ${this.name}`);
	}

	debit(amount){
		if(this.isBalanceOk(amount)){
			this.balance -= amount;
			console.log(`Retrait de: ${amount}€ pour: ${this.name}`);
		}else{
			// Solde insuffisant
			console.log(`-----> ${this.name}, retrait de ${amount}€ refusé avec solde: ${this.balance}€`);
		}
	}

	display(){
		console.log(`Titulaire: ${this.name}, solde: ${this.balance}€`);
	}

	transfert(destinationAccount, amount){
		if(this.isBalanceOk(amount)){
			console.log(`Virement de: ${amount}€ de: ${this.name} vers: ${destinationAccount.name}`);
			destinationAccount.credit(amount);
			this.debit(amount);
		}else{
			// Solde insuffisant
			console.log(`-----> ${this.name}, virement de ${amount}€ refusé avec solde: ${this.balance}€`);
		}
	}
}
// Faire une scénario avec gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
let accounts = {
	alex: new CompteBancaire("Alex", 0),
	clovis: new CompteBancaire("Clovis", 0),
	marco: new CompteBancaire("Marco ", 0)
};
accounts.alex.credit(1000);
accounts.clovis.credit(1000);
accounts.marco.credit(1000);
// Puis Alex retire 100
accounts.alex.debit(100);
// Puis Marco fait un virement de 300 à Clovis
accounts.marco.transfert(accounts.clovis, 300)
// Enfin Alex tente un retrait de 1200
accounts.alex.debit(1200);
// Afficher tous les soldes finaux.
// Ces compte sont placés dans un tableau associatif de clients
for(let client in accounts){
	accounts[client].display();
}