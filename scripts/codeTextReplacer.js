/**
 * Formats strings for having colors in the code examples
 * @function formatCodeText(text)
 * @param {text} - Text to format
 */
export function formatCodeText(text){
    text = text.replaceAll(`console.log`, `<font color="cornflowerblue">console</font>.<font color="goldenrod">log</font>`)
                .replaceAll(`let`, `<font color="cornflowerblue">let</font>`)
                .replaceAll(`(`, `<font color="goldenrod">(</font>`).replaceAll(`)`, `<font color="goldenrod">)</font>`)
                .replaceAll(`{`, `<font color="red">{</font>`).replaceAll(`}`, `<font color="red">}</font>`)
                .replaceAll(`//`, `<font color="green">//`).replaceAll(`\n`, `\n</font>`)
                .replaceAll(`0`, `<font color="deepskyblue">0</font>`)
                .replaceAll(`1`, `<font color="deepskyblue">1</font>`)
                .replaceAll(`2`, `<font color="deepskyblue">2</font>`)
                .replaceAll(`3`, `<font color="deepskyblue">3</font>`)
                .replaceAll(`4`, `<font color="deepskyblue">4</font>`)
                .replaceAll(`5`, `<font color="deepskyblue">5</font>`)
                .replaceAll(`6`, `<font color="deepskyblue">6</font>`)
                .replaceAll(`7`, `<font color="deepskyblue">7</font>`)
                .replaceAll(`8`, `<font color="deepskyblue">8</font>`)
                .replaceAll(`9`, `<font color="deepskyblue">9</font>`)
                ;
    return text;
};