import { generateHeaderDropdownItem } from "/scripts/header";
import { generateCard } from "/scripts/listPages";
import { generateDetailPdf, generateDetailText } from "/scripts/detailText";

//? generation menu element + card in list
/**
 * Generates a dropdown menu element
 * @function generateHeaderDropdownItem(parentId,url,label)
 * @param {parentId} - Id of the parent element nesting the card
 * @param {url} - Url of the list element destination page
 * @param {label} - Label of the list element
 * 
 * Generates a card element for the list pages
 * @function generateCard(parentId,label,text,urlPage)
 * @param {parentId} - id of the parent element nesting the card
 * @param {label} - Title of the element
 * @param {text} - Content of the text box
 * @param {urlPage} - Url of the destination page
*/
//? ************************************************************************** //
//? Lessons                                                                    //
//? lesson-list : parentId = 'lessonListCard'                                  //
//? lesson pages : parentId = 'textLesson' + numero leçon (à saisir dans html) //
//? ************************************************************************** //
export function createLessons(){
    let textLesson

    //* Leçon 1 - Intro & Bases
    generateHeaderDropdownItem('menuLessons', '/lessons/lesson1-intro-bases.html', 'Leçon 1 - Intro & Bases');
    textLesson = `<strong>Présentation de JavaScript</strong>
    <br><strong>Setup + Vite</strong>
    <br><strong>Les variables</strong>
    <br><strong>Nombres / Calculs /Modulo ☺/ Incrémenter / Assignement Composé</strong>
    <br><strong>Chaînes de caractères</strong>
    <br><strong>Les tableaux</strong>
    <br><strong>Fonctions / Fonctions Fléchées / return / paramètres / paramètres par défaut / scope</strong>
    <br><strong>Opérateurs de comparaison / condition ternaire</strong>
    <br><strong>Condition IF ELSE</strong>
    <br><strong>Objets</strong>
    <br><strong>Boucle While / For / ForEach / For …of / For …in / map</strong>
    <br><strong>Spread Operator</strong>
    <br><strong>Gestion des erreurs</strong>`;
    generateCard('lessonListCard', 'Leçon 1 - Intro & Bases', textLesson, '/lessons/lesson1-intro-bases.html');
    generateDetailText('textLesson1', textLesson);
    generateDetailPdf('pdfLesson1', '/pdf/lesson1-intro-bases.pdf');

    //* Leçon 2 - DOM
    generateHeaderDropdownItem('menuLessons', '/lessons/lesson2-dom.html', 'Leçon 2 - DOM');
    textLesson = `<strong>Présentation</strong>
    <br><strong>Sélectionner des éléments du DOM</strong>
    <br><strong>Placer des éléments du DOM</strong>
    <br><strong>Créer - Modifier - Supprimer des éléments du DOM</strong>
    <br><strong>Modifier les attributs des éléments du DOM</strong>
    <br><strong>Gérer les évènements du DOM</strong>
    <br><strong>Web Storage</strong>
    <br><strong>Sélectionner</strong>`;
    generateCard('lessonListCard', 'Leçon 2 - DOM', textLesson, '/lessons/lesson2-dom.html');
    generateDetailText('textLesson2', textLesson);
    generateDetailPdf('pdfLesson2', '/pdf/lesson2-dom.pdf');
}
//? ************************************************************************** //
//? Exercises                                                                  //
//? exo-list : parentId = 'exoListCard'                                        //
//? exo pages : parentId = 'textExo' + numero exo (à saisir dans html)         //
//? ************************************************************************** //
export function createExercises(){
    let textExo

    //* Exo1 - Variables
    generateHeaderDropdownItem('menuExos', '/exo/exo1-variables.html', 'Exercice 1 - Variables');
    textExo = `Déclarer, initialiser et afficher en console plusieurs variables de chaque type (chaines de caractères, nombre, nombre a virgule, tableaux, objets)
    Bonus : Faire une variable qui contient une fonction dans laquelle on fait un log console <strong>« Hello World »<strong>`;
    generateCard('exoListCard', 'Exo1 - Variables', textExo, '/exo/exo1-variables.html');
    generateDetailText('textExo1', textExo);

    //* Exo2 - Calculs
    generateHeaderDropdownItem('menuExos', '/exo/exo2-calculs.html', 'Exercice 2 - Calculs');
    textExo = `Mettre en place un programme qui affiche en console le résultat de différents calculs (en utilisant tous les opérateurs de base et des nombres à virgule).
    <br>En plus faire un console log d’un calcul ultra complexe.
    <br>Mettre en place une variable compteur et utiliser tous les opérateur d’assignement composé.`;
    generateCard('exoListCard', 'Exo2 - Calculs', textExo, '/exo/exo2-calculs.html');
    generateDetailText('textExo2', textExo);

    //* Exercice 3 - Phrases
    generateHeaderDropdownItem('menuExos', '/exo/exo3-phrases.html', 'Exercice 3 - Phrases');
    textExo = `Le client, le restaurant "La Pizzeria Raffinata" (le client insiste sur les guillemets)nous a choisi pour réaliser son application mobile dans laquelle on peut directement commander en livraison.
    <br>Définissez selon vous toutes les variables pertinentes qui résume la commande d’un utilisateur chez "La Pizzeria Raffinata".
    <br>Vous devez faciliter le travail pour l’équipe du Template et ranger toutes ces variables dans une variable qui se nommera SumUpOrderPhrase, cette phrase devra contenir (on utilise les variables précédentes pour former une phrase) :
    <br><strong>Merci d’avoir commandé chez "La Pizzeria Raffinata"</strong>`;
    generateCard('exoListCard', 'Exo3 - Phrases', textExo, '/exo/exo3-phrases.html');
    generateDetailText('textExo3', textExo);

    //* Exercice 4 - Arrays
    generateHeaderDropdownItem('menuExos', '/exo/exo4-arrays.html', 'Exercice 4 - Arrays');
    textExo = `<strong>Exercice 1</strong>
    <br>Créer 1 variable pour un nom,
    <br>Créer une variable pour un âge,
    <br>Créer une variable passions qui est un tableau qui contient 2 chaînes de caractères (au choix)
    <br>Puis créer une variable tabUser qui est un tableau qui contient les variable du
    nom, de l'âge et passions
    <br>en Console on affiche le tabUser
    <br>en passant par tabUser on veut afficher en console uniquement les passions
    <br>en passant par tabUser on veut afficher en console uniquement la 2ème passion
    <br><strong>Exercice 2</strong>
    <br>créer un nouveau tableau qui contient des trucs
    <br>allez se renseigner la ƒ° push()
    <br>utiliser push pour ajouter un nouveau truc au tableau
    <br>On affiche en console ce tableau
    <br><strong>Exercice 3</strong>
    <br>Créer 2 variables leNom et lePrénom
    <br>Créer un tableau laPhrase et on y ajoute via push, Le nom ,Le prénom Les
    initiales
    <br>Afficher le tableau dans la console le nom le prénom et les initiales`;
    generateCard('exoListCard', 'Exo4 - Arrays', textExo, '/exo/exo4-arrays.html');
    generateDetailText('textExo4', textExo);

    //* Exercice 5 - Fonctions
    generateHeaderDropdownItem('menuExos', '/exo/exo5-fonctions.html', 'Exercice 5 - Fonctions');
    textExo = `Créer une fonction qui prend un nombre en paramètre
    <br>La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
    <br>Créer une autre fonction qui prend 2 nombres en paramètre
    <br>Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre`;
    generateCard('exoListCard', 'Exo5 - Fonctions', textExo, '/exo/exo5-fonctions.html');
    generateDetailText('textExo5', textExo);

    //* Exercice 6 - if-Else
    generateHeaderDropdownItem('menuExos', '/exo/exo6-if-else.html', 'Exercice 6 - if-Else');
    textExo = `Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (cf exo avant) et qui calcule une moyenne entre ces 3 notes (Tableau de note)
    <br>Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string <strong>(très Bien)</strong>
    <br>Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string <strong>(assez Bien)</strong>
    <br>Dans cette ƒ°, SINON renvoi une string <strong>(refus)</strong>`;
    generateCard('exoListCard', 'Exercice 6 - if-Else', textExo, '/exo/exo6-if-else.html');
    generateDetailText('textExo6', textExo);

    //* Exercice 7 - Objects
    generateHeaderDropdownItem('menuExos', '/exo/exo7-objects.html', 'Exercice 7 - Objects');
    textExo = `Faire l'exo4 en mode objet
    <br>(un objet user avec des propriétés pour le nom age et passions qui est lui aussi un objet avec 2 propriétés`;
    generateCard('exoListCard', 'Exercice 7 - Objects', textExo, '/exo/exo7-objects.html');
    generateDetailText('textExo7', textExo);

    //* Exercice 8 - Boucles
    generateHeaderDropdownItem('menuExos', '/exo/exo8-boucles.html', 'Exercice 8 - Boucles');
    textExo = `<strong>JS map phase 1</strong>
    <br>Côté template html rajouter plein de tags \&ltp>
    <br>On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
    <br>On va faire un console log de lesTxt
    <br><strong>JS map Phase 2</strong>
    <br>Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
    <br>On console log la variables textesTab
    <br>On transforme le HTMLCollection(qui contient tous nos tags \&ltp>) en Array classique
    <br><strong>JS Map Phase 3</strong> (on peut travailler sur un Array)
    <br>Sur textesTab on va utiliser la ƒ° map(),
    <br>Dans map(), on va lui passer en param une fonction fléchée qui elle a en paramètre une variable temporaire (nom de la variable au choix)
    <br>Cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire`;
    generateCard('exoListCard', 'Exercice 8 - Boucles', textExo, '/exo/exo8-boucles.html');
    generateDetailText('textExo8', textExo);

    //* Exercice 9 - DOM - Créer éléments
    generateHeaderDropdownItem('menuExos', '/exo/exo9-DOM-creer-elements.html', 'Exercice 9 - DOM - créer éléments');
    textExo = `via JS afficher le profil utilisateur dans la page web
    <br>let userData = {
    <br>____name: \`Moss\`,
    <br>____email: \`moss@itcrowd.com\`,
    <br>____age: 35,
    <br>____hobby: \`paper toss\`,
    <br>____img: \`https://www.hallofseries.com/wp-content/uploads/2021/12/it-crowd.jpg\`
    <br>}`;
    generateCard('exoListCard', 'Exercice 9 - DOM - créer éléments', textExo, '/exo/exo9-DOM-creer-elements.html');
    generateDetailText('textExo9', textExo);

    //* Exercice 10 - DOM - Ajout texte
    generateHeaderDropdownItem('menuExos', '/exo/exo10-DOM-ajout-texte.html', 'Exercice 10 - DOM - Ajout texte');
    textExo = `Créer une ƒ° ajouterTexte qui prend 2 paramètres : pseudo et duTexte
    <br>La fonction a pour but de créer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte, dans la page
    <br>(Bonus) : Dans le paragraphe le pseudo est affiché en gras`;
    generateCard('exoListCard', 'Exercice 10 - DOM - Ajout texte', textExo, '/exo/exo10-DOM-ajout-texte.html');
    generateDetailText('textExo10', textExo);

    //* Exercice 11 - DOM - Ajout texte
    generateHeaderDropdownItem('menuExos', '/exo/exo11-DOM-reagir-clic-clavier.html', 'Exercice 11 - DOM - React clic et clavier');
    textExo = `<strong>Exercice : réagir au click</strong>
    <br>Dans une page web mettre en place un titre h1, faire en sorte que lorsqu’on click sur le titre celamodifie son texte
    <br><strong>Exercice réagir au click 2</strong>
    <br>Dans une page web mettre en place 1 titre et trois liens ou boutons
    <br>En css créer une classe
    <br>En utilisant les principales fonction de classList ,via JS, faire en sorte que le premier lien AJOUTE la classe css au titre de la page, le second lien SUPPRIME la classe et le troisième lien fais un TOGGLE de la classe sur le titre.
    <br><strong>Exercice : réagir au clavier</strong>
    <br>Dans ce cas là plusieurs évènements s’offrent à nous, keyup, keypress ou keydown,
    <br>Dans une page web : rajouter un formulaire (au moins un textarea)
    <br><strong>Exercice : Réagir au clavier 2</strong>
    <br>Dans une page web on a un input ou textarea, et un bouton, faire en sorte que : Au bout de 5 lettres tapées au clavier cela Désactive le bouton :
    `;
    generateCard('exoListCard', 'Exercice 11 - DOM - React clic et clavier', textExo, '/exo/exo11-DOM-reagir-clic-clavier.html');
    generateDetailText('textExo11', textExo);

    //* Exercice 12 - Classes
    generateHeaderDropdownItem('menuExos', '/exo/exo12-classes.html', 'Exercice 12 - Classes');
    textExo = `<strong>Exo Class IMC</strong>
    <br>Créer un programme permettant de Calculer l’IMC d’une personne
    <br><strong>Exo Class PME</strong>
    <br>Gérer une PME
    <br>CDC
    <br>Un Salarié a un nom, prénom, âge, salaire mensuel
    <br>Il est payé sur N mois.
    <br>En plus il y a XXX de charges
    <br>Une Pme c’est un nom, une équipe de plusieurs salariés
    <br>Grace à ses ventes elle a des revenus R
    <br>Mais aussi … :
    <br>- des frais fixes FF (impôts etc…)
    <br>- Des frais d’achats de matériel et de logiciels FA
    <br><strong>Exo Class COMPTES BANCAIRES.</strong>
    <br>Enoncé
    <br>Gérer des compte en banque
    `;
    generateCard('exoListCard', 'Exercice 12 - Classes', textExo, '/exo/exo12-classes.html');
    generateDetailText('textExo12', textExo);

    //* Exercice 13 - Contacter API
    generateHeaderDropdownItem('menuExos', '/exo/exo13-contacter-API.html', 'Exercice 13 - Contacter API');
    textExo = `Avec ce EndPoint d’api
    <br>https://pokeapi.co/api/v2/pokemon
    <br>Affichez dans une page web le nom des 20 premiers Pokemon
    `;
    generateCard('exoListCard', 'Exercice 13 - Contacter API', textExo, '/exo/exo13-contacter-API.html');
    generateDetailText('textExo13', textExo);

    //* Exercice 14 - DOM events
    generateHeaderDropdownItem('menuExos', '/exo/exo14-DOM-events.html', 'Exercice 14 - DOM events');
    textExo = `<strong>Exercice : réagir à mouseleave</strong>
    <br>Lorsque la souris de l’utilisateur s’en va d’un élément html.
    <br>Dans une page web rajouter un titre (h1, h2 ou h3 au choix) il est en display none en CSS.
    <br>Ensuite sur toute la page surveiller l’évènement mouseleave de manière à faire apparaitre le titre
    <br>en mettant son display en « block » (ajouter d’autre modifications du titre via js notamment au
    <br>niveau du style)
    <br><strong>Exercice DOM SetTimeout</strong>
    <br>Aller se renseigner sur l’utilisation de la fonction setT
    <br>Dans une page web, en utilisant la fonction setTimeout, faire en sorte qu’au bout de 3 secondes
    <br>(soit 3000 ms), un titre apparait sur la page et des modification du style sont effectuées.`;
    generateCard('exoListCard', 'Exercice 14 - DOM events', textExo, '/exo/exo14-DOM-events.html');
    generateDetailText('textExo14', textExo);

    //* Exercice 15 - Regexp
    generateHeaderDropdownItem('menuExos', '/exo/exo15-Regexp.html', 'Exercice 15 - Regexp');
    textExo = `Dans l’exercice suivant nous allons mettre en place une page web qui comporte un formulaire (1 input pour le mail et un pour le mot de passe, et une div dans laquelle on affichera des messages d’erreur)
    <br>Sur l’input du mail on va surveiller le clavier et utiliser la regex du mail (expliquée précédemment) ainsi que la fonction .test( )
    <br>Si le mail a un format valide Alors on affiche l’input en Vert sinon le mail n’est pas valide et on
    <br>affiche l’input en rouge
    <br>Sur l’input du mot de passe nous allons contrôler la longueur du mot de passe (il doit être compris entre 6 et 8 caractères) auquel cas cela affiche des messages d’erreurs correspondantes
    <br>Ensuite sur cet input nous allons utiliser les regex charDecimal et charSpecial ainsi que la fonction match( ), si le mot de passe ne match pas la regex charDecimal on affiche un message à l’utilisateur, on va faire pareil pour la regex charSpecial.
    <br>Si l’utilisateur à un mot de passe valide on affiche un message de confirmation`;
    generateCard('exoListCard', 'Exercice 15 - Regexp', textExo, '/exo/exo15-Regexp.html');
    generateDetailText('textExo15', textExo);

    //* Exercice 16 - API randomUser
    generateHeaderDropdownItem('menuExos', '/exo/exo16-API-randomUser.html', 'Exercice 16 - API randomUser');
    textExo = `<strong>Exo API RandomUser</strong>
    // https://randomuser.me/api/
    <br>En js vous aller contacter l'API afin d'afficher les données dans la divCard (si possible en respectant le template)On va afficher 
    <br>l'image de profil
    <br>titre (mr ou mme) le nom le prenom 
    <br>l'email
    <br>l'adresse complete (Num rue nom rue, ville, pays)
    <br>Tél 
    <br>Ensuite on a un button si on click dessus cela recharge la div avec un nouvel utilisateur`;
    generateCard('exoListCard', 'Exercice 16 - API randomUser', textExo, '/exo/exo16-API-randomUser.html');
    generateDetailText('textExo16', textExo);

    //* Exercice 17 - Firebase
    generateHeaderDropdownItem('menuExos', '/exo/exo17-firebase.html', 'Exercice 17 - Firebase');
    textExo = `<strong>Exo firebase</strong>
    <br>
    <br>Nous allons utiliser Javascript avec une base de donnée automatiquement hébergée en ligne,
    Firebase, il s’agit d’une solution proposée par google contenir plein d’outils dont des systèmes de
    base de données, au même titre que AWS (Amazon Web Service) Microsoft Azure, MongoDB ou
    encore le concurrent direct et open-source, Supabase.
    <br>
    <br>Il s’agit d’un BAAS (Backend As A Service), c’est à dire que plutôt que d’avoir à créer et gérer et
    configurer nous même la partie Backend de notre application nous utiliserons celui que Google
    (ou autre) nous met à disposition.
    <br>
    <br>Dans Firebase, il y a donc plusieurs outils mais pour l’exemple nous allons utiliser la
    REALTIME DATABASE (une base de données en temps réel) qui est en NoSQL (Not Only SQL), en
    l’occurence nous allons travailler sur une BDD organisée en JSON.`;
    generateCard('exoListCard', 'Exercice 17 - Firebase', textExo, '/exo/exo17-firebase.html');
    generateDetailText('textExo17', textExo);
}
//? ************************************************************************** //
//? TPs                                                                        //
//? tp-list : parentId = 'tpListCard'                                          //
//? tp page : parentId = 'tpText' + numero tp (à saisir dans html)             //
//? ************************************************************************** //
export function createTps(){
    let textTp;

    //* TP 3 - Firebase - ToDo list
    generateHeaderDropdownItem('menuTps', '/tp/tp3-regex-secu-form.html', 'TP 3 - Regex - Sécurité formulaire');
    textTp = `<strong>Regex - Sécurité formulaire</strong>
    <br>1 formulaire de connexion 
    <br>1 formulaire d'inscription 
    <br>1 bouton permet de switcher entre les 2 formulaire 
    <br>
    <br>Utiliser des regex pour sécuriser les inputs des formulaire en affichant des messages d'erreurs ou de confirmation pour les input des formulaires : 
    <ul>
    <li>Vérifier le format du mail</li>
    <li>vérifier la conformité du mot de passe (contient un chiffre, un caractère spécial, doit être entre 6 et 12 caractères</li>
    <li>les inputs doivent aussi empecher l'injection de code JS malveillant (attasque xss)</li>
    </ul>`;
    generateCard('tpListCard', 'TP 3 - Regex - Sécurité formulaire', textTp, '/tp/tp3-regex-secu-form.html');
    generateDetailText('textTp3', textTp);

    //* TP 5 - Firebase - ToDo list
    generateHeaderDropdownItem('menuTps', '/tp/tp5-firebase-todo-list.html', 'TP 5 - Firebase - ToDo list');
    textTp = `<strong>Firebase - ToDo list</strong>
    <br>Faire une app de TodoList avec de la lecture de base de données pour afficher la liste des taches 
    <br>La possibilité de rajouter des taches 
    <br>La possibilité de supprimer une tache`;
    generateCard('tpListCard', 'TP 5 - Firebase - ToDo list', textTp, '/tp/tp5-firebase-todo-list.html');
    generateDetailText('textTp5', textTp);
}
