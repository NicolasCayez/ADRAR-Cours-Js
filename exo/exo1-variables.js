import { formatCodeText } from "../scripts/codeTextReplacer";
//left part
let code1 = document.getElementById('txtCode');
let txtCode = `
let chaineCar1 = "Bonjour";
let chaineCar2 = "Vous";
let nb1 = 2;
let nb2 = -22;
let nbVirg1 = 5.999999;
let nbVirg2 = 25.99;
let tab1 = [chaineCar1, chaineCar2, 3, "Hey hey"];
let tab2 = [[0,1,2], [3,4,5]];

let obj1 = {
    firstName1 : "Chuck",
    lastName1 : "Norris",
    passion1 : "mettre ses pieds ou il veut, et souvent dans la g****e"};

let obj2 = {
    libelle2 : "aspirateur",
    ref2 : "ASPYR0004XT",
    prixTTC : 259.99};
        
let sayHelloWorld = () => {
    console.log("Hello World");
}

let sayHelloWorld2 = function(){
    console.log("Hello World");
}

sayHelloWorld2();`
txtCode = txtCode.replaceAll(`chaineCar1`,`<font color="aqua">chaineCar1</font>`)
                .replaceAll(`chaineCar2`,`<font color="aqua">chaineCar2</font>`)
                .replaceAll(`nb1`,`<font color="aqua">nb1</font>`)
                .replaceAll(`nb2`,`<font color="aqua">nb2</font>`)
                .replaceAll(`nbVirg1`,`<font color="aqua">nbVirg1</font>`)
                .replaceAll(`nbVirg2`,`<font color="aqua">nbVirg2</font>`)
                .replaceAll(`tab1`,`<font color="aqua">tab1</font>`)
                .replaceAll(`tab2`,`<font color="aqua">tab2</font>`)
                .replaceAll(`obj1`,`<font color="aqua">obj1</font>`)
                .replaceAll(`firstName1 `,`<font color="aqua">firstName1 </font>`)
                .replaceAll(`lastName1 `,`<font color="aqua">lastName1 </font>`)
                .replaceAll(`passion1 `,`<font color="aqua">passion1 </font>`)
                .replaceAll(`obj2`,`<font color="aqua">obj2</font>`)
                .replaceAll(`libelle2 `,`<font color="aqua">libelle2 </font>`)
                .replaceAll(`ref2 `,`<font color="aqua">ref2 </font>`)
                .replaceAll(`prixTTC `,`<font color="aqua">prixTTC </font>`)
                .replaceAll(`sayHelloWorld`,`<font color="aqua">sayHelloWorld</font>`)
                .replaceAll(`sayHelloWorld2`,`<font color="aqua">sayHelloWorld2</font>`);
code1.innerHTML = formatCodeText(txtCode);

// right part
let code2 = document.getElementById('txtConsole');
let txtConsole = `
Hello World`
code2.innerHTML = txtConsole;
