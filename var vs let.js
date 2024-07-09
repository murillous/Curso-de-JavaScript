// variable scope = where a variable is accessible

// let = variable are limited to block scope {}
// var = variable are limited to a function(){}

// global varible = is declared outside any function
// (if global, var will CHANGE browser's window properties)

for(let i = 1; i <= 10; i++){
    console.log(i)
}

console.log(i);