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
 */
//? Lessons pages : parentId = 'menuLessons'
//? Exercises pages : parentId = 'menuExos'
generateHeaderDropdownItem('menuExos', '../../exo/exo1-variables.html', 'Exo1 - Variables');
generateHeaderDropdownItem('menuExos', '../../exo/exo2-calculs.html', 'Exo2 - Calculs');
//? TPs pages : parentId = 'menuTps'

/**
 * Generates a card element for the list pages
 * @function generateCard(parentId,label,text,urlPage)
 * @param {parentId} - id of the parent element nesting the card
 * @param {label} - Title of the element
 * @param {text} - Content of the text box
 * @param {urlPage} - Url of the destination page
*/
//? lessons
// lessons-list page : parentId = 'lessonListCard'
// lesson page : parentId = 'lessonText'

//? exos
// exo-list : parentId = 'exoListCard'
// exo page : parentId = 'textExo' + numero exo (à saisir dans fichier html)
let textExo1 = `Déclarer, initialiser et afficher en console plusieurs variables de chaque type (chaines de caractères, nombre, nombre a virgule, tableaux, objets)
Bonus : Faire une variable qui contient une fonction dans laquelle on fait un log console <strong>« Hello World »<strong>`;
generateCard('exoListCard', 'Exo1 - Variables', textExo1, '../../exo/exo1-variables.html');
generateDetailText('textExo1', textExo1);


let textExo2 = `Mettre en place un programme qui affiche en console le résultat de différents calculs (en utilisant tous les opérateurs de base et des nombres à virgule).
En plus faire un console log d’un calcul ultra complexe.
Mettre en place une variable compteur et utiliser tous les opérateur d’assignement composé.`;
generateCard('exoListCard', 'Exo2 - Calculs', textExo2, '../../exo/exo2-calculs.html');
generateDetailText('textExo2', textExo2);
//? tp-list : parentId = 'tpListCard'
