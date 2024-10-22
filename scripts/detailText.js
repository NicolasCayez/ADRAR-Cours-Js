/**
 * Generates a card element for the lesson-exo-tp page
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
/**
 * Generates a card element for the lesson-exo-tp page
 * @function generateDetailPdf(itemId,urlPdf)
 * @param {itemId} - Id of the element
 * @param {urlPdf} - url of the pdf file
 */
export function generateDetailPdf(itemId, urlPdf){
    let detailPdf = document.getElementById(itemId);
    if(detailPdf != null){
        detailPdf.src = urlPdf;
    }
};
