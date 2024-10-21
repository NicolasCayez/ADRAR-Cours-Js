/**
 * Formats strings for having colors in the code examples
 * @function formatCodeText(text)
 * @param {text} - Text to format
 */
export function formatCodeText(text){
    text = text.replaceAll(`console.log`, `<font color="cornflowerblue">console</font>.<font color="goldenrod">log</font>`)
                .replaceAll(`document.createElement`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">createElement</font>`)
                .replaceAll(`document.querySelector`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">querySelector</font>`)
                .replaceAll(`style.color`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">color</font>`)
                .replaceAll(`style.marginLeft`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">marginLeft</font>`)
                .replaceAll(`style.padding`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">padding</font>`)
                .replaceAll(`style.border `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">border </font>`)
                .replaceAll(`style.borderRadius `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">borderRadius </font>`)
                .replaceAll(`style.backgroundColor `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">backgroundColor </font>`)
                .replaceAll(`let`, `<font color="cornflowerblue">let</font>`)
                .replaceAll(`Math`, `<font color="cornflowerblue">Math</font>`)
                .replaceAll(`floor`, `<font color="goldenrod">floor</font>`)
                .replaceAll(`random`, `<font color="goldenrod">random</font>`)
                .replaceAll(`function`, `<font color="cornflowerblue">function</font>`)
                .replaceAll(`if(`, `<font color="hotpink">if(</font>`)
                .replaceAll(`}else`, `<font color="hotpink">}else</font>`)
                .replaceAll(`for(`, `<font color="hotpink">for(</font>`)
                .replaceAll(`while`, `<font color="hotpink">while</font>`)
                .replaceAll(`(`, `<font color="goldenrod">(</font>`).replaceAll(`)`, `<font color="goldenrod">)</font>`)
                .replaceAll(`[`, `<font color="goldenrod">[</font>`).replaceAll(`]`, `<font color="goldenrod">]</font>`)
                .replaceAll(`{`, `<font color="red">{</font>`).replaceAll(`}`, `<font color="red">}</font>`)
                .replaceAll(`$`, `<font color="red">$</font>`)
                .replaceAll(`//`, `<font color="green">//`).replaceAll(`\n`, `\n</font>`)
                .replaceAll(`//\*`, `<font color="lawngreen">//\*`).replaceAll(`\n`, `\n</font>`)
                .replaceAll(`true`, `<font color="deepskyblue">true</font>`)
                .replaceAll(`false`, `<font color="deepskyblue">false</font>`)
                ;
    return text;
};

/**
 * Formats strings nested in an array for having colors in the code examples
 * @function formatCodeDeclarations(text,tabWords)
 * @param {text} - Text to format
 * @param {tabWords} - array of words to format - variable and function names
 */
export function formatCodeDeclarations(text, tabWords){
    tabWords.forEach(word => {
        text = text.replaceAll(word,`<font color="aqua">` + word + `</font>`);
    });
    return text;
};