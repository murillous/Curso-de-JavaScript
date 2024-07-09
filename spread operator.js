// spread operator = allows an iterable such as an
// ...               array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)
//  basicamente divide o array em elementos unitários

let numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers)
console.log(maximum)

let class1 = ["Bob Esponja", "Patrick", "Sandy"];
let class2 = ["Lula Molusco", "Seu Siriguejo", "Plankton"];

class1.push(...class2);

console.log(class1)