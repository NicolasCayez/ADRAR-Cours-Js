/**
 * Formats strings for having colors in the code examples
 * @function formatCodeText(text)
 * @param {text} - Text to format
 */
export function formatCodeText(text){
    text = text.replaceAll(`console.log`, `<font color="cornflowerblue">console</font>.<font color="goldenrod">log</font>`)
                .replaceAll(`document.createElement`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">createElement</font>`)
                .replaceAll(`document.querySelector`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">querySelector</font>`)
                .replaceAll(`document.getElementById`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">getElementById</font>`)
                .replaceAll(`document.body.`, `<font color="cornflowerblue">document</font>.<font color="goldenrod">body.</font>`)
                .replaceAll(`localStorage.getItem`, `<font color="cornflowerblue">localStorage</font>.<font color="goldenrod">getItem</font>`)
                .replaceAll(`localStorage.setItem`, `<font color="cornflowerblue">localStorage</font>.<font color="goldenrod">setItem</font>`)
                .replaceAll(`style.color`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">color</font>`)
                .replaceAll(`style.marginLeft`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">marginLeft</font>`)
                .replaceAll(`style.padding`, `<font color="cornflowerblue">style</font>.<font color="goldenrod">padding</font>`)
                .replaceAll(`style.border `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">border </font>`)
                .replaceAll(`style.borderRadius `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">borderRadius </font>`)
                .replaceAll(`style.backgroundColor `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">backgroundColor </font>`)
                .replaceAll(`style.background `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">background </font>`)
                .replaceAll(`style.display `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">display </font>`)
                .replaceAll(`style.maxHeight `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">maxHeight </font>`)
                .replaceAll(`style.position `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">position </font>`)
                .replaceAll(`style.left `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">left </font>`)
                .replaceAll(`style.top `, `<font color="cornflowerblue">style</font>.<font color="goldenrod">top </font>`)
                .replaceAll(`.src`, `.<font color="goldenrod">src</font>`)
                .replaceAll(`.display`, `.<font color="goldenrod">display</font>`)
                .replaceAll(`.test`, `.<font color="goldenrod">test</font>`)
                .replaceAll(`.match`, `.<font color="goldenrod">match</font>`)
                .replaceAll(`Array.from`, `<font color="cornflowerblue">Array</font>.<font color="goldenrod">from</font>`)
                .replaceAll(`classList.add`, `<font color="cornflowerblue">classList</font>.<font color="goldenrod">add</font>`)
                .replaceAll(`classList.remove`, `<font color="cornflowerblue">classList</font>.<font color="goldenrod">remove</font>`)
                .replaceAll(`classList.toggle`, `<font color="cornflowerblue">classList</font>.<font color="goldenrod">toggle</font>`)
                .replaceAll(`let`, `<font color="cornflowerblue">let</font>`)
                .replaceAll(`const`, `<font color="cornflowerblue">const</font>`)
                .replaceAll(`Math`, `<font color="cornflowerblue">Math</font>`)
                .replaceAll(`setTimeout`, `<font color="cornflowerblue">setTimeout</font>`)
                .replaceAll(`floor`, `<font color="goldenrod">floor</font>`)
                .replaceAll(`.random`, `.<font color="goldenrod">random</font>`)
                .replaceAll(`fetch`, `<font color="goldenrod">fetch</font>`)
                .replaceAll(`json(`, `<font color="goldenrod">json(</font>`)
                .replaceAll(`append(`, `<font color="goldenrod">append(</font>`)
                .replaceAll(`class`, `<font color="cornflowerblue">class</font>`)
                .replaceAll(`constructor`, `<font color="goldenrod">constructor</font>`)
                .replaceAll(`this`, `<font color="hotpink">this</font>`)
                .replaceAll(`new`, `<font color="hotpink">new</font>`)
                .replaceAll(`return`, `<font color="hotpink">return</font>`)
                .replaceAll(`async`, `<font color="hotpink">async</font>`)
                .replaceAll(`await`, `<font color="hotpink">await</font>`)
                .replaceAll(`addEventListener`, `<font color="goldenrod">addEventListener</font>`)
                .replaceAll(`innerText `, `<font color="goldenrod">innerText </font>`)
                .replaceAll(`innerHTML `, `<font color="goldenrod">innerHTML </font>`)
                .replaceAll(`value`, `<font color="goldenrod">value</font>`)
                .replaceAll(`length`, `<font color="goldenrod">length</font>`)
                .replaceAll(`addEventListener`, `<font color="goldenrod">addEventListener</font>`)
                .replaceAll(`function`, `<font color="cornflowerblue">function</font>`)
                .replaceAll(`if(`, `<font color="hotpink">if(</font>`)
                .replaceAll(`}else`, `<font color="hotpink">}else</font>`)
                .replaceAll(`for(`, `<font color="hotpink">for(</font>`)
                .replaceAll(`forEach(`, `<font color="hotpink">forEach(</font>`)
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