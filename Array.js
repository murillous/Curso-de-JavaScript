// array = think of it as a variable
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

fruits[1] = "coconut"   //Change the element
fruits.push("lemon");   //add an element
fruits.pop();           //removes last element
fruits.unshift("mango");// add an element to beginnig
fruits.shift();         // removes element from beginnig  

let length = fruits.length //indica quantos elementos tem
console.log(length)
let index = fruits.indexOf("banana"); // indica em que posição o elemento está
//                                       e retorna -1 caso não exista o elemento
console.log(index)

console.log(fruits);