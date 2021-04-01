function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
function addition(max) {
    num1 = getRandomInt(max);
    num2 = getRandomInt(max);
    return num1 + " + " + num2 + " = ";
}
function question(max, operation) {
    let op = 1;
    if (operation === "r") {
        op = getRandomInt(2);
        return addition(max);
    }
    return op === 1? addition(max): subtraction(max)
}
function examPaper() {
    const tb = document.createElement("TABLE");
    tb.setAttribute("id", "examPaperTable");
    tb.style.width = '100%';
    tb.setAttribute('border', '1');
    document.body.appendChild(tb);

    for (let i = 0; i < 10; i ++) {
        const tr = document.createElement("TR");
        tr.setAttribute("id", "tr" + i);
        document.getElementById("examPaperTable").appendChild(tr);

        for (let j = 0; j < 2; j ++) {
            const td = document.createElement("TD");
            const c = document.createTextNode(question(5));
            td.appendChild(c);
            document.getElementById("tr" + i).appendChild(td);
        }
    }
}