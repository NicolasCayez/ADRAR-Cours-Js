/**
 * Generates a card element for the list page
 * @function generateCard(parentId,label,text,urlPage)
 * @param {parentId} - id of the parent element nesting the card
 * @param {label} - Title of the element
 * @param {text} - Content of the text box
 * @param {urlPage} - Url of the destination page
 */
export function generateCard(parentId, label, text, urlPage){
    let listCard = document.getElementById(parentId);
    if(listCard != null){
        //cadre blanc
        let card = document.createElement('div');
        card.classList.add('col-4', 'mx-auto', 'pe-5', 'mb-5');
        listCard.append(card);
        //card intérieur
        let blocDiv = document.createElement('div');
        blocDiv.classList.add('card', 'bg-custom-dark', 'border', 'border-2', 'border-light', 'p-3');
        card.append(blocDiv);
        // titre
        let blocLabel = document.createElement('h2');
        blocLabel.classList.add('fs-4');
        blocLabel.innerText = label;
        blocDiv.append(blocLabel);
        // résumé
        let blocTxt = document.createElement('div');
        blocTxt.classList.add('itemText','resumeCard', 'card', 'bg-dark', 'h-100', 'p-3');
        blocTxt.innerHTML = text;
        blocDiv.append(blocTxt);
        //Click on the card to redirect
        card.addEventListener('click', () => {
            window.location.href = (urlPage);
        });
    }
};