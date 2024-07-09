// arrow function =  compact alternative to a traditional function
//      =>

const greeting = (userName) => console.log("Hello", userName );

greeting("Murilo");

const percent = (x,y) => x/y *100;

console.log(`${percent(10,32)}%`);

let grades = [100,50,90,60,80,70];

// grades.sort(decrescente)
// grades.forEach(print)

// function decrescente (x,y){
//     return y - x;
// };

// function print(element){
//     console.log(element)
// }

grades.sort((x,y) => y - x)

grades.forEach((element) => console.log(element))