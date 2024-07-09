// ternary operator = shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. A condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? exprIfTrue ? exprIfFalse

let adulto = ChecarIdade(12);
console.log(adulto);
function ChecarIdade(idade){

    return idade >= 18 ? true : false;
}

ChecarVencedor(true);

function ChecarVencedor(win){
    win ? console.log("VOCÊ GANHOU!") : console.log('VOCÊ PERDEU!')
}
