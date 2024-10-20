import { generateHeaderTitle, generateHeaderDropdown, generateHeaderDropdownItem } from "./scripts/header";
import { generateCard } from "./scripts/listPages";
import { generateDetailText } from "./scripts/detailText";

// Header title generation
generateHeaderTitle();

/**
 * Dropdown menus generation with first element by default (list page)
 * @function generateHeaderDropdown(label,listName,childListUrl,childListLabel)
 * @param {label} - Label of the dopdown list button
 * @param {listName} - Name of the dopdown list
 * @param {childListUrl} - Url of the dropdown first element (list of the other childs)
 * @param {childListLabel} - Label of the dopdown first element (list of the other childs)
 */
generateHeaderDropdown('Cours', 'Lessons', '../../lessons/lessons-list.html', 'Liste des cours');
generateHeaderDropdown('Exos', 'Exos', '../../exo/exo-list.html', 'Liste des exercices');
generateHeaderDropdown('TPs', 'Tps', '../../tp/tp-list.html', 'Liste des TPs');


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

//? ************************************************************************** //
//? Exercises                                                                  //
//? exo-list : parentId = 'exoListCard'                                        //
//? exo pages : parentId = 'textExo' + numero exo (à saisir dans html)         //
//? ************************************************************************** //
let textExo
//* Exo1 - Variables
generateHeaderDropdownItem('menuExos', '../../exo/exo1-variables.html', 'Exo1 - Variables');
textExo = `Déclarer, initialiser et afficher en console plusieurs variables de chaque type (chaines de caractères, nombre, nombre a virgule, tableaux, objets)
Bonus : Faire une variable qui contient une fonction dans laquelle on fait un log console <strong>« Hello World »<strong>`;
generateCard('exoListCard', 'Exo1 - Variables', textExo, '../../exo/exo1-variables.html');
generateDetailText('textExo1', textExo);

//* Exo2 - Calculs
generateHeaderDropdownItem('menuExos', '../../exo/exo2-calculs.html', 'Exo2 - Calculs');
textExo = `Mettre en place un programme qui affiche en console le résultat de différents calculs (en utilisant tous les opérateurs de base et des nombres à virgule).
<br>En plus faire un console log d’un calcul ultra complexe.
<br>Mettre en place une variable compteur et utiliser tous les opérateur d’assignement composé.`;
generateCard('exoListCard', 'Exo2 - Calculs', textExo, '../../exo/exo2-calculs.html');
generateDetailText('textExo2', textExo);

//* Exercice 3 - Phrases
generateHeaderDropdownItem('menuExos', '../../exo/exo3-phrases.html', 'Exo3 - Phrases');
textExo = `Le client, le restaurant "La Pizzeria Raffinata" (le client insiste sur les guillemets)nous a choisi pour réaliser son application mobile dans laquelle on peut directement commander en livraison.
<br>Définissez selon vous toutes les variables pertinentes qui résume la commande d’un utilisateur chez "La Pizzeria Raffinata".
<br>Vous devez faciliter le travail pour l’équipe du Template et ranger toutes ces variables dans une variable qui se nommera SumUpOrderPhrase, cette phrase devra contenir (on utilise les variables précédentes pour former une phrase) :
<br><strong>Merci d’avoir commandé chez "La Pizzeria Raffinata"</strong>`;
generateCard('exoListCard', 'Exo3 - Phrases', textExo, '../../exo/exo3-phrases.html');
generateDetailText('textExo3', textExo);

//* Exercice 4 - Arrays
generateHeaderDropdownItem('menuExos', '../../exo/exo4-arrays.html', 'Exo4 - Arrays');
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
generateCard('exoListCard', 'Exo4 - Arrays', textExo, '../../exo/exo4-arrays.html');
generateDetailText('textExo4', textExo);

//* Exercice 5 - Fonctions
generateHeaderDropdownItem('menuExos', '../../exo/exo5-fonctions.html', 'Exo5 - Fonctions');
textExo = `Créer une fonction qui prend un nombre en paramètre
<br>La ƒ° doit afficher en console: 33 + le nombre reçu en paramètre
<br>Créer une autre fonction qui prend 2 nombres en paramètre
<br>Cette seconde ƒ° doit afficher en console l'ADDITION des 2 nombres reçus en paramètre`;
generateCard('exoListCard', 'Exo5 - Fonctions', textExo, '../../exo/exo5-fonctions.html');
generateDetailText('textExo5', textExo);

//* Exercice 6 - if-Else
generateHeaderDropdownItem('menuExos', '../../exo/exo6-if-else.html', 'Exo6 - if-Else');
textExo = `Créer une fonction qui reçoit un tableau de 3 notes ou le tableau des notes (cf exo avant) et qui calcule une moyenne entre ces 3 notes (Tableau de note)
<br>Dans cette ƒ°, SI la moyenne est supérieure ou égale à 15 on renvoi une string <strong>(très Bien)</strong>
<br>Dans cette ƒ°, SINON SI la moyenne est supérieure ou égale à 10 on renvoi une string <strong>(assez Bien)</strong>
<br>Dans cette ƒ°, SINON renvoi une string <strong>(refus)</strong>`;
generateCard('exoListCard', 'Exercice 6 - if-Else', textExo, '../../exo/exo6-if-else.html');
generateDetailText('textExo6', textExo);

//? ************************************************************************** //
//? TPs                                                                        //
//? tp-list : parentId = 'tpListCard'                                          //
//? tp page : parentId = 'tpText' + numero tp (à saisir dans html)             //
//? ************************************************************************** //
