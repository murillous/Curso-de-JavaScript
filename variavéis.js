let age = 21
var name = "Murilo"
let student = true

console.log("Hello", name);
console.log ("You are", age,"years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;