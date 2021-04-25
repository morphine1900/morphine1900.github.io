const ROOT = "";

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function addition(max) {
    const num1 = getRandom(max) + 1;
    const num2 = getRandom(max) + 1;
    return {op1: num1, op2: num2, optr: "+"};
}
function question(max) {
    return addition(max)
}

function pickPic(picDir) {
    const pic = picDir.contents[getRandom(picDir.contents.length)];

    return ROOT + "/assets/" + picDir.name + "/" + pic.name;
}
function assistIcons(op1, op2, optr, assets) {
    const span = document.createElement("SPAN");
    const picPath = pickPic(assets);
    for (let i = 0; i < op1; i ++) {
        const img = document.createElement("IMG");
        img.setAttribute("src", picPath)
        span.appendChild(img)
    }
    span.appendChild(document.createTextNode(" " + optr + " "))
    for (let i = 0; i < op2; i ++) {
        const img = document.createElement("IMG");
        img.setAttribute("src", picPath)
        span.appendChild(img)
    }
    span.appendChild(document.createTextNode(" = "))
    return span;
}
function questionCell(max, assets) {
    const {op1, op2, optr} = question(max);
    const div = document.createElement("DIV");
    div.appendChild(assistIcons(op1, op2, optr, assets));
    // const q = document.createTextNode(`${op1} ${optr} ${op2} = `);
    // div.appendChild(q);
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));
    return div;
}
function examPaper(assets) {
    const headline = document.createElement("H2");
    headline.appendChild(document.createTextNode("1 2 3 4 5 6 7 8 9 10"))
    document.body.appendChild(headline);

    const tb = document.createElement("TABLE");
    tb.setAttribute("id", "examPaperTable");
    document.body.appendChild(tb);

    const picDir = assets.contents[getRandom(assets.contents.length)];
    for (let i = 0; i < 5; i ++) {
        const tr = document.createElement("TR");

        for (let j = 0; j < 2; j ++) {
            const td = document.createElement("TD");
            const div = questionCell(5, picDir);
            td.appendChild(div)
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
    tb.appendChild(document.createElement("HR"));
    for (let i = 0; i < 5; i ++) {
        const tr = document.createElement("TR");

        for (let j = 0; j < 2; j ++) {
            const td = document.createElement("TD");
            const div = questionCell(5, picDir);
            td.appendChild(div)
            tr.appendChild(td);
        }
        tb.appendChild(tr);
    }
}