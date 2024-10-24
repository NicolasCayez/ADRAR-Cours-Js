// Dom Footer
let footer = document.querySelector('footer');
// Header style
if(footer != null){
    footer.classList.add(`container-fluid`, 'w-100');
}

/**
 * creates the date of the day
 */
export function generateFooterDate(){
    let today = new Date();
    let footer = document.querySelector('footer');
    let date = document.createElement('p');
    date.id = 'footerDate';
    date.innerText = `${today.getDay()} / ${today.getMonth()} / ${today.getFullYear()}`;
    date.classList.add('mx-3', 'my-1', 'col', 'fs-3', 'text-light', 'fw-bold', 'text-end');
    if(footer != null){
        footer.append(date);
    }
};