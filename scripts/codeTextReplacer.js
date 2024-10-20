/**
 * Formats strings for having colors in the code examples
 * @function formatCodeText(text)
 * @param {text} - Text to format
 */
export function formatCodeText(text){
    text = text.replaceAll(`console.log`, `<font color="cornflowerblue">console</font>.<font color="goldenrod">log</font>`)
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

export function formatCodeDeclarations(text, tabWords){
    tabWords.forEach(word => {
        text = text.replaceAll(word,`<font color="aqua">` + word + `</font>`);
    });
    return text;
};