const ROOT = "..";
const assets = require(ROOT + "/pictures.json")[0]

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function addition(max) {
    const num1 = getRandom(max) + 1;
    const num2 = getRandom(max) + 1;
    return {op1: num1, op2: num2, optr: "+"};
}
function question(max, operation) {
    let op = 0;
    if (operation === "r") {
        op = getRandom(1);
        return addition(max);
    }
    return op === 0? addition(max): subtraction(max)
}

function pickPic() {
    const dir = assets.contents[getRandom(assets.contents.length)];
    const pic = dir.contents[getRandom(dir.contents.length)];
    return ROOT + "/" + assets.name + dir.name + "/" + pic.name;
}
function assistIcons(op1, op2) {
    const span = document.createElement("SPAN");
    const picPath = pickPic();
    for (let i = 0; i < op1; i ++) {
        const img = document.createElement("IMG");
        img.setAttribute("src", picPath)
        span.appendChild(img)
    }
    span.appendChild(document.createTextNode(" "));
    for (let i = 0; i < op2; i ++) {
        const img = document.createElement("IMG");
        img.setAttribute("src", picPath)
        span.appendChild(img)
    }
    return span;
}
function questionCell(max, operation) {
    const {op1, op2, optr} = question(max, operation);
    const div = document.createElement("DIV");
    const q = document.createTextNode(`${op1} ${optr} ${op2} = `);
    div.appendChild(q);
    const br = document.createElement("br");
    div.appendChild(br);
    div.appendChild(assistIcons(op1, op2));
    return div;
}
function examPaper() {
    const tb = document.createElement("TABLE");
    tb.setAttribute("id", "examPaperTable");
    document.body.appendChild(tb);

    for (let i = 0; i < 10; i ++) {
        const tr = document.createElement("TR");
        // tr.setAttribute("id", "tr" + i);

        for (let j = 0; j < 2; j ++) {
            const td = document.createElement("TD");
            const div = questionCell(5);
            td.appendChild(div)
            // document.getElementById("tr" + i).appendChild(td);
            tr.appendChild(td);
        }
        // document.getElementById("examPaperTable").appendChild(tr);
        tb.appendChild(tr);
    }
}