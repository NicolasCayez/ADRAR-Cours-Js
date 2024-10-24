// Dom Header
let header = document.querySelector('header');
// Header style
header.classList.add(`container-fluid`, 'w-100');

/**
 * creates the title and the click event for redirection
 */
export function generateHeaderTitle(){
    let header = document.querySelector('header');
    let title = document.createElement('h1');
    title.id = 'headerTitle';
    title.innerText = 'Cours Js';
    title.classList.add('mx-3', 'my-1', 'col-1', 'fs-3', 'text-light', 'fw-bold');
    header.append(title);
    //Clicc on the title
    title.addEventListener('click', () => {
        window.location.href = ('/index.html');
    });
};

/**
 * Generates the dropdown buttons with first element (list page)
 * @function generateHeaderDropdown(label,listName,childListUrl,childListLabel)
 * @param {label} - Label of the dopdown list button
 * @param {listName} - Name of the dopdown list
 * @param {childListUrl} - Url of the dropdown first element (list of the other childs)
 * @param {childListLabel} - Label of the dopdown first element (list of the other childs)
 */
export function generateHeaderDropdown(label, listName, childListUrl, childListLabel){
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
    generateHeaderDropdownItem('menu'+listName, childListUrl, childListLabel);
    
    let dropdownDivider = document.createElement('li');
    dropdownList.append(dropdownDivider);
    let divider = document.createElement('hr');
    divider.class = 'dropdown-divider';
    dropdownDivider.append(divider);
}

/**
 * Generates a dropdown menu element
 * @function generateHeaderDropdownItem(parentId,url,label)
 * @param {parentId} - Id of the parent element nesting the card
 * @param {url} - Url of the list element destination page
 * @param {label} - Label of the list element
 */
export function generateHeaderDropdownItem(parentId, url, label){
    let parentElement = document.getElementById(parentId);
    if(parentElement!=null){
        let liItem = document.createElement('li');
        parentElement.append(liItem);
        let ItemDetail = document.createElement('a');
        ItemDetail.classList.add('dropdown-item', 'bg-light', 'active', 'text-dark');
        ItemDetail.href = url;
        ItemDetail.innerText = label;
        liItem.append(ItemDetail);
    }
}