/**
 * Generates a card element for the list page
 * @function generateDetailText(itemId,text)
 * @param {itemId} - Id of the element
 * @param {text} - Text of the element
 */
export function generateDetailText(itemId, text){
    let detailText = document.getElementById(itemId);
    if(detailText != null){
        detailText.innerHTML = text;
    }
};