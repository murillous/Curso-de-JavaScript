// destructuring = extract values from array and objetcs,
//                 then assign them to variables in a convinient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ------------------ EXAMPLE 1 ------------------
// SWAP VARIABLES VALUES

let a = 1;
let b = 2;

[a,b] = [b, a];
//Left side is destructuring
//Right side is an array

const test = [b, a]


console.log(a);
console.log(b);
console.log(test);

// ------------------ EXAMPLE 2 ------------------
// SWAP ARRAY VALUES

const colors = ["blue", "red", "yellow", "black"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors);

// ------------------ EXAMPLE 3 ------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const foods = ["Banana", "Hamburguer", "Apple", "Pineapple", "Mango"];

const [firstFood, secondFood, thirdFood, ...extraFoods] = foods;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(extraFoods);

// ------------------ EXAMPLE 4 ------------------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;
// Podemos criar valores padrões, caso o valor que estamos extraindo não exista

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// ------------------ EXAMPLE 5 ------------------ 
// DESTRUCTURING IN FUNCTION PARAMETERS

function displayCar ({year="Unknow year", make, model, horsePower}){
    // Podemos criar valores padrões, caso o valor que estamos extraindo não exista
    console.log(`This car is a ${make} ${model} ${year} with ${horsePower} horsePower`)
}

const car1 = {
    year: 2024,
    make: "Ford",
    model: "Jetta",
    horsePower: 600,
}

const car2 = {
    make: "Toytta",
    model: "Corolla",
    horsePower: 750
}

displayCar(car2)