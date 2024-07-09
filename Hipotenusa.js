let a;
let b;
let c;

// a = window.prompt("Digite o lado A");
// a = Number(a);

// b = window.prompt("Digite o lado B");
// b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById("botão").onclick = function() {

    a = document.getElementById("Textbox1").value
    a = Number(a)

    b = document.getElementById("Textbox2").value
    b = Number(b)

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}