import javascriptLogo from '/javascript.svg'
import { generateHeaderTitle, generateHeaderDropdown, generateHeaderDropdownItem } from "/scripts/header";
import { generateFooterDate } from '/scripts/footer';
import { generateCitation } from '/scripts/citation';
import { createLessons, createExercises, createTps } from '/scripts/pageCreations';

// Header title generation
generateHeaderTitle();
generateFooterDate();
generateCitation();

// Main page content
let welcome = document.getElementById('welcome')
if(welcome != null){
    welcome.innerHTML = `
    <div class="d-flex row">
        <a class="col-3" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" height="150px" alt="JavaScript logo" />
        </a>
        <h1 class="col mt-auto" >Hub des cours de JavaScript</h1>
    </div>`
    }

/**
 * Dropdown menus generation with first element by default (list page)
 * @function generateHeaderDropdown(label,listName,childListUrl,childListLabel)
 * @param {label} - Label of the dopdown list button
 * @param {listName} - Name of the dopdown list
 * @param {childListUrl} - Url of the dropdown first element (list of the other childs)
 * @param {childListLabel} - Label of the dopdown first element (list of the other childs)
 */
generateHeaderDropdown('Cours', 'Lessons', '../../lessons/lesson-list.html', 'Liste des cours');
generateHeaderDropdown('Exos', 'Exos', '../../exo/exo-list.html', 'Liste des exercices');
generateHeaderDropdown('TPs', 'Tps', '../../tp/tp-list.html', 'Liste des TPs');

// generates the lesson/exercises/Tps usig pageCreations.js
createLessons();
createExercises();
createTps();
