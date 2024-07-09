// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25, 30]
let total = prices.reduce(CheckPrice)
console.log(`O valor a ser pago é R$${total},00`)

function CheckPrice(elementoAnterior, elementoAtual){
    return elementoAnterior + elementoAtual
}