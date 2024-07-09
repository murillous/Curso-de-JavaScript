let a;
let b;
let c;

document.getElementById("botão").onclick = function(){

    a = Math.floor(Math.random() * 21) + 1;
    document.getElementById("dado1").innerHTML = "Dado a: " + a

    b = Math.floor(Math.random() * 21) + 1;
    document.getElementById("dado2").innerHTML =  "Dado b: " + b

    c = Math.floor(Math.random() * 21 ) + 1;
    document.getElementById("dado3").innerHTML =  "Dado c: " + c
}