/* os parâmetros criam uma "variável*/

function parimp(n){
    if(n%2 == 0){
        return "par"
    }
    else{
        return "ímpar"
    }
}
console.log(parimp(2))
// let x = parimp(window.prompt("Digite um número"))
// console.log (x)

let num_1 = window.prompt("digite um número")
let num_2 = window.prompt("digite outro número")

function soma(n1, n2) {
    return  Number(n1) + Number(n2)
}

console.log(soma(num_1, num_2))

let b;
var v = function (y){
    return b = Number(y)**2
}
// v(window.prompt("Digite um número:"))
// console.log(b)3