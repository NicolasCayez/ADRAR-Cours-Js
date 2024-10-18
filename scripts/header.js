// Dom Header
let header = document.querySelector('header');

// Header style
header.classList.add(`container-fluid`, 'w-100');

// Template de base
// Titre
let title = document.createElement('h1');
title.id = 'headerTitle';
title.innerText = 'Cours Js';
title.classList.add('mx-3', 'my-1', 'col-3', 'fs-3', 'text-light', 'fw-bold');
header.append(title);
// Menus dropdown
/* 
 * generateDropdown(label, listName, childListUrl, childListLabel){}
 * {label} -> label of the dopdown list button
 * {listName} -> name of the dopdown list
 * {childListUrl} -> url of the dropdown first element (list of the other childs)
 * {childListLabel} -> label of the dopdown first element (list of the other childs)
*/
function generateDropdown(label, listName, childListUrl, childListLabel){
    // global creation
    let oneDropdown = document.createElement('div');
    oneDropdown.classList.add('dropdown', 'col-1', 'mx-2');
    header.append(oneDropdown);
    // button creation
    let dropdownButton = document.createElement('button');
    dropdownButton.classList.add('btn', 'btn-light', 'dropdown-toggle', 'my-1', 'fw-semibold', 'col-8');
    dropdownButton.type = 'button';
    dropdownButton.setAttribute('data-bs-toggle', "dropdown");
    dropdownButton.setAttribute('aria-expanded', "false");
    dropdownButton.innerText = label;
    oneDropdown.append(dropdownButton);
    // list creation
    let dropdownList = document.createElement('ul');
    dropdownList.id = 'menu' + listName;
    dropdownList.classList.add ('dropdown-menu', 'dropdown-menu-light');
    oneDropdown.append(dropdownList);
    // first item (list)
    generateDropdownItem('menu'+listName, childListUrl, childListLabel);
    
    let dropdownDivider = document.createElement('li');
    dropdownList.append(dropdownDivider);
    let divider = document.createElement('hr');
    divider.class = 'dropdown-divider';
    dropdownDivider.append(divider);
}
/* 
 * generateDropdownItem(menuId, url, label){}
 * {menuId} -> id of parent
 * {url} -> url of the list element page
 * {label} -> label of the list element
*/
function generateDropdownItem(menuId, url, label){
    let parentElement = document.getElementById(menuId);
    let liItem = document.createElement('li');
    parentElement.append(liItem);
    let ItemDetail = document.createElement('a');
    ItemDetail.classList.add('dropdown-item', 'bg-light', 'active', 'text-dark');
    ItemDetail.href = url;
    ItemDetail.innerText = label;
    liItem.append(ItemDetail);
}
// Base creation with first list items
generateDropdown('Cours', 'Lessons', '../../lessons/lessons-list.html', 'Liste des cours');
generateDropdown('Exos', 'Exos', '../../exo/exo-list.html', 'Liste des exercices');
generateDropdown('Tp', 'Tp', '../../tp/tp-list.html', 'Liste des Tps');

// Clic sur le titre
title.addEventListener('click', () => {
    window.location.href = ('../../index.html');
})

// new pages
//lessons
// Exercises generateDropdownItem('menuExo', url, label);
generateDropdownItem('menuExos', '../../exo/exo1-variables.html', 'Exo1 - Variables');
generateDropdownItem('menuExos', '../../exo/exo2-boucles.html', 'Exo2 - Boucles');
//TPs