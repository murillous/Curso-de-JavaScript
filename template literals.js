// Template literals = delimeted with (`)
//                     instead of double or single quotes
//                     allow embedded variables and expression

let userName = "Murilo";
let itens = 3;
let total = 75;

console.log(`Olá, ${userName}`);
console.log(`Você tem ${itens} itens no carrinho`)
console.log(`Seu dinheiro total é R$${total},00`)

let text =
`Olá, ${userName}
Você tem ${itens} itens no carrinho
Seu dinheiro total é R$${total},00`;

console.log(text);
document.getElementById("MyLabel").innerHTML = text