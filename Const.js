// const = a variable that can't be changed

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Diga o raio de um círculo");
radius = Number(radius);

// pi = 489.13

circumference = 2 * pi * radius;

console.log(`A circunferência é: ${circumference}`);